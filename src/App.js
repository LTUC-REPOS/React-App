import "./App.css";
import React, { Component } from "react";
import SelectedBeast from "./Components/SelectedBeast";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Data from "./Components/BeastsData.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.image_url,
      desc: this.props.description,
      title: this.props.title,
      horns: this.props.horns,
      isClicked: true,
    };

    this.ToggleShow = this.ToggleShow.bind(this);
  }

  GetModalData = (image_url, description, title, horns, clicked) => {
    this.setState({
      img: image_url,
      desc: description,
      title: title,
      horns: horns,
      isClicked: false,
    });

    console.log("Inside GetModalData");
    console.log(this.state);
  };
  ToggleShow = (show) => {
    this.setState({
      isClicked: true,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main jsonData={Data} ModalData={this.GetModalData} />
        <Footer />
        <SelectedBeast
          CardData={this.state}
          toggleModal={this.state.isClicked}
          fn={this.ToggleShow}
        />
      </div>
    );
  }
}

export default App;

// <SelectedBeast image_url ={this.state.img}
//  description = {this.state.desc}
//  title = {this.state.title}
//  horns = {this.state.horns}
//  isClicked = {this.state.isClicked}
