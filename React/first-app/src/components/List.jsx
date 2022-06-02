import React from "react";
import data from "../data/pokemon.json";

const List = () => {
  return (
    <div>
      <h1>List</h1>
      <ul>
        {data.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name.japanese}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
