import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const ButtonTap = () => {
  const buttons = [
    {
      btnName: "Participent",
      className: "program__btn program__btn1",
      path: "RegistrationPage",
    },
    {
      btnName: "Sponser",
      className: "program__btn program__btn2",
      path: "ExhibitorsPage",
    },
    {
      btnName: "Workshop",
      className: "program__btn program__btn2",
      path: "PostConferencePage",
    },
  ];
  return (
    <div>
      <div className="tab" aria-label="Basic example">
        {buttons.map((btn, index) => (
          <a href={btn.path} key={index} className={btn.className}>
            {btn.btnName}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ButtonTap;
