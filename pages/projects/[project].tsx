// ==================== Imports =====================//

// NextJS
import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

// Contentful Client
import {
  Client,
  TypeProjectsFields
} from '../../source/organisms/content/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import { EntryCollection } from 'contentful'

// Fullpage JS
import ReactFullpage from '@fullpage/react-fullpage'

// ==================== Imports =====================//

//

// ==================== Query =====================//

/** Generate Individual Page at Build Time **/
export const getStaticPaths: GetStaticPaths = async () => {
  const { items }: EntryCollection<TypeProjectsFields> =
    await Client.getEntries({
      content_type: 'projects'
    })

  const paths = items.map((Project) => {
    return {
      params: { project: Project.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

/** Generate Individual Page Data **/
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items } = await Client.getEntries({
    content_type: 'projects',
    'fields.slug': params!.project
  })
  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      project: items[0]
    },
    revalidate: 1
  }
}

// ==================== Query =====================//

//

// ==================== Render =====================//

const renderOption = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      return (
        <Image
          src={`https:${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
        />
      )
    }
  }
}

const NextProject = () => {
  const router = useRouter()
  const nextProject = router.query
  console.log(nextProject)
  return (
    <>
      <p>
        next project id{' '}
        <span style={{ fontWeight: '700', color: 'coral' }}>
          {nextProject.nextProject}
        </span>
      </p>
      <p>next project name</p>
      <p>
        current project name{' '}
        <span style={{ fontWeight: '700', color: 'coral' }}>
          {nextProject.project}
        </span>
      </p>
      <Link
        href={{
          pathname: `/projects/${nextProject.nextProject}`,
          query: {}
        }}
        as={`/projects/${nextProject.nextProject}`}
      >
        <a>
          View Next Project{' '}
          <span style={{ fontWeight: '700', color: 'coral' }}>
            {nextProject.project}
          </span>{' '}
        </a>
      </Link>
    </>
  )
}

const Project: NextPage<TypeProjectsFields> = ({ project }) => {
  const {
    projectId,
    slug,
    name,
    logo,
    client,
    work,
    featured,
    featuredImageLink,
    caseStudy
  } = project.fields

  return (
    <>
      <div>
        <header id="featured-image">
          {featured ? (
            <Image
              src={'https:' + featured.fields.file.url}
              height={featured.fields.file.details.image?.height}
              width={featured.fields.file.details.image?.width}
              alt={featured.fields.title}
            />
          ) : (
            <p>
              <b>No featured Image.</b>
            </p>
          )}
        </header>

        <main>
          <section id="brand-identity">
            {logo ? (
              <Image
                src={'https:' + logo.fields.file.url}
                height={logo.fields.file.details.image?.height}
                width={logo.fields.file.details.image?.width}
                alt={name}
              />
            ) : (
              <p>Logo Missing</p>
            )}

            <div id="project-details">
              <>
                <p>Client</p>
                <p>{client}</p>
              </>
              <>
                <p>Project</p>
                <p>{work}</p>
              </>
            </div>

            <div id="case-study">
              <p>Case Study</p>
              {documentToReactComponents(caseStudy as Document)}

              <div id="project-gallery">
                {featured ? (
                  <Image
                    src={'https:' + featured.fields.file.url}
                    height={featured.fields.file.details.image?.height}
                    width={featured.fields.file.details.image?.width}
                    alt={featured.fields.title}
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
          <nav>
            <ul>
              <li>
                <NextProject />
              </li>

              <li>
                <Link href={'../contact'}>
                  <a>Start A Project With Me</a>
                </Link>
              </li>

              <li>
                <Link href={'./#' + slug}>
                  <a>Back</a>
                </Link>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  )
}

export default Project
// ==================== Render =====================//
