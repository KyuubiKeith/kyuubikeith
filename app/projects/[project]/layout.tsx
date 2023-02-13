// ==================== Imports =====================//

// NextJS
import Link from 'next/link'

// ==================== Imports =====================//

//

// ==================== Query =====================//
// ==================== Query =====================//

//

// ==================== Render =====================//

export default function ProjectLayout({
  children
}: {
  children: React.ReactNode
}) {



  return (
      <>

        <header>
          <h1>
            Sample Project Content.
          </h1>
        </header>

        <main>
          {children}
        </main>

        <footer>

          <ol>
            <li>
              <Link href={'/projects'}>Back To Projects</Link>
            </li>
            <li>
              <Link href={'/'}>Back Home</Link>
            </li>
          </ol>
          
        </footer>

      </>
  )
}

// ==================== Render =====================//

