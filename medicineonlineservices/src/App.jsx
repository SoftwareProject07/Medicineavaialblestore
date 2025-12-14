import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Login from './Component/Login.jsx'
import Registeration from  './Component/Registeration.jsx'
import  Header from './Component/User/Header.jsx'
import Dashboard from './Component/User/Deshboard.jsx'
import Contact from './Component/Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Routerpage /> */}
      {/* <Login />  */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <div>
      <Login />
    </div>
      <div>
        <Registeration /> 
    </div> 
     <div>
        <Header /> 
    </div> 
      <div>
        <Dashboard  /> 
    </div>
      <div>
        <Contact  /> 
    </div>
    </>
  );
}

export default App
