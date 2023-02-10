// ==================== Imports =====================//

// NextJS
import Image from 'next/image'
import Link from 'next/link'

// Contentful Client
import { Client } from '@/source/organisms/content/contentful'
import { TypeProjectsFields } from '@/source/organisms/content/contentful'

import Project from './project'

// ==================== Imports =====================//

//

// ==================== Render =====================//

export default async function Projects() {

  // console.log(project)
  // console.log(params)

  const data = await Client.getEntries({
    content_type: 'projects'
  })

  const project: TypeProjectsFields = data.items.map(
    (project) => project.fields
  )

  return (

    <>
      {project
        .sort((a: { projectId: number }, b: { projectId: number }) => {
          return a.projectId - b.projectId
        })
        .map((project: TypeProjectsFields) => (
          <Project
            key={project.projectId}
            projectId={project.projectId}
            client={project.client}
            slug={project.slug}
            name={project.name}
            work={project.work}
          />
        ))}
    </>

  )
}

// ==================== Render =====================//
