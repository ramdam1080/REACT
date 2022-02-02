import React from "react";
import Search from "./Search"

class Lanav extends React.Component{
accueil(x){
console.log(x);
}
    render(){
        return(
            <nav>
<ul>
    <li onClick={()=> this.accueil('acceuil')}>link 1</li>
    <li onMouseEnter={()=>this.accueil('galerie')}>link 2</li>
    <li onDoubleClick={()=> this.accueil('contact')}>link 3</li>
</ul>
<Search/>

            </nav>

        )
    }
}

export default Lanav