import React from 'react'
import PokemonRow from "./PokemonRow";
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"


const PokemonTable = ({ data, filter, setSelectedPokemon }) => {
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
                                // custom event, esto "camufla" el prop drilling porque, en realidad,
                                // el componente PokemonRow debería recibir directamente setSelectedPokemon y hacer allí la operación
                                onInfo={() => setSelectedPokemon(pokemon)}
                            />
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default PokemonTable