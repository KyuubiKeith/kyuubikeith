// ==================== Imports =====================//

//React
import { use } from "react"

// NextJS
import Link from 'next/link'

// Contentful Client
import { Client } from '@/source/organisms/content/contentful'
import { TypeProjectsFields } from '@/source/organisms/content/contentful'

// Fullpage JS
// @ts-ignore
import { FullpageSection } from '@ap.cx/react-fullpage'

// ==================== Imports =====================//

//

// ==================== Query =====================//

async function getProjects() {

  const data = await Client.getEntries({
    content_type: 'projects'
  })

  const projectData: TypeProjectsFields = data.items.map(
    (project) => project.fields
  )

  return projectData
}

// ==================== Query =====================//

//

// ==================== Render =====================//

export default function Projectslist() {
  const projectData = use(getProjects())

  return (

    <>
      {projectData
        .sort((a: { projectId: number }, b: { projectId: number }) => {
          return a.projectId - b.projectId
        })
        .map((project: TypeProjectsFields) => (
          <FullpageSection
            key={project.projectId}
            data-anchor={project.slug}
            scrollSpeed={1000}
            style={{
              backgroundImage: `url(${'https:' + project.featured?.fields.file.url})`,
              backgroundSize: 'cover',
            }}>
            <header>
              <p>{project.projectId}</p>
            </header>

            <main>
              <p>{project.work}</p>
              <p>{project.client}</p>
              <Link
                // href={`/projects/${projectId}`}
                href={{
                  pathname: `/projects/${project.projectId}`
                }}
                as={`/projects/${project.slug}`}
              >
                <h3> Explore {project.name}</h3>
              </Link>
            </main>
          </FullpageSection>
        ))}

    </>

  )
}

// ==================== Render =====================//