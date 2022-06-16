import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setData } from '../redux/pokemonSlice';
import PokemonRow from "./PokemonRow";
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"

const PokemonTable = () => {
    const { data, filter } = useSelector(state => state.pokemon)
    const dispatch = useDispatch()

    function handleErrors(res) {
        if (!res.ok) throw Error(res.status)
        return res.json();
    }

    //con Vite basta con poner el archivo en la carpeta exterior, con webpack habría que incluirla en la carpeta public
    useEffect(() => {
        fetch("http://localhost:3001/pokemon.json")
            .then(res => handleErrors(res))
            .then(data => dispatch(setData(data)))
            .catch(error => console.log(error))
    }, [])

    return (

        <TableContainer component={Paper} sx={{ display: 'flex', mt: '2em' }}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell >Name</TableCell>
                        <TableCell >Type</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data
                        .filter(({ name: { english } }) =>
                            english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
                        )
                        .slice(0, 8)
                        .map((pokemon) => (
                            <PokemonRow
                                key={pokemon.id}
                                pokemon={pokemon}
                            />
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default PokemonTable