import React from "react";

const SuperheroesCard = ({ superhero }) => {
  return (
    <div className="card">
      <img src={superhero.url} alt={superhero.name} />
      <h2>{superhero.name}</h2>
      <p>Альтер эго: {superhero.alterego}</p>
      <p>Род деятельности: {superhero.occupation}</p>
      <p>Дрезья: {superhero.friends}</p>
      <p>Суперсилы: {superhero.superpowers}</p>
      <p>Информация: {superhero.info}</p>
    </div>
  );
};

export default SuperheroesCard;
