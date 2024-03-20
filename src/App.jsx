import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      {/*Quando você está trabalhando com rotas aninhadas, ou seja, rotas que estão dentro de outras rotas, você pode usar o "Outlet" para indicar onde os componentes das rotas filhas devem ser renderizados. */}
      <Outlet />
    </div>
  );
}

export default App;
