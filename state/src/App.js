import React from "react";
import Perso from "./Perso";


export class App extends React.Component{
  
  constructor(props){
    super(props)
    this.state = ["trum","poutine","macron","kim","Mohamed6"]
    this.taille = this.state.length
}
removeEL=()=>{
  this.state.shift(); 
  if(this.taille > 0 ){
    this.taille = this.state.length
  }
  console.log(this.taille);
  this.siyessa()
}
siyessa=()=>{
  if(this.taille === 1 ){
    document.querySelector('body').style.backgroundColor="orange"
  }else if (this.taille === 0){
    document.querySelector('body').style.backgroundColor="red"
    
  }
}
  render() {
    
    return (
      <div>
        <h1>{this.state[4]}</h1>
        <button onClick={()=>this.removeEL()}>YOUHOUUUUUUUUUUUUUUUUUU</button>
      </div>
    );
  };
};
export default App