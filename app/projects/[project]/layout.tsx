// ==================== Imports =====================//

// NextJS
import Image from 'next/image'
import Link from 'next/link'
import Head from './head'

// Contentful Client
import { Client } from '@/source/organisms/content/contentful'
import { TypeProjectsFields } from '@/source/organisms/content/contentful'




// ==================== Imports =====================//

//

// ==================== Render =====================//

export default async function ProjectsLayout({
  children
}: {
  children: React.ReactNode
  }) {
  
  // console.log(project)
  const data = await Client.getEntries({
    content_type: 'projects'
  })

  const project: TypeProjectsFields = data.items.map(
    (project) => project.fields
  )

  return (
    <html>
      {project
        .sort((a: { projectId: number }, b: { projectId: number }) => {
          return a.projectId - b.projectId
        })
        .map((project: TypeProjectsFields) => (
          <Head
            key={project.projectId}
          />
        ))}
      <body>
        {children}
        <footer>
          <Link href={'/projects'}>Back To Projects</Link>
          <Link href={'/'}>Back Home</Link>
        </footer>
      </body>
    </html>
  )
}

// ==================== Render =====================//
