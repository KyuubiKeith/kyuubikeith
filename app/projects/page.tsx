// ==================== Imports =====================//

// NextJS
import Link from 'next/link'
import Image from 'next/image'

// React
import React from 'react'

// ==================== Imports =====================//

//

// ==================== Query =====================//
// ==================== Query =====================//

//

// ==================== Render =====================//

export default function Projects() {

  return (

    <React.StrictMode>
      <ol>
        <li>

          <header>
            <h3>Sample Project Title</h3>
          </header>

          <main>
            <h5>Sample Project Description</h5>
          </main>

          <footer>
            <Link href={'/projects/project-details'}>
              Sample Project Link
            </Link>
          </footer>

        </li>
      </ol>
    </React.StrictMode>

  )
}


// ==================== Render =====================//

