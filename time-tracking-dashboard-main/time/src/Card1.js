import React from "react";
import haze from "./images/image-jeremy.png"
class Card1 extends React.Component{
    
    
    render(){
        return(
            <div className="jeremy ">
                <div className=" card1  ">
                    <img className="ms-5 mb-3  " width="80" src={haze} alt="" />
                    <div>
                    <p className="ms-5 m-0">report for</p>
                    <h1 className="ms-5 text-white">Jeremy Robson</h1>
                    </div>
                </div>
                    <div className="temps" >
                    <p className="ms-5 mt-4" onClick={()=>this.props.jspp("daily")} >Daily</p>
                    <p className="ms-5"onClick={()=>{this.props.jspp("weekly")}} >Weekly</p>
                    <p className="ms-5 " onClick={()=>{this.props.jspp("monthly")}}>Monthly</p>
                    </div>
            </div>
        )
    }
}
export default Card1