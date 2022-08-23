import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: this.props.toggleModal,
    };
  }

  Hide = () => {
    console.log("Before Hide" + this.state.show);
    this.props.fn(false);
    this.setState({
      show: false,
    });

    console.log("after Hide" + this.state.show);
  };

  render() {
    console.log("render " + this.state.show);
    if (this.props.toggleModal) {
      this.setState({
        show: true,
      });
    }

    return <h1>{"yes " + this.props.title}</h1>;
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
