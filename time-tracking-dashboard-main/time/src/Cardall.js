import React from "react";
import ellipsis from "./images/icon-ellipsis.svg"
class Cardall extends React.Component{
    
    
    render(){
        return(
            <div className={this.props.color + " logo  "}>
               
                    <div className="gogo d-flex justify-content-end align-items-center" > 
                    <img className="img-fluid" src= {this.props.logo} alt="" />
                    </div>
                
                <div className=" py-4  card">
                    <div className="d-flex justify-content-between c">
                    <p className="text-white fs-5">{this.props.titre}</p>
                    <div className="pointp">
                    <img className="point" src={ellipsis} alt="" />
                    </div>
                    </div> 
                    <div className="c">
                    <p className="text-white h1">{this.props.heure}hrs</p>
                    <p className="text-white">Last week-{this.props.week}hrs</p>              
                    </div>
                </div>
            </div>
        )
    }
}

export default Cardall