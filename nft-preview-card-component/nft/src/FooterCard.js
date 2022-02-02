import React from "react";
import Avatar from "./images/image-avatar.png"

class Card extends React.Component{

    render(){
        return(
            <div class="d-flex align-items-center gap-2">
          <div class="bnedem">
        <img class="img-fluid" src={Avatar} alt="" />
        </div>
        <div >
        <p class="pt-3 fin">Creation of <span class="text-white h">Jules Wyvern</span></p>
        </div>
        </div>
        )
    }
}
export default Card