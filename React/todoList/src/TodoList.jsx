import { Table } from "react-bootstrap";
import Todo from "./Todo";
const TodoList = ({ todos, setTodos, setId, setEditMode, todoRef, btnRef }) => {
  return (
    <Table striped bordered className="my-5">
      <thead>
        <tr>
          <th>Tarea</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} setTodos={setTodos} todos={todos} setId={setId} setEditMode={setEditMode} todoRef={todoRef} btnRef={btnRef} /> //prop drilling con setTodos
        ))}
      </tbody>
    </Table>
  );
};

export default TodoList;
