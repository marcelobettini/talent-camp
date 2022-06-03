//TODO
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const Character = ({ character }) => {
  return (
    <Card key={character.id} sx={{ width: 250 }}>
      <CardMedia
        component="img"
        height="194"
        image={character.image}
        alt={character.name}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography>{character.name}</Typography>
        <Typography>{character.status}</Typography>
        <Typography>{character.gender}</Typography>
        <Typography>{character.species}</Typography>
      </CardContent>
      <CardActions>
        <Button>+Info</Button>
      </CardActions>
    </Card>
  );
};

export default Character;
