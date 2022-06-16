import React, { useContext } from 'react'
import PokemonContext from '../PokemonContext';
import { TextField } from "@mui/material";

const PokemonFilter = () => {
    const { setFilter } = useContext(PokemonContext)
    return < TextField
        label="Search..." variant="filled"
        onChange={(e) => setFilter(e.target.value)}
    />
}


export default PokemonFilter

