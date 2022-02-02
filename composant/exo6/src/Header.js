import React from "react";

class Header extends React.Component{

    render(){
        return(
            <header>
                <nav class="d-flex justify-content-around navbar bg-danger " onClick={(e)=>{
                    console.log(e.target);
                }}>
                  <h4>Logo</h4>
                  <ul class="d-flex gap-3 list-inline mt-2">
                      <li>link 1</li>
                      <li>link 2</li>
                      <li>link 3</li>
                  </ul>
                  <ul class="d-flex gap-3 list-inline mt-2">
                      <li>Icon</li>
                      <li>Icon</li>
                      <li>Icon</li>
                  </ul>

                </nav>
            </header>
        )
    }
}
export default Header