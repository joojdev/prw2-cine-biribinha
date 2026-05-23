import { Link } from 'react-router-dom'
import PageLayout from '@components/PageLayout'

function NotFound() {
  return (
    <PageLayout>
      <div className="not-found-wrapper">
        <div className="not-found-container">
          <div className="not-found-code">404</div>
          <div className="not-found-film-strip" aria-hidden="true">
            {Array.from({ length: 7 }).map((_, i) => (
              <span key={i} className="film-hole" />
            ))}
          </div>
          <h2 className="not-found-title">Sessão não encontrada</h2>
          <p className="not-found-message">
            Esta página saiu de cartaz. Talvez nunca tenha existido, ou foi retirada do ar.
          </p>
          <Link to="/" className="btn btn-primary not-found-btn">
            Voltar ao início
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}

export default NotFound
