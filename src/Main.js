import React, { Component } from "react";

import CardsContainer from "./Components/CardsContainer";

class Main extends Component {
  render() {
    return (
      <CardsContainer
        jsonData={this.props.jsonData}
        ModalData={this.props.ModalData}
      />
    );
  }
}

export default Main;
