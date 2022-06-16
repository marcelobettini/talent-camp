import React from 'react'
import { setFilter } from '../redux/pokemonSlice';
import { useDispatch } from 'react-redux';

import { TextField } from "@mui/material";

const PokemonFilter = () => {
    const dispatch = useDispatch()
    return < TextField
        label="Search..." variant="filled"
        onChange={(e) => dispatch(setFilter(e.target.value))}
    />
}


export default PokemonFilter

