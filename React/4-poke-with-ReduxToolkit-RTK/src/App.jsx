import React from "react";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonInfo from "./components/PokemonInfo";
import "./App.css";


function App() {

  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        width: "60vw",
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <div
        style={{
          display: "grid",
          alignItems: 'center',
          gridTemplateColumns: "80% 20%",
          gap: "2rem",
        }}
      >
        <div>
          <PokemonFilter />

          <PokemonTable />
        </div>
        <PokemonInfo />
      </div>
    </div>

  );
}

export default App;