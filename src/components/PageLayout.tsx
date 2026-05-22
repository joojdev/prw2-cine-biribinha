import type { ReactNode } from 'react'
import NavBar from '@components/NavBar'
import { useNavigate } from 'react-router-dom'

function PageLayout({
  children,
  title,
  showReturn,
}: {
  children?: ReactNode
  title?: string
  showReturn?: boolean
}) {
  const navigate = useNavigate()

  function handleReturn() {
    navigate('/')
  }

  return (
    <div className="page-root">
      <header>
        <NavBar title={title} />
      </header>
      <section>
        {title && (
          <div className="page-heading">
            {showReturn && (
              <button className="btn btn-secondary" onClick={handleReturn}>
                Cancelar
              </button>
            )}
            <h2>{title}</h2>
          </div>
        )}
        {children}
      </section>
      <footer>&copy; Cine Biribinha 2026</footer>
    </div>
  )
}

export default PageLayout
