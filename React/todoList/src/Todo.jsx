import { Button } from "react-bootstrap";
import React from "react";

const Todo = ({ todo }) => {
  return (
    <tr className="text-center">
      <td className="col-7 col-md-8">{todo.description}</td>
      <td className="col-1">{todo.completed ? "finalizada" : "pendiente"}</td>
      <td className="col-4 col-md-3">
        <Button variant="warning" size="sm" className="me-1">
          marcar{" "}
        </Button>
        <Button variant="success" size="sm" className="ms-1">
          editar
        </Button>
      </td>
    </tr>
  );
};

export default Todo;
