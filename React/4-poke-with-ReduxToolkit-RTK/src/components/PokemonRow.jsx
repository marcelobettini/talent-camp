import { Button, TableRow, TableCell } from "@mui/material"
import { useDispatch } from "react-redux";
import { setSelectedPokemon } from "../redux/pokemonSlice";

const PokemonRow = ({ pokemon }) => {
    const dispatch = useDispatch()
    return (
        <TableRow>
            <TableCell>{pokemon.name.english}</TableCell>
            <TableCell>{pokemon.type.join(", ")}</TableCell>
            <TableCell align="center">
                <Button variant="outlined" color="secondary" onClick={() => dispatch(setSelectedPokemon(pokemon))}>info</Button>
            </TableCell>
        </TableRow>
    )
};
export default PokemonRow