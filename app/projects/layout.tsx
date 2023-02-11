// ==================== Imports =====================//

// NextJS
import Image from 'next/image'
import Link from 'next/link'
import Head from './head'



// ==================== Imports =====================//

//

// ==================== Render =====================//

export default async function ProjectsLayout({
  children
}: {
  children: React.ReactNode
}) {



  return (
    <html>
      <head />
      <body>
        {children}
        <footer>
          <Link href={'/'}>Back Home</Link>
        </footer>
      </body>
    </html>
  )
}



// ==================== Render =====================//


