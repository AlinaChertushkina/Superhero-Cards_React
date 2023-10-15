import SuperheroesCard from "./SuperheroesCard";
import { data } from "./data/superheroes";

const SuperheroesList = () => {
  const superheroes = data;

  return (
    <div className="superheroes-list">
      {superheroes.map((superhero) => (
        <SuperheroesCard key={superhero.id} superhero={superhero} />
      ))}
    </div>
  );
};

export default SuperheroesList;
