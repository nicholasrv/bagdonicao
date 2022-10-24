import "./styles.css";
import logo from "./assets/hello-design-logo-vector.svg"


function OlaMundo() {

const nome = "Nicholas Ruas Viegas";
const titulo = "Projeto teste Mesa Aula 3"

  // forma tradicional de fazer a funcao, posso usar arrow function em react tambem, caso eu queira
  return (
    <>
    <h1>{titulo}</h1>
    <div>
      <img
        alt="Logo Hello"
        src={logo} />
      <p className="titulo">{nome}</p>
    </div>
    </>
  );

}

export default OlaMundo;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
