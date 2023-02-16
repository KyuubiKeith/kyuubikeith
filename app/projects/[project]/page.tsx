// ==================== Imports =====================//

// NextJS
import Link from 'next/link'
import Image from 'next/image'

import { Client } from '../../../source/organisms/content/contentful'
import { TypeProjectsFields } from "@/source/organisms/content/contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'

// ==================== Imports =====================//

//

// ==================== Query =====================//

// export async function generateStaticParams(props) {
// console.log(props)
//   const { items } = await Client.getEntries({
//     content_type: 'projects',
//     'fields.slug': props!.project
//   })
  
//   return [{
//     slug: 'overriden',
//   }]
// }

export async function generateStaticParams() {

  const { items } = await Client.getEntries({
    content_type: 'projects'
  })

  const projectData: TypeProjectsFields = items.map(
    (project) => project.fields
  )

  return [{
    project: projectData.map((project: TypeProjectsFields) => (project.projectId)),
  }]
}


// ==================== Query =====================//

//

// ==================== Render =====================//

export default async function Project({ params }: TypeProjectsFields) {

  const { items } = await Client.getEntries({
    content_type: 'projects',
    'fields.projectId': params!.project
  })

  const projectData: TypeProjectsFields = items.map(
    (project) => project.fields
  )

  // console.log(projectData)

  return (
    <>
      {projectData
        .map((project: TypeProjectsFields) => (
          <div
            key={project.projectId}
            className="section"
            data-anchor={project.slug}
          >
            <>
              <header id="featured-image">
                <p>Project ID: {project.projectId}</p>
                {project.featured ? (
                  <Image
                    src={'https:' + project.featured?.fields.file.url}
                    height={project.featured?.fields.file.details.image?.height}
                    width={project.featured?.fields.file.details.image?.width}
                    alt={`${project.featured?.fields.title}`}
                  />
                ) : (
                  <p>
                    <b>No featured Image.</b>
                  </p>
                )}
              </header>

              <main>
                <section id="brand-identity">
                  {project.logo ? (
                    <Image
                      src={'https:' + project.logo?.fields.file.url}
                      height={project.logo?.fields.file.details.image?.height}
                      width={project.logo?.fields.file.details.image?.width}
                      alt={`${project.name}`}
                    />
                  ) : (
                    <p>Logo Missing</p>
                  )}

                  <div id="project-details">
                    <>
                      <h6>Client</h6>
                      <p>{project.client}</p>
                    </>
                    <>
                      <h6>Project</h6>
                      <p>{project.work}</p>
                    </>
                  </div>

                  <div id="case-study">
                    <h6>Case Study</h6>
                    {documentToReactComponents(project.caseStudy as Document)}

                    <div id="project-gallery">
                      {project.featured ? (
                        <Image
                          src={'https:' + project.featured.fields.file.url}
                          height={project.featured.fields.file.details.image?.height}
                          width={project.featured.fields.file.details.image?.width}
                          alt={project.featured.fields.title}
                        />
                      ) : (
                        <p>
                          <b>No featured Image.</b>
                        </p>
                      )}
                    </div>
                  </div>
                </section>
              </main>

              <footer>

                <ol>

                  <li>
                    <Link
                      // href={`/projects/${projectId}`}
                      href={{
                        pathname: `/projects/${project.projectId! + 1}`,
                      }}
                      as={`/projects/${project.projectId! + 1}`}
                    >Next Project</Link>

                  </li>

                  <li>
                    <Link
                      // href={`/projects/${projectId}`}
                      href={{
                        pathname: `/projects/${project.projectId! + 1}`,
                      }}
                      as={`/projects/${project.projectId! - 1}`}
                    >Previous Project</Link>

                  </li>

                  <li>
                    <Link href={`/projects#${project.slug}`}>Back To Projects</Link>
                  </li>

                  <li>
                    <Link href={'/'}>Back Home</Link>
                  </li>
                </ol>

              </footer>

            </>
          </div>
        ))
      }
    </>

  )
}


// ==================== Render =====================//



