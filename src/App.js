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
    this.state = { isClicked: false };
  }

  GetModalData = (image_url, description, title, horns, clicked) => {
    this.setState({
      img: image_url,
      desc: description,
      title: title,
      horns: horns,
      isClicked: clicked,
    });

    console.log("Inside GetModalData");
    console.log(this.state);
  };
  ToggleShow = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  Modal = () => {
    return <SelectedBeast toggle={this.ToggleShow} CardData={this.state} />;
  };

  render() {
    console.log("Inside App Render");
    console.log(this.state);

    return (
      <div className="App">
        <Header />
        <Main jsonData={Data} ModalData={this.GetModalData} />
        <Footer />
        {this.Modal()}
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
