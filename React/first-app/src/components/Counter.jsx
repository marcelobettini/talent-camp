import React, { useState } from "react";
import { Button, Typography, TextField } from "@mui/material";
const Counter = () => {
  const [num, setNum] = useState(0);
  const [step, setStep] = useState(3);

  const handleAdd = () => {
    setNum((prevState) => prevState + 1);
    //best practice, but it does the same that num + 1
  };

  const handleStep = () => {
    setNum(num + parseInt(step));
  };
  return (
    <>
      <h4>Componente Counter</h4>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            type="number"
            label="Step"
            variant="outlined"
            onChange={(e) => setStep(e.target.value)}
          />
          <Button variant="outlined" onClick={handleStep}>
            +Step
          </Button>
        </div>
        <div>
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
      </div>
    </>
  );
};

export default Counter;
