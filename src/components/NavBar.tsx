import { Link } from "react-router-dom"

function NavBar({ title }: { title?: string }) {
  return (
    <nav>
      <h1>CINE BIRIBINHA{title && ` - ${title}`}</h1>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/criar">Criar</Link></li>
        <li><Link to="/alterar">Alterar</Link></li>
        <li><Link to="/apagar">Apagar</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar