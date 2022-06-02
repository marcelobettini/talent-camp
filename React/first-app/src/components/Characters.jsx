import { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);
  return (
    <>
      <h1>Characters component</h1>
      <p>let's try UseEffect React's Hook</p>
      <div className="container">
        {characters.map((ch) => (
          <Card key={ch.id}>
            <CardMedia
              component="img"
              height="194"
              image={ch.image}
              alt={ch.name}
            />
            <CardContent>
              <Typography>{ch.name}</Typography>
              <Typography>{ch.status}</Typography>
              <Typography>{ch.gender}</Typography>
              <Typography>{ch.species}</Typography>
            </CardContent>
            <CardActions>
              <Button>+Info</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Characters;
