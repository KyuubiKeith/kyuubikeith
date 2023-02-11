// ==================== Imports =====================//

// NextJS
import Image from 'next/image'
import Link from 'next/link'
import Project_ from './project'

// Contentful Client
import { Client } from '../../../source/organisms/content/contentful'
import { TypeProjectsFields } from "@/source/organisms/content/contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import { Fragment } from 'react';

// ==================== Imports =====================//

//

// ==================== Query =====================//
// ==================== Query =====================//

//

// ==================== Render =====================//

// export async function generateStaticParams({params}) {


//   const { items } = await Client.getEntries({
//     content_type: 'projects'
//   })
//   console.log(projectId)

// }

export default async function Project({params}: any) {
    
  const projectId = params['projectId']
  const { items } = await Client.getEntries({
    content_type: 'projects'
  })
  // console.log(items)
  // console.log(props)
  // console.log(params['projectId'])

  const {
    // projectId,
    name,
    slug,
    logo,
    client,
    work,
    featured,
    featuredImageLink,
    caseStudy
  } = items[projectId].fields as TypeProjectsFields

  console.log(projectId)

  return (
    <Project_
      key={projectId}
      projectId={projectId}
      client={client}
      slug={slug}
      name={name}
      work={work}
      logo={logo}
      featured={featured}
      caseStudy={caseStudy}
      featuredImageLink={featuredImageLink}
    />
  )
}

// ==================== Render =====================//

