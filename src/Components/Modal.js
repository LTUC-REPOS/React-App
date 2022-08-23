import React from "react";
import Cards from "./Cards";
import { Card, Button, CardGroup } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

class CardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.toggleShow(),
    };
  }
  Hide = () => {
    this.setState({
      show: false,
    });
  };

  Show = () => {
    this.setState({
      show: true,
    });
  };

  render() {
    return (
      <Modal
        show={this.state.show}
        onHide={this.Hide}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton />

        <Modal.Body>
          <h1>{this.props.title}</h1>
          {/* <Card   style={{ width: '30rem', border: '0.5px solid grey' , marginLeft: "50px" }}>
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

            </Card> */}
        </Modal.Body>
      </Modal>
    );
  }
}

export default CardModal;

/*
        <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
*/
