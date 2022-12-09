import React from "react";
import { Button, ButtonGroup, Container, Nav } from "react-bootstrap";

const ProgrammeDetails = () => {
  const buttons = [
    {
      btnName: "Day 1",
      className: "program__btn program__btn1",
    },
    {
      btnName: "Day 2",
      className: "program__btn program__btn2",
    },
  ];
  return (
    <Container>
      <div className="text-center">
        <h2 className="program_title">Programme Details</h2>
        <p className="mute_content">
          Hands-on sessions with Apoint experts that are hosted in The Fulertone
          Hotel Singapore on May 3 (9am - 5pm).
        </p>
      </div>
      <div className="text-center btngrp">
        <ButtonGroup aria-label="Basic example">
          {buttons.map((btn, index) => (
            <div key={index} className={btn.className}>
              {btn.btnName}
            </div>
          ))}
        </ButtonGroup>
      </div>
    </Container>
  );
};

export default ProgrammeDetails;
