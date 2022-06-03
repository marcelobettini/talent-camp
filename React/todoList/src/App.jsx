import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Row, FloatingLabel } from "react-bootstrap";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "call mom ASAP",
      completed: false,
    },
  ]);

  return (
    <Container>
      <Form className="my-5">
        <Row className="align-items-center text-capitalize">
          <Form.Group className="col-12 col-lg-8 ">
            <FloatingLabel controlId="floatingInput" label="nueva tarea">
              <Form.Control
                type="text"
                autoFocus
                placeholder="Ingrese descripción..."
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="col-12 col-lg-4 my-2 text-center">
            <Button variant="success" size="sm" className="mx-2">
              Agregar tarea
            </Button>
            <Button size="sm" variant="danger">
              Eliminar finalizadas
            </Button>
          </Form.Group>
        </Row>
      </Form>
      {/* mostrar componente TodoList ... necesita la props todos */}
      <TodoList todos={todos} />
    </Container>
  );
}

export default App;
