import React, { useState } from 'react';
import  "./App.css"

const App = () => {
  let [counter,setCounter] = useState(0)
  return (
    <div>
      <p>{counter}</p>
      <button onClick={()=>{setCounter(counter +=1);alert('+1')}}>click</button>
      <br />
      <input type="text" onBlur={(e)=>{e.target.style.backgroundColor="white" ; e.target.style.color="black"}}  onFocus={(e)=>{e.target.style.backgroundColor = "green"; e.target.style.color = "white"}}  onKeyPress={(e)=>{if(e.key == "Enter"){setCounter(counter = e.target.value); alert(`le p a changer par ${e.target.value}`)}}}/>
    </div>
  );
};

export default App;