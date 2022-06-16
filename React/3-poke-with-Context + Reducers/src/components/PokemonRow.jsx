import { useContext } from "react";
import { Button, TableRow, TableCell } from "@mui/material"
import PokemonContext from "../PokemonContext";

const PokemonRow = ({ pokemon }) => {
    const { dispatch } = useContext(PokemonContext)
    return (
        <TableRow>
            <TableCell>{pokemon.name.english}</TableCell>
            <TableCell>{pokemon.type.join(", ")}</TableCell>
            <TableCell align="center">
                <Button variant="outlined" color="secondary" onClick={() => dispatch({
                    type: "SET_SELECTED_POKEMON",
                    payload: pokemon
                })}>info</Button>
            </TableCell>
        </TableRow>
    )
};
export default PokemonRow