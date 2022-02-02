import React from 'react';
// import './App'

class Lanav extends React.Component{

  render(){
    return(
      <header>
      <nav class="text-white bg-dark d-flex align-items-center justify-content-around">
        <h2>ola</h2>
        <ul class="list-inline d-flex gap-4 mt-3">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <ul class="list-inline d-flex gap-4 mt-3">
          <li>icon</li>
          <li>icon</li>
          <li>icon</li>
        </ul>
      </nav>
    </header>
    )
  }
}
export default Lanav