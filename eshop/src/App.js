import React, { useState } from 'react';
import Cards from './Cards';
import coca from "./img/Coca.png"
import fanta from "./img/fanta.png"
import oasis from "./img/oasis.png"
// let panier = []

const App = () => {
  let [article, setArticle] = useState([
    { nom: "coca", img: coca, prix: 1, stock: 5, color: "white" },
    { nom: "fanta", img: fanta, prix: 1.5, stock: 5, color: "white" },
    { nom: "oasis", img: oasis, prix: 2, stock: 5, color: "white" }])

  let [argent, setArgent] = useState(20)
  const [panier, setPanier] = useState([]);

  const set = (i) => {
    let newArticle = [...article]
    if (argent > newArticle[i].prix && newArticle[i].stock > 0) {
      setArgent(argent -= newArticle[i].prix)
      if (newArticle[i].stock > 0) {
        newArticle[i].stock -= 1
      }
      panier.push(newArticle[i])

    } else if (argent <= 0) {
      setArgent(0)
    
    }  
    setArticle(newArticle)

    console.log(panier);
  }
  return (
    <div className='c'>
      <h1>Mon argent: {argent}</h1>
      <div className='d-flex  d gap-4 container'>
        {article.map((element, i) =>
          <Cards
            key={i}
            article={element}
            test={() => set(i)}
            panier={panier}
          />
        )}
      </div>
      <div className=''>
        <p>mon panier :</p>
      </div>
      <div>
        {
          panier.map((article, i) => (
            <div className='d-flex gap-3 ' key={i} > <p>Produit : {article.nom} || unité : 1</p> <button className='mb-3 text-white rounded-3 py-1 px-3 bg-danger' onClick={(e) => {
                let ret = [...panier]
                ret.splice(ret.indexOf(article), 1)
                setArgent(argent += article.prix)
                setPanier(ret)
              article.stock += 1;
            }}>rendre</button> </div>

          ))
        }

      </div>

    </div>
  );
};

export default App;