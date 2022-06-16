import './App.css'
import { Link, Outlet } from "react-router-dom"

function App() {


  return (
    <main className='App'>
      <h1>React Router v6</h1>
      <p>Este es nuestro truchimenú</p>
      <hr />
      <nav style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}>
        <Link to="/invoices">Invoices</Link> | {" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet></Outlet>
    </main>
  )
}

export default App
