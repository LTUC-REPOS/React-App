import React, { Component } from "react";
import Card from "./Cards";
import Data from "./BeastsData.json";
import { BSCard, Button, CardGroup } from "react-bootstrap";

class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let cardsArray = this.props.jsonData.map((i) => {
      return (
        <Card
          image_url={i.image_url}
          description={i.description}
          title={i.title}
          horns={i.horns}
          ModalData={this.props.ModalData}
        />
      );
    });

    let cardsInRow = 3;
    let NumberOfRows = Math.ceil(cardsArray.length / cardsInRow);

    let counter = 0;
    let rows = [];

    for (let j = 0; j < NumberOfRows; j++) {
      let tempRow = [];
      for (let i = 0; i < cardsInRow; i++) {
        // 0 => 4
        tempRow.push(cardsArray[counter]);
        counter++;
      }
      rows.push(
        React.createElement("div", { class: "cardsContainer" }, tempRow)
      );
    }

    return <div className={"mainContainer"}>{rows}</div>;
  }
}

export default CardsContainer;
