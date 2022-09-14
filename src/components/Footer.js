import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";

export default class extends Component {
  render() {
    let year = new Date().getFullYear();
    return (
      <div>
        <Navbar expand="lg" variant="dark" bg="dark" fixed="bottom">
          <Container className="text-center text-muted">
            <Col lg={12} className="text-center text-light">
              {year} - All Rights are Reserved!
            </Col>
          </Container>
        </Navbar>
      </div>
    );
  }
}
