import { v4 as uid } from "uuid"
import { useState, useRef } from "react";
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

  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState(null)
  const todoRef = useRef()
  const btnRef = useRef()

  const handleAddTodo = (e) => {
    e.preventDefault();
    const description = todoRef.current.value
    if (description === "") return;
    if (!editMode) {
      const newTodo = {
        id: uid(),
        description,
        completed: false
      }
      setTodos((prevState) => {
        return [...prevState, newTodo]
      })
    } else {
      const arrEdit = todos.map((item) => item.id === id ? { ...item, description: todoRef.current.value } : item)
      setTodos(arrEdit)
      setEditMode(prevState => prevState = false)
      btnRef.current.innerText = "Agregar tarea"
    }
    todoRef.current.value = null;

  }

  const deleteCompleted = () => {
    setTodos(todos.filter(item => !item.completed))
  }

  return (
    <Container>
      <Form className="my-5" onSubmit={(e) => e.preventDefault()}>
        <Row className="align-items-center text-capitalize">
          <Form.Group className="col-12 col-lg-8 ">
            <FloatingLabel controlId="floatingInput" label="nueva tarea">
              <Form.Control
                type="text"
                autoFocus
                placeholder="Ingrese descripción..."
                ref={todoRef}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="col-12 col-lg-4 my-2 text-center">
            <Button variant="success" size="sm" className="mx-2" onClick={handleAddTodo} ref={btnRef}>
              Agregar tarea
            </Button>
            <Button size="sm" variant="danger" onClick={deleteCompleted}>
              Eliminar finalizadas
            </Button>
          </Form.Group>
        </Row>
      </Form>
      {/* mostrar componente TodoList ... necesita la props todos */}
      <TodoList todos={todos} setTodos={setTodos} todoRef={todoRef} setId={setId} setEditMode={setEditMode} btnRef={btnRef} />
    </Container>
  );
}

export default App;
