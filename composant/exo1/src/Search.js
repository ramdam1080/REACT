import React from "react";


class Input extends React.Component{
    render(){
        return(
            <form action="">
                <label htmlFor="Search">Search:</label>
                <input type="text" name="Search " id="Search" />
                <button>Go</button>
            </form>

        )
    }
}
export default Input