// ==================== Imports =====================//

// NextJS
import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// Contentful Client
import {
  Client,
  TypeProjectsFields
} from '../../source/organisms/content/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { EntryCollection } from 'contentful'

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
    props: { project: items[0] },
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

const Project: NextPage<TypeProjectsFields> = ({ project }) => {
  const { name, logo, client, work, featured, featuredImageLink, caseStudy } =
    project.fields
  return (
    <>
      <div>
        <h1>{name}</h1>

        {logo ? (
          <Image
            src={'https:' + logo.fields.file.url}
            height={logo.fields.file.details.image.height}
            width={logo.fields.file.details.image.width}
            alt={name}
          />
        ) : (
          <p>Logo Missing</p>
        )}

        <h1>{client}</h1>
        <h3>{work}</h3>

        {featured ? (
          <Image
            src={'https:' + featured.fields.file.url}
            height={featured.fields.file.details.image.height / 5}
            width={featured.fields.file.details.image.width / 5}
            alt={featured}
          />
        ) : (
          <p>
            <b>No featured Image.</b>
          </p>
        )}

        {documentToReactComponents(caseStudy)}
        <a>{client}</a>
        <br />
        <br />
        <Link href="./">
          <a>Back</a>
        </Link>
      </div>
    </>
  )
}

export default Project
// ==================== Render =====================//
