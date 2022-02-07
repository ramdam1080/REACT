import React from "react";
import Titre from "./Titre";
import triangle from "./images/bg-triangle.svg"
import Main from "./Main";
import paper from "./images/icon-paper.svg"
import ciseaux from "./images/icon-scissors.svg"
import pierre from "./images/icon-rock.svg"
import Rule from "./Rule";
import Combat from "./Combat"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { stock: undefined, img: undefined, affichage: false , score : 0 ,choixordi: "",h2:""  }
    // this.ola = {...this.state}
  }
  change = (x, y, z, /** @type {number} */ w) => {
    let copy = {...this.state}
    copy.stock = x
    copy.img = y
    copy.affichage = z
    let random = Math.floor(Math.random() * 3) + 1
    copy.choixordi = random
    // let  h2 = ""
    if (copy.stock == "blue" && random == 1 ) {
        copy.h2 = "YOU LOSE"
        // this.props.point = this.props.point -=1
        copy.score--
        
      }
      
      else if (copy.stock == "red" && random == 1 ) {
        copy.h2 = "YOU WIN"
        
        copy.score++
      }
      else if (copy.stock == "orange" && random == 1 ) {
        copy.h2 = "DRAWN"
       
      }
      else if (copy.stock == "orange" && random == 2 ) {
        copy.h2 = " YOU LOSE"
        
        copy.score--
      }
      else if (copy.stock == "red" && random == 2 ) {
        copy.h2 = "DRAWN"
        
      }
      else if (copy.stock == "blue" && random == 2 ) {
        copy.h2 = "YOU LOSE"
        copy.score--
        
      }
      else if (copy.stock == "blue" && random == 2 ) {
        copy.h2 = "YOU WIN"
        
        copy.score++
        
      }
      else if (copy.stock == "blue" && random == 3 ) {
        copy.h2 = "DRAWN"
        
      }
      
      else if (copy.stock == "orange" && random == 3 ) {
        copy.h2 = "YOU WIN"
        
        copy.score++
    }
    
    else if (copy.stock == "red" && random == 3 ) {
        copy.h2 = "YOU LOSE"
        
        copy.score--
    }
    this.setState(copy)
    console.log(copy);

    // this.setState({ stock: x, img: y, affichage: z , score : this.state.score + w })
  }
 
  olala = (/** @type {number} */ s)=>{
    let ola = {...this.state}
    ola.score += s
    console.log(ola);
    console.log(ola.score += s);
    // this.setState(ola)
}
  render() {
    return (
      <div className="mt-5">
        <Titre  score = {this.state.score}/>
        {this.state.affichage === false &&
          <div className="">
            <div className="d-flex flex-column align-items-center pt-5 test justify-content-center ">
              <div className="triangle ">
                <div className="d-flex justify-content-between ">
                  <Main point = {this.state.score} stocks={this.change} main={ciseaux} color="orange" />
                  <Main point = {this.state.score} stocks={this.change} main={paper} color="blue" />
                </div>
                <div className="align-items-end h-50 d-flex justify-content-center ">
                  <Main point = {this.state.score} stocks={this.change} main={pierre} color="red" />
                </div>
              </div>
            </div>

            <Rule />


          </div>}
        {this.state.affichage === true &&
          <Combat h2={this.state.h2} random = {this.state.choixordi}  ola = {this.olala} jsp={this.change} img={this.state.img} stocks={this.state.stock} />}
      </div>

    )
  }
}

export default App;
