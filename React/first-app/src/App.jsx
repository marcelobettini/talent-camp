import "./App.css";
import Tabs from "./components/Tabs";
function App() {
  const message = "React Playground";
  return (
    <>
      <h1>{message ? message : "chau mundo"}</h1>
      <h4>componente App</h4>
      <Tabs />
    </>
  );
}

export default App;
