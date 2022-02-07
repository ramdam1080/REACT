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
    this.state = { stock: undefined, img: undefined, affichage: false , score : 0   }
    this.ola = {...this.state}
  }
  change = (x, y, z, /** @type {number} */ w) => {
    this.setState({ stock: x, img: y, affichage: z , score : this.state.score + w })
  }
 
  // majScore = (/** @type {number} */ param) => {
  //   this.setState({ score: this.state.score + param})
  // }
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
          <Combat  jsp={this.change} img={this.state.img} stocks={this.state.stock} />}
      </div>

    )
  }
}

export default App;
