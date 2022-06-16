import React, { useReducer, useEffect } from "react";
import PokemonContext from "./PokemonContext";
import { PokemonReducer } from "./PokemonReducer";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonInfo from "./components/PokemonInfo";
import "./App.css";


function App() {
  const [state, dispatch] = useReducer(PokemonReducer, { data: [], filter: "", selectedPokemon: null })
  function handleErrors(res) {
    if (!res.ok) throw Error(res.status)
    return res.json();
  }

  //con Vite basta con poner el archivo en la carpeta exterior, con webpack habría que incluirla en la carpeta public
  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then(res => handleErrors(res))
      .then(data => dispatch({
        type: "SET_DATA",
        payload: data
      }))
      .catch(error => console.log(error))
  }, [])


  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
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