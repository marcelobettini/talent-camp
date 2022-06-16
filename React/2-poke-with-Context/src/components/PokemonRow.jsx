import { useContext } from "react";
import { Button, TableRow, TableCell } from "@mui/material"
import PokemonContext from "../PokemonContext";

const PokemonRow = ({ pokemon }) => {
    const { setSelectedPokemon } = useContext(PokemonContext)
    return (
        <TableRow>
            <TableCell>{pokemon.name.english}</TableCell>
            <TableCell>{pokemon.type.join(", ")}</TableCell>
            <TableCell align="center">
                <Button variant="outlined" color="secondary" onClick={() => setSelectedPokemon(pokemon)}>info</Button>
            </TableCell>
        </TableRow>
    )
};
export default PokemonRow