import { useEffect } from "react";
import Character from "./Character";

const Characters = ({ characters, setCharacters }) => {
  const url = "https://rickandmortyapi.com/api/character";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, [setCharacters]);
  return (
    <>
      <h1>Characters component</h1>
      <p>let's try UseEffect React's Hook</p>
      <div className="container">
        {characters.map((character) => (
          <Character character={character} />
        ))}
      </div>
    </>
  );
};

export default Characters;
