// ==================== Imports =====================//

// NextJS
import Link from 'next/link'
import Image from 'next/image'

// ==================== Imports =====================//

//

// ==================== Query =====================//
// ==================== Query =====================//

//

// ==================== Render =====================//

export default function Projects() {

  return (

    <>

      <header>
        <h1>
          List Of Projects.
        </h1>
      </header>

      <main>
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
      </main>

      <footer>
        <Link href={'/'}>Back Home</Link>
      </footer>

    </>

  )
}


// ==================== Render =====================//

