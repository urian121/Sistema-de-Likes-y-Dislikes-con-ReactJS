import logo from "./assets/imgs/logo.png";
import "./App.css";

import Home from "./components/Home";
//import Home from "./components/HomeSinLocalStorage";

function App() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h2 className="text-center titulo">
            <a href="https://urianviera.com" target="_blank">
              <img
                src={logo}
                className="logo"
                style={{ width: "200px" }}
                alt="logo"
              />
            </a>
            Sistema de Likes y Dislikes con ReactJS <hr />
          </h2>
        </div>{" "}
      </div>

      <Home />
    </>
  );
}

export default App;
