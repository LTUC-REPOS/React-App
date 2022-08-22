import './App.css'; 
import React, { Component }  from 'react';
import CardsContainer from './Components/CardsContainer';

class App extends Component  {
  render(){
  return (
    <div className="App">
      <CardsContainer />
    </div>  
  );
}
}


export default App;
