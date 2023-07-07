import { Link } from "react-router-dom"
import './index.css'

const BarraNavegacao = () => {
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/sobre">Sobre</Link>
      </button>
      <button>
        <Link to="/contato">Contato</Link>
      </button>
    </div>
  )
}

export default BarraNavegacao