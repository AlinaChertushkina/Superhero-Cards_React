import React from 'react';

const SuperheroesCard = ({ superhero }) => {
    return (
      <div className="card">
        <img src={superhero.url} alt={superhero.name} />
        <h2>{superhero.name}</h2>
        <p>Alterego:{superhero.alterego}</p>
        <p>Occupation: {superhero.occupation}</p>
        <p>Friends:{superhero.friends}</p>
        <p>Superpowers: {superhero.superpowers}</p>
        <p>Info:{superhero.info}</p>
      </div>
    );
  };
  
  export default SuperheroesCard;