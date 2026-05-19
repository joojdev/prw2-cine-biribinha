import type { ReactNode } from 'react'
import NavBar from '@components/NavBar'

function PageLayout({ children, title }: { children?: ReactNode; title?: string }) {
  return (
    <div className="page-root">
      <header>
        <NavBar title={title} />
      </header>
      <section>
        {title && (
          <div className="page-heading">
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
