// ==================== Imports =====================//

// NextJS
import { TypeProjectsFields } from '@/source/organisms/content/contentful'
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
            Sample Project Header.
          </h1>
        </header>

        <main>
          {children}
        </main>



      </>
  )
}

// ==================== Render =====================//

