import React from "react";
import { Container, Image, NavbarToggle, Nav} from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
    return(
    <div className="App">
      <header className="App-header">
        <Navbar expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#home">JK</Navbar.Brand>
            <NavbarToggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link>About</Nav.Link>
                <Nav.Link>Projects</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <h1>Jaryd Knight</h1>
        <h2>"Full Stack WebDev"</h2>
        <Image src={require("../../assets/ProfilePic/IMG_7059.jpg")} roundedCircle width={"150px"} height={"150px"} alt="profile pic"/>
      </header>
    </div>
    )
}

export default Navigation;