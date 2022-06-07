import './App.css'

function App() {
  const userName = "Juan Doe"
  return (
    < div style={{ backgroundColor: "hotpink", color: "white", padding: '.5em' }}>
      <h1>Componente App</h1>
      <Layout userName={userName}>
        <p>Aprovechamos este párrafo para mostrar la prop especial 'children' </p>
      </Layout>
    </div>
  )
}


function Layout({ children, userName }) {
  return (
    < div style={{ backgroundColor: "blue", color: "white", padding: '.5em' }}>
      <h2>Componente Layout</h2>
      {children}
      < Header userName={userName} ></Header >
    </div>
  )
}
function Header({ userName }) {

  return (

    < div style={{ backgroundColor: "grey", color: "white", padding: '.5em' }}>
      <h2>Componente Header</h2>
      <UserInfo userName={userName}></UserInfo>
    </div>
  )

}
function UserInfo({ userName }) {
  return (
    < div style={{ backgroundColor: "tomato", color: "white", padding: '.5em' }}>
      <h2>Componente UserInfo</h2>
      <p>User Name: {userName}</p>
    </div>
  )

}
export default App
