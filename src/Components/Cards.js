import React , {Component} from "react";

class Cards extends  Component {


    render() {

        return (
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

        );
    }
}

export default Cards;