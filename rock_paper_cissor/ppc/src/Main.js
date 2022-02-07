
import React from "react";


class Main extends React.Component {
    render() {
        
        return (
            <div className={this.props.color} onClick={() => this.props.stocks(this.props.color, this.props.main, true,0)} >
                <div>
                    <img src={this.props.main} alt="" />
                </div>
            </div>
        )
    }
}

export default Main