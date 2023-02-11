// ==================== Imports =====================//

// Styling
import '../source/blerdCorps.scss'

// NextJS
import Image from 'next/image'
import Link from 'next/link'

// Contentful Client
import { Client } from '@/source/organisms/content/contentful'
import { TypeProjectsFields } from '@/source/organisms/content/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'

// ==================== Imports =====================//

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


export default async function RootLayout({
  children
}: {
  children: React.ReactNode
  }) {

  // Projects data  
  const data = await Client.getEntries({
    content_type: 'projects'
  })

  const project: TypeProjectsFields = data.items.map(
    (project) => project.fields
  )

  // Project Data
  // const { items } = await Client.getEntries({
  //   content_type: 'projects'
  // })

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
    } = project as TypeProjectsFields
  

  return (
    <html>
      <head title={project.name} />
      <body project={project} key={project.projectId}
        slug={project.slug}
        projectId={project.projectId}
        client={project.client}
        name={project.name}
        work={project.work}>
        {children}
      </body>
    </html>
  )
}

// ==================== Render =====================//

