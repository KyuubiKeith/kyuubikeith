// ==================== Imports =====================//

// NextJS
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// Contentful Client
import { Client } from '../../../source/organisms/content/contentful'
import { TypeProjectsFields } from '../../../source/organisms/content/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import { EntryCollection } from 'contentful'

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

export default async function Project({ params }: TypeProjectsFields) {

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


  const project: TypeProjectsFields = items[0] as TypeProjectsFields
  // console.log(project.fields)


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
    } = project.fields as TypeProjectsFields

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
                alt={`${name}`}
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
                {/* <NextProject /> */}
              </li>

              <li>
                <Link href={'../contact'}>
                  <p>Start A Project With Me</p>
                </Link>
              </li>

              <li>
                <Link href={'/projects#' + slug}>
                  <p>Back</p>
                </Link>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  )
}

// ==================== Render =====================//
