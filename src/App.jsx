import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Personas from "./components/PersonasContainer";
//import ListaPersonas from "./components/ListaPersonas";
import ListaPersonas from "./components/ListaPersonasConUseState";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Personas>{(data) => <ListaPersonas data={data} />}</Personas>
    </>
  );
}

export default App;
