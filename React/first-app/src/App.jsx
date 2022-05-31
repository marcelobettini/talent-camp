import "./App.css";
import Counter from "./components/Counter";

function App() {
  const message = "React Playground";
  return (
    <>
      <h1>{message ? message : "chau mundo"}</h1>
      <h4>componente App</h4>

      <Counter />
    </>
  );
}

export default App;
