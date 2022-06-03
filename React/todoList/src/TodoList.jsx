import { Table } from "react-bootstrap";
import Todo from "./Todo";
const TodoList = ({ todos }) => {
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
          <Todo todo={todo} />
        ))}
      </tbody>
    </Table>
  );
};

export default TodoList;
