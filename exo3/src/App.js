import React from "react";
let date = new Date()
let heure = date.getHours()
let minute = date.getMinutes()
let jour = date.getDate()
let mois = date.getMonth()
let anne = date.getFullYear()
class Kiki extends React.Component{
  render(){
  
return(
  <div>
      <h1>{heure}h{minute} le {jour}/{mois}/{anne} </h1>
  </div>
)
}

}

export default Kiki;