import React from "react";
import { Container, Row, Col, Image, NavbarToggle, Nav} from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation({handleNavClick}) {
  return(
    <div className="App">
      <header className="App-header">
        <Navbar collapseOnSelect expand="lg" fixed="top" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">JK</Navbar.Brand>
            <NavbarToggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => handleNavClick("Home")} href="#home">Home</Nav.Link>

                <Nav.Link onClick={() => handleNavClick("About")} href="#about">About</Nav.Link>
                
                <Nav.Link onClick={() => handleNavClick("Projects")} href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container id="home">
          <Row className="mt-5">
            <h1>Jaryd Knight</h1>
            <h2>Full Stack WebDev</h2>
          </Row>
          <Row>
            <Col className="mx-5 px-5 my-3">
              <Image src={require("../../assets/ProfilePic/IMG_7059.JPEG")} fluid roundedCircle width={"200px"} height={"200x"} alt="profile pic"/>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default Navigation;