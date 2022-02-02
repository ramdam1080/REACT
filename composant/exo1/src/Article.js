import React from "react";

class Text extends React.Component{
    nombrearticlee = 2
    render(){
        return(
            <div>
                <button  onClick={()=>{ this.props.nbrarticle("ola") }}>Quel est le titre</button>
                <h3>{this.props.titre}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, cumque! Deserunt aut omnis ratione inventore, eum commodi. Fuga sed voluptatibus corporis quis assumenda. Aperiam quos architecto id. Odit, quos illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nisi expedita adipisci ab odit autem aliquid quasi saepe eaque, amet consequatur fugit aspernatur necessitatibus ut sint quo a! Tenetur natus in aliquam corporis quam distinctio vel facere consequatur porro dolore.</p>
            </div>
        )
    }
}
export default Text