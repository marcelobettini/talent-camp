import React, { useState } from "react";
import { Button, Typography, TextField } from "@mui/material";
const Counter = () => {
  const [num, setNum] = useState(0);

  const handleAdd = () => {
    setNum(num + 1);
  };

  const handleStep = () => {
    //todo: incrementar el estado con el valor del input
  };
  return (
    <>
      <h4>Componente Counter</h4>
      <div>
        <TextField id="outlined-basic" label="Step" variant="outlined" />
        <Button variant="outlined" onClick={handleStep}>
          +Step
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          border: "1px solid",
        }}
      >
        <Button variant="outlined" color="secondary" onClick={handleAdd}>
          +1
        </Button>
        <Typography mt={2} variant="h1">
          {num}
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={() => setNum(num - 1)}
        >
          -1
        </Button>
      </div>
    </>
  );
};

export default Counter;
