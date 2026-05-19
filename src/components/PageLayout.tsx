import type { ReactNode } from "react"
import NavBar from "@components/NavBar"

function PageLayout({ children, title }: { children?: ReactNode, title?: string }) {
  return (
    <>
      <header>
        <NavBar title={title} />
      </header>
      <section>
        {children}
      </section>
      <footer>
        &copy; Cine Biribinha 2026
      </footer>
    </>
  )
}

export default PageLayout