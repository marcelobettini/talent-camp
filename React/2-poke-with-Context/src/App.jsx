import React, { useState, useEffect } from "react";
import PokemonContext from "./PokemonContext";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonInfo from "./components/PokemonInfo";

import "./App.css";



function App() {
  //Este estado lo pasaremos a los componentes a través del Context.Provider
  const [data, setData] = useState([])
  const [filter, setFilter] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  function handleErrors(res) {
    if (!res.ok) throw Error(res.status)
    return res.json();
  }

  //con Vite basta con poner el archivo en la carpeta exterior, con webpack habría que incluirla en la carpeta public
  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then(res => handleErrors(res))
      .then(data => setData(data))
      .catch(error => console.log(error))
  }, [])


  return (
    <PokemonContext.Provider value={{ data, setData, filter, setFilter, selectedPokemon, setSelectedPokemon }}>
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
    </PokemonContext.Provider>

  );
}

export default App;