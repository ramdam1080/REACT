import React from 'react';

const Article = (props) => {
    return (
        <div>
            <h1>j'ai : {props.kiki.marque} {props.kiki.model}</h1>
        </div>
    );
};

export default Article;