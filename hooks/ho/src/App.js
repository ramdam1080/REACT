import React,{useState,useEffect} from 'react';
import Personnage from './personnage';
import Article from './Article';
const App = (props) => {
  let [nom,setNom] = useState("ramdam")
  let [mohamed,setMohamed] = useState("mohamed")
  let [age,setAge] = useState(40)
  let [articlee] = useState([
  {marque:"audi", model: "a6"},
  {marque:"bmw", model: "m3"},
  {marque:"audi", model: "a4"},
  {marque:"bmw", model: "m5"},
  {marque:"audi", model: "a3"}])
 
  return (
    <div>
      <Personnage 
      nom = {nom}
      setnom = {setNom}
      prenom = {mohamed}   
      setprenom = {setMohamed}
      age = {age}
      setage = {setAge}
      />
        {articlee.map((x,i)=>{
          return <Article
          key = {i}
          kiki = {x}
          />
        })}
      
    </div>
  );
};

export default App;