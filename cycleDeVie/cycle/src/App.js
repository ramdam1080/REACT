import React from "react";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {date : new Date()}
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({date : new Date()})
    }, 100);
  }
render(){
  let temps = this.state.date.getHours()
  let jsp = this.state.date.getMinutes()
  let jss = this.state.date.getSeconds()
  return(
    <div>
      <p>{temps}h{jsp}h{jss}</p>
      <p></p>
    </div>
  )
}

}
export default App