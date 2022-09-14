import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default class NewsItem extends Component {
  render() {
    return (
      <div className="mt-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.imgurl} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Button href={this.props.url} target="_blank" variant="primary">
              Read more...
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
