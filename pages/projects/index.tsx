// ==================== Imports =====================//

// NextJS
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Link from 'next/link'

// Contentful Client
import { Client } from '../../source/organisms/content/contentful'
import { TypeProjectsFields } from '../../source/organisms/content/contentful'

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
const Projects: NextPage<TypeProjectsFields> = ({ fields }) => {
  return (
    <>
      <h1>Projects List</h1>

      {fields.map((project: any, index: number) => (
        <Link
          key={index}
          href={{
            pathname: `/projects/[project]`,
            query: {
              index,
              slug: project.slug
            }
          }}
          as={`/projects/${project.slug}`}
        >
          <a>
            <h3>{project.name}</h3>
          </a>
        </Link>
      ))}
    </>
  )
}

export default Projects
// ==================== Render =====================//
