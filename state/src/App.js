import React from "react";
import Perso from "./Perso";


export class App extends React.Component{
  constructor(props){
    super(props)
    this.state = ["trum","poutine","macron","kim","Mohamed6"]
  }
    taille = this.state.length
  render() {
    return (
      <div>
        <h1>{this.state[4]}</h1>
      </div>
    );
  };
};
export default App