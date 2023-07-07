import { Link } from "react-router-dom"
import './style.css'

function BarraNavegacao(){
  return (
    <header>
      <h2>Barra de Navegação</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </header>
  )
}

export default BarraNavegacao