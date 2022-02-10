import React from 'react';

const Cards = (props) => {
    
    return (
        <div className='mb-2 '>
            <div className=' b'>
            <div>
                <img width="300" src= {props.article.img} alt="" />
            </div>
            <div className={props.article.color} >
                <div className='container'>
                <h2 className=''>{props.article.titre}</h2>
                <p>prix : {props.article.prix}</p>
                <p>stock : {props.article.stock}</p>
            
            {props.article.stock > 0 && <button onClick={props.test} className='bg-success rounded-3 p-1 px-2 text-white mb-3'>Acheter</button>}
            {props.article.stock == 0 && <p className='m-0 text-center fs-5'>rupture de stock</p>}
            </div>
            </div>

            </div>
        </div>
    );
};

export default Cards;