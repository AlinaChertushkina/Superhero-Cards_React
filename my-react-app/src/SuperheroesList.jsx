import React, { useState, useEffect } from "react"; //хук useState для хранения данных о супергероях, которые мы получаем из JSON-файла. Хук useEffect для выполнения запроса на сервер и получения данных при загрузке компонента
import SuperheroesCard from "./SuperheroesCard";

const SuperheroesList = () => {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch("superheroes.json") // Загрузка данных из JSON-файла
      .then((response) => response.json())
      .then((data) => setSuperheroes(data));
  }, []);

  return (
    <div className="superheroes-list">
      {superheroes.map((superhero) => (
        <SuperheroesCard key={superhero.id} superhero={superhero} />
      ))}
    </div>
  );
};

export default SuperheroesList;
