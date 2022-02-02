import React from "react";

import carre from "./images/image-equilibrium.jpg"
import Cube from "./Cube"
import FooterCards from "./FooterCard"
import Presentation from "./Presenstion";
class App extends React.Component{

  render(){
    return(
      <section>
        <div class="papa ">
          <div class="container">
          <Cube/>
          <Presentation/>
          <FooterCards/>
        
        </div>
        </div>
      </section>
    )
  }
}

export default App