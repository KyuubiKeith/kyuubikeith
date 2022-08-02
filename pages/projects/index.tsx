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
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
}

const Projects: NextPage<TypeProjectsFields> = ({ fields }) => {

  return (
    <ReactFullpage
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
                >
                  <header>
                    <p>Project</p>
                    <p>{project.projectId}</p>
                  </header>

                  <main>
                    <p>{project.work}</p>
                    <p>{project.client}</p>
                    <Link
                      href={{
                        pathname: `/projects/[project]`,
                        query: {
                          index: project.projectId,
                          slug: project.slug
                        }
                      }}
                      as={`/projects/${project.slug}`}
                    >
                      <a>
                        <h3> Explore {project.name}</h3>
                      </a>
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