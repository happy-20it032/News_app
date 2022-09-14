import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export class NavBar extends Component {
  render() {
    return (
      <div>
        {/* {<Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
              </Nav>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  All articles
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Top Headlines
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>} */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">{this.props.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <NavDropdown title="News Type" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/AllNews">
                    All articles
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/TopHeadlines">
                    Top Headlines
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
