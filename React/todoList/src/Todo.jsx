import { Button } from "react-bootstrap";
import React from "react";

const Todo = ({ todo, todos, setTodos, todoRef, setEditMode, setId, btnRef }) => {
  const toggleCompleted = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed }
      }
      return item;
    }))
  }

  const markForEdit = (id) => {
    setId(prevState => prevState = id)
    setEditMode(prevState => prevState = true)
    btnRef.current.textContent = "Editar tarea"
    todoRef.current.value = todo.description
  }
  return (
    <tr className="text-center">
      <td className="col-7 col-md-8">{todo.description}</td>
      <td className="col-1">{todo.completed ? "finalizada" : "pendiente"}</td>
      <td className="col-4 col-md-3">
        <Button variant="warning" size="sm" className="me-1" onClick={toggleCompleted}>
          marcar{" "}
        </Button>
        <Button variant="success" size="sm" className="ms-1" onClick={() => markForEdit(todo.id)}>
          editar
        </Button>
      </td>
    </tr>
  );
};

export default Todo;
