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

export default function Project() {

  return (
    <React.StrictMode>

      <header>
        <h3>Sample Project Title</h3>
      </header>

      <main>
        <h5>Sample Project Description</h5>
      </main>

      <footer>

        <ol>
          <li>
            <Link href={'/projects/#previous'}>
              Previous Project Link
            </Link>
          </li>
          <li>
            <Link href={'/projects/#next'}>
              Next Project Link
            </Link>
          </li>
        </ol>

      </footer>

    </React.StrictMode>
  )
}


// ==================== Render =====================//

