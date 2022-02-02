import React from "react";
import Card1 from "./Card1";
import Cardall from "./Cardall";
import exercice from "./images/icon-exercise.svg"
import play from "./images/icon-play.svg"
import care from "./images/icon-self-care.svg"
import social from "./images/icon-social.svg"
import study from "./images/icon-study.svg"
import work from "./images/icon-work.svg"
import data from "./data.json"
console.log(data[0].timeframes.daily.previous);

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {temps: "daily"}
    
  }
  changep=(x)=>{
    this.setState({temps: x})
  }
  render(){
    return(
      <section className="c my-5">
          <div className="gridd">
            <Card1 jspp = {this.changep}/>
            <Cardall  week = {data[0].timeframes[this.state.temps].previous} heure = {data[0].timeframes[this.state.temps].current} titre = {data[0].title} logo = {work} color = "orange" />
            <Cardall  week = {data[1].timeframes[this.state.temps].previous}  heure = {data[1].timeframes[this.state.temps].current} titre = {data[1].title} logo = {play} color = "blue"/>
            <Cardall   week = {data[2].timeframes[this.state.temps].previous}  heure = {data[2].timeframes[this.state.temps].current} titre = {data[2].title} logo = {study} color = "rose"/>
            <Cardall  week = {data[3].timeframes[this.state.temps].previous}  heure = {data[3].timeframes[this.state.temps].current} titre = {data[3].title} logo = {exercice} color = "green"/>
            <Cardall  week = {data[4].timeframes[this.state.temps].previous}  heure = {data[4].timeframes[this.state.temps].current} titre = {data[4].title} logo = {social} color = "mauve"/>
            <Cardall  week = {data[5].timeframes[this.state.temps].previous}  heure = {data[5].timeframes[this.state.temps].current} titre = {data[5].title} logo = {care} color = "jaune"/>
          </div>
      </section>
    )
  }
}
export default App