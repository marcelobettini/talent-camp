import "./App.css";
import Characters from "./components/Characters";
function App() {
  const message = "React Playground";
  return (
    <>
      <h1>{message ? message : "chau mundo"}</h1>
      <h4>componente App</h4>

      <Characters />
    </>
  );
}

export default App;
