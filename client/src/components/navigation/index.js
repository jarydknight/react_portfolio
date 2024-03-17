import React from "react";
import { Container, NavbarToggle, Nav} from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ReactComponent as Logo } from "../../assets/icons/logoSvg.svg";
import {Link} from "react-router-dom";

function Navigation() {
  return(
    // <div className="App">
      <header className="App-header">
        <Navbar collapseOnSelect expand="lg" fixed="top" className="bg-body-tertiary d-block">
          <Container fluid className="mx-2">
                <Navbar.Brand className="m-0" to="/">
                  <Link to="/">
                    <Logo />
                  </Link>
                </Navbar.Brand>
                <NavbarToggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    {/* <Nav.Link onClick={() => handleNavClick("Home")} to="/" >Home</Nav.Link>

                    <Nav.Link onClick={() => handleNavClick("About")} to="/about" >About</Nav.Link>
                
                    <Nav.Link onClick={() => handleNavClick("Projects")} to="/projects">Projects</Nav.Link> */}

                    <Nav.Link><Link to="/" className="navLink">Home</Link></Nav.Link>

                    <Nav.Link><Link to="/about" className="navLink">About</Link></Nav.Link>

                    <Nav.Link><Link to="/projects" className="navLink">Projects</Link></Nav.Link>

                    <Nav.Link><Link to="/contact" className="navLink">Contact</Link></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
          </Container>
        </Navbar>

  
      </header>
    // </div>
  )
}

export default Navigation;