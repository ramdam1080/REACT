import React from "react";

class Titre extends React.Component {
    
    render() {
        return (

            <div className="d-flex justify-content-between align-items-center container c py-3 ">
                <h2 className="text-white">ROCK <br />PAPER <br />SCISSORS</h2>
                <div className="text-center bg-white px-5 rounded-3">
                    <h3>score</h3>
                    <h2 className="le12 text-secondary">{+this.props.score}</h2>
                </div>
            </div>

        )
    }
}

export default Titre