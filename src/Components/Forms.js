import Form from "react-bootstrap/Form";
import React from "react";

class Forms extends React.Component {
  SelectorHandler = (e) => {
    this.props.selectorHandler(e.target.value);
  };

  render() {
    return (
      <>
        <Form.Group className="mb-3">
          <div
            style={{ textAlign: "left", padding: "50px", marginBottom: "30px" }}
          >
            <h1>Choose Numbers of Horns</h1>
            <Form.Select
              size="lg"
              style={{ marginTop: "50px" }}
              onChange={this.SelectorHandler}
            >
              <option value={0}> All</option>
              <option value={1}> 1 Horn</option>
              <option value={2}> 2 Horn</option>
              <option value={3}> 3 Horn</option>
              <option value={100}> 100 Horn</option>
            </Form.Select>
          </div>
        </Form.Group>
      </>
    );
  }
}

export default Forms;
