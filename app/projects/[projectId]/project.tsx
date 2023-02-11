// ==================== Imports =====================//

'use client'

// NextJS
import Image from 'next/image'
import Link from 'next/link'

// Contentful Client
import { TypeProjectsFields } from "@/source/organisms/content/contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import { useRouter } from 'next/navigation';

// ==================== Imports =====================//

//

// ==================== Query =====================//
// ==================== Query =====================//

//

// ==================== Render =====================//

export default function Project_({
  projectId,
  slug,
  name,
  logo,
  client,
  work,
  featured,
  featuredImageLink,
  caseStudy
}: TypeProjectsFields) {

  const router = useRouter();
  const data = router;
  console.log(name);

  return (
    <>
      <header id="featured-image">
        <p>Project ID: {projectId}</p>
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
              <h6>Client</h6>
              <p>{client}</p>
            </>
            <>
              <h6>Project</h6>
              <p>{work}</p>
            </>
          </div>

          <div id="case-study">
            <h6>Case Study</h6>
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
              {/* <Link href={'/projects#' + slug}>
                <p>Back</p>
              </Link> */}

              <button type="button" onClick={() => router.push('/projects#' + slug)}>
                Back To Projects
              </button>
            </li>

            <li>
              <Link href={'/'}>
                <p>Back Home</p>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  )
}

// ==================== Render =====================//

