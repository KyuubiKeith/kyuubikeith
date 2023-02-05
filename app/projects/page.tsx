// ==================== Imports =====================//

// NextJS
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// Contentful Client
import { Client } from '../../source/organisms/content/contentful'
import { TypeProjectsFields } from '../../source/organisms/content/contentful'

// ==================== Imports =====================//

//

// ==================== Render =====================//

export default async function Projects() {
  const data = await Client.getEntries({
    content_type: 'projects'
  })

  const projectsData: TypeProjectsFields = data.items.map(
    (project) => project.fields
  )
  // console.log(projectsData)

  return (
    <>
      {projectsData
        .sort((a: { projectId: number }, b: { projectId: number }) => {
          return a.projectId - b.projectId
        })
        .map((project: TypeProjectsFields) => (
          <div
            key={project.projectId}
            className="section"
            data-anchor={project.slug}
          >
            <header>
              <p>Project</p>
              <p>{project.projectId}</p>
            </header>

            <main>
              <p>{project.work}</p>
              <p>{project.client}</p>
              <Link
                // href={`/projects/${project.slug}`}
                href={{
                  pathname: `/projects/${project.slug}`,
                  query: {
                    nextProject: project.projectId! + 1
                  }
                }}
                as={`/projects/${project.slug}`}
              >
                <h3> Explore {project.name}</h3>
              </Link>
            </main>
          </div>
        ))}

      <footer>
        <Link href={'/'}>Back Home</Link>
      </footer>
    </>
  )
}

// ==================== Render =====================//
