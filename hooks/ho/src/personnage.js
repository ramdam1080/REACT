import React from 'react';

const Personnage = (props) => {
    
    let rename = (x,y,w) => {
        props.setnom(x)
        props.setprenom(y)
        props.setage(w)
    }
    
    return (
        <div>
           <p>{props.nom}</p> 
           <p>{props.prenom}</p>
           <p>{props.age}</p>
           <button onClick={()=>rename("swag","man",10)}>CLICK</button>
        </div>
    );
};

export default Personnage;