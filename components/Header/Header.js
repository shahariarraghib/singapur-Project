import Image from "next/image";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../public/logo/logoNew.jpg";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className="d-block d-sm-flex text-center">
        <Navbar.Brand href="/" className="d-block d-sm-inline">
          <Image src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-xl-auto">
            <Nav.Link className="menu" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="menu" href="AccomodationPage">
              Accomodation
            </Nav.Link>
            <Nav.Link className="menu" href="ProgramPage">
              Program
            </Nav.Link>
            <Nav.Link className="menu" href="SpeakerPage">
              Speakers
            </Nav.Link>
            <NavDropdown
              className="menu"
              title="Exhibitors & More"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="menu1" href="ExhibitorsPage">
                Exhibition
              </NavDropdown.Item>
              <NavDropdown.Item className="menu1" href="PostConferencePage">
                Post Conference Workshop
              </NavDropdown.Item>
              <NavDropdown.Item
                className="menu1"
                href="SupportingOrganizations"
              >
                Supporting Organisations
              </NavDropdown.Item>

              <NavDropdown.Item className="menu1" href="GalleryPage">
                Gallery
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="RegistrationPage">
              <div className="primary__btn register__btn">
                Register Now
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
