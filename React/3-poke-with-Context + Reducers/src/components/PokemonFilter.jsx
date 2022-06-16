import React, { useContext } from 'react'
import PokemonContext from '../PokemonContext';
import { TextField } from "@mui/material";

const PokemonFilter = () => {
    const { dispatch } = useContext(PokemonContext)
    return < TextField
        label="Search..." variant="filled"
        onChange={(e) => dispatch({
            type: "SET_FILTER",
            payload: e.target.value
        })}
    />
}


export default PokemonFilter

