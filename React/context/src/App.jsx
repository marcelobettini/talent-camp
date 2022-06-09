import './App.css'
import { useState, createContext, useContext } from "react"
const UserContext = createContext()

function App() {
  const [userName, setUserName] = useState("Juan Doe")


  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      < div style={{ backgroundColor: "hotpink", color: "white", padding: '.5em' }}>
        <h1>Componente App</h1>
        <p>Aquí "vive" el estado</p>
        <Layout>
          {/* cualquier contenido que pasamos dentro de las etiquetas de apertura y de cierre de un componente, van a parar a una prop especial que se llama children */}
          <p>Aprovechamos este párrafo para mostrar la prop especial 'children' </p>
          <ul>
            <li>una cosa</li>
            <li>otra cosa</li>
            <li>y la última cosa</li>
          </ul>
        </Layout>
      </div>
    </UserContext.Provider>
  )
}


// aquí recibimos taxativamente children y lo usamos luego en el JSX 
function Layout({ children }) {
  return (
    < div style={{ backgroundColor: "blue", color: "white", padding: '.5em' }}>
      <h2>Componente Layout</h2>
      {children}
      < Header></Header >
    </div>
  )
}
function Header() {
  const { setUserName } = useContext(UserContext)
  return (

    < div style={{ backgroundColor: "grey", color: "white", padding: '.5em' }}>
      <h2>Componente Header</h2>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <UserInfo></UserInfo>
    </div>
  )

}
function UserInfo() {
  const { userName } = useContext(UserContext)
  return (
    < div style={{ backgroundColor: "tomato", color: "white", padding: '.5em' }}>
      <h2>Componente UserInfo</h2>
      <p>User Name: {userName}</p>
    </div>
  )

}
export default App
