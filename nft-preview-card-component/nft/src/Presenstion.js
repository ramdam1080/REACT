import React from "react";
import Etherium from "./images/icon-ethereum.svg"
import Horloge from "./images/icon-clock.svg"
class Presentation extends React.Component{

    render(){
        return(
            <div class="pt-2">
            <h4 class="text-white h">Equilibrium #3429</h4>
            <p class="color">Our Equillibrium collection promotes balance and calm.</p>
            <div class="d-flex gap-6 align-items-center">
            <div class="d-flex gap-2">
              <div>
            <img src={Etherium} alt="" />
            </div>
            <div class="">
            <p class="mt-1 aqua">0.041</p>
            </div>
            </div>
            <div class="d-flex gap-1">
              <div>
              <img src={Horloge} alt="" />
              </div>
              <div>
              <p class="horloge ">3 days left</p>
              </div>
            </div>
            </div>
            <hr/>
            </div>
        )
    }
}
export default Presentation