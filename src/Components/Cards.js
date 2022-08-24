import React, { Component } from "react";

import swal from "sweetalert";

import BSCard from "react-bootstrap/Card";
import { Card, Button, CardGroup } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: "💔",
      Data: {
        img: this.props.image_url,
        desc: this.props.description,
        title: this.props.title,
        horns: this.props.horns,
        isClicked: true,
      },
    };
  }
  Addlikes = () => {
    if (this.state.likes == "💔") return (this.state.likes = "♥️");
    else if (this.state.likes.length > 5) {
      swal("Stop it 😤");
      return this.state.likes;
    } else {
      return (this.state.likes += "♥️");
    }
  };
  PassDataToApp = () => {
    this.props.ModalData(
      this.props.image_url,
      this.props.description,
      this.props.title,
      this.props.horns,
      true
    );
  };
  ClickHandler = () => {
    this.setState({
      likes: this.Addlikes(),
    });
  };
  render() {
    return (
      <Card
        style={{
          width: "30rem",
          border: "0.5px solid grey",
          marginLeft: "50px",
        }}
      >
        <Card.Header>{this.props.title}</Card.Header>
        <Card.Body>
          <Card.Img
            variant="top"
            src={this.props.image_url}
            alt={this.props.description}
            title={this.props.title}
            onClick={this.PassDataToApp}
          />

          <Card.Text>{this.props.description}</Card.Text>

          <ListGroup variant="flush">
            <ListGroup.Item>Horns: {this.props.horns}</ListGroup.Item>
            <ListGroup.Item>Like: {this.state.likes}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Button
          style={{ fontSize: "29px" }}
          onClick={this.ClickHandler}
          variant="primary"
        >
          Like
        </Button>
      </Card>
    );
  }
}

export default Cards;

/*
  <Card style={{ width: '18rem' }}>
      <Card.Header>Featured</Card.Header>

      
      
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
*/

/*
            <div>
                <h1>{this.props.title}</h1>

                <img src={this.props.image_url} alt={this.props.description} 
                title={this.props.title} 
                onClick={ ()=> {alert("you clicked on "+ this.props.title + " image")}}/>

                <h3>{this.props.description}</h3>
                <h3>{this.props.horns}</h3>
                <label>{"Favs"}</label>
                <button>Do you like it</button>
            </div>
*/

/*
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
*/

/*
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
*/
