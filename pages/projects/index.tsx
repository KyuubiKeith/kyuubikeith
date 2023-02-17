// ==================== Imports =====================//

// NextJS
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Link from 'next/link'

// Contentful Client
import { Client } from '../../source/organisms/content/contentful'
import { TypeProjectsFields } from '../../source/organisms/content/contentful'

// Fullpage JS
import ReactFullpage from '@fullpage/react-fullpage'

// ==================== Imports =====================//

//

// ==================== Query =====================//

export const getStaticProps: GetStaticProps = async () => {
  const entries = await Client.getEntries({
    content_type: 'projects'
  })
  const fields = entries.items.map((project) => project.fields)

  return {
    props: {
      fields: fields
    },
    revalidate: 1
  }
}

// ==================== Query =====================//

//

// ==================== Render =====================//

const opts = {
  licenseKey: 'gplv3-license'
}



const Projects: NextPage<TypeProjectsFields> = ({ fields }) => {

  return (
    //@ts-ignore
    <ReactFullpage
    navigation
      {...opts}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {fields
              .sort((a: { projectId: number }, b: { projectId: number }) => {
                return a.projectId - b.projectId
              })
              .map((project: TypeProjectsFields) => (
                <div
                  key={project.projectId}
                  className="section"
                  data-anchor={project.slug}
                  style={{
                    backgroundImage: `url(${'https:' + project.featured?.fields.file.url})`,
                    backgroundSize: 'cover',
                  }}
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
                          nextProject: project.projectId! + 1,
                        }
                      }}
                      as={`/projects/${project.slug}`}
                    >                     
                        <h3> Explore {project.name}</h3>
                    </Link>
                  </main>
                </div>
              ))}
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}

export default Projects
// ==================== Render =====================//