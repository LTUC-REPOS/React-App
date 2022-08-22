import React, { Component } from "react";
import Card from './Cards'
import Data from './BeastsData.json';

class CardsContainer extends Component {
/*
_id: 1

description: "A unicorn and a narwhal nuzzling their horns"
​​
horns: 1
​​
image_url: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
​​
keyword: "narwhal"
​​
title: "UniWhal"

*/



   
    InitRows = () => {

        
    // console.log(Data);

    // let rows = [];
    //  for (let i = 0; i < 5; i++) { // 5 rows
    //    let childs =[]
    //     for (const beast in Data) {
                 
    //           childs.push();             
    //         }
    //     }
    //     let div = react.createElement('div',{class:"cardsContainer"})  
    //  }



    //   //  React.createElement('div',{class:"cardsContainer"} , <Card/> )
            
    // }    
        
    }


/*

                <img src={this.props.image_url} alt={this.props.description} 
                title={this.props.title} 
                onClick={()=>{alert("you clicked on "+ this.props.title + " image")}}/>

                <h3>{this.props.description}</h3>
                <h3>{this.props.horns}</h3>
*/

    // rows are filled with cards
    render() {
        //this.InitRows()
        return (
            <div className={"mainContainer"} >
                {
                    Data.map(i => 
                    <Card image_url ={i.image_url} 
                    description = {i.description}
                    title = {i.title}
                    horns = {i.horns}
                    />  )   
                }
            </div>

        );
    }

}

export default CardsContainer