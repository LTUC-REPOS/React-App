import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Cards from "./Cards";
import { Card, Button, CardGroup } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: this.props.CardData.isClicked,
    };
  }

  Hide = () => {
    this.props.CardData.isClicked = false;
    this.setState({
      show: true,
    });
  };

  render() {
    return (
      <Modal
        show={this.props.CardData.isClicked}
        onHide={this.Hide}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{ fontSize: "32px", textAlign: "center" }}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Title id="example-custom-modal-styling-title">
          <h1>{this.props.CardData.title}</h1>
        </Modal.Title>
        <Modal.Body>
          <span>
            <img
              style={{ width: "100%" }}
              variant="top"
              src={this.props.CardData.img}
              alt={this.props.CardData.desc}
              title={this.props.CardData.title}
            />

            <h2> Description : {this.props.CardData.desc}</h2>
            <h2> Horns : {this.props.CardData.horns}</h2>
          </span>
        </Modal.Body>
      </Modal>
    );
  }
}
export default SelectedBeast;

{
  /* <CardModal
image_url={this.props.CardData.image_url}
description={this.props.CardData.description}
title={this.props.CardData.title}
horns={this.props.CardData.horns}
toggleShow={this.props.toggleModal}
/> */
}

/*
      <Modal
        show={this.state.show}
        onHide={this.Hide}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        animation={false}
      >
        <Modal.Header closeButton />

        <Modal.Body>
          <h1>{this.props.title}</h1>
           <Card   style={{ width: '30rem', border: '0.5px solid grey' , marginLeft: "50px" }}>
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Body>

            <Card.Img   variant="top" src={this.props.image_url} alt={this.props.description} 
            title={this.props.title}
            onClick=
            {this.ShowModal} />

            <Card.Text>
            {this.props.description}
            </Card.Text>

            <ListGroup variant="flush">
            <ListGroup.Item>Horns: {this.props.horns}</ListGroup.Item>
            <ListGroup.Item>Like: {this.state.likes}</ListGroup.Item>
            </ListGroup>

            </Card.Body>
            <Button style={{fontSize:'29px'}} onClick = { this.ClickHandler  }  variant="primary">Like</Button> 

            </Card> }
            </Modal.Body>
            </Modal>
*/
