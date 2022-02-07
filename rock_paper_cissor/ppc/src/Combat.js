import React from "react";
import Titre from "./Titre";
import Main from "./Main"
import paper from "./images/icon-paper.svg"
import ciseaux from "./images/icon-scissors.svg"
import pierre from "./images/icon-rock.svg"
import Rule from "./Rule";

class Combat extends React.Component {
    constructor(props) {
        super(props)
        this.state = { blue: "blue", red: "red", orange: "orange" }
    }

    random = Math.floor(Math.random() * 3) + 1
    h2 = ""
    scores = 0
    render() {
        if (this.props.stocks == "blue" && this.random == 1 ) {
            this.h2 = "YOU LOSE"
            // this.props.point = this.props.point -=1
            this.props.jsp(undefined,undefined,false,1)
            
        }
        
        if (this.props.stocks == "red" && this.random == 1 ) {
            this.h2 = "YOU WIN"
            this.props.jsp(undefined,undefined,false,1)
        }
        if (this.props.stocks == "orange" && this.random == 1 ) {
            this.h2 = "DRAWN"
            this.props.jsp(undefined,undefined,false,1)
        }
        if (this.props.stocks == "orange" && this.random == 2 ) {
            this.h2 = " YOU LOSE"
        }
        if (this.props.stocks == "red" && this.random == 2 ) {
            this.h2 = "DRAWN"
        }
        if (this.props.stocks == "blue" && this.random == 2 ) {
            this.h2 = "YOU LOSE"
        }
        if (this.props.stocks == "blue" && this.random == 2 ) {
            this.h2 = "YOU WIN"
        }
        if (this.props.stocks == "blue" && this.random == 3 ) {
            this.h2 = "DRAWN"
        }
        
        if (this.props.stocks == "orange" && this.random == 3 ) {
            this.h2 = "YOU WIN"
        }
        
        if (this.props.stocks == "red" && this.random == 3 ) {
            this.h2 = "YOU LOSE"
        }
        
       
        

        return (
            <div className="mt-5">
                {/* <Titre score = {this.scores}/> */}

                <div className="d-flex justify-content-center align-items-center gapp pt-5">
                    <div>
                        <p className="text-white text-center">YOU PICKED</p>
                        {<Main color={this.props.stocks} main={this.props.img} />}

                    </div>

                    <div className="text-center text-center">
                        <h2 className="text-white">{this.h2}</h2>
                        <button className="again py-2 px-5" onClick={() => this.props.jsp(undefined, undefined, false)}>PLAY AGAIN</button>
                    </div>

                    <div className="text-center">
                        <p className="text-white text-center">THE HOUSE PICKED</p>
                        {this.random === 1 && <Main color={this.state.orange} main={ciseaux} />}
                        {this.random === 2 && <Main color={this.state.red} main={pierre} />}
                        {this.random === 3 && <Main color={this.state.blue} main={paper} />}

                    </div>

                </div>
                <Rule />
            </div>
        )
    }
}
export default Combat