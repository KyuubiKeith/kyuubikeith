// ==================== Imports =====================//

// NextJS
import Link from 'next/link'

// ==================== Imports =====================//

//

// ==================== Query =====================//
// ==================== Query =====================//

//

// ==================== Render =====================//

export default function ProjectsLayout({
  children
}: {
  children: React.ReactNode
}) {



  return (
    <>

      <header>
        <h1>
          List Of Projects.
        </h1>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <Link href={'/'}>Back Home</Link>
      </footer>

    </>
  )
}

// ==================== Render =====================//

