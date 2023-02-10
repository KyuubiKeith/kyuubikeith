import Link from 'next/link'
import Image from 'next/image'
import { TypeProjectsFields } from '@/source/organisms/content/contentful'

export default function Project({
  projectId,
  slug,
  work,
  name,
  client
}: TypeProjectsFields) {
  return (
    <div
      key={projectId}
      className="section"
      data-anchor={slug}
    >
      <header>
        <p>{projectId}</p>
      </header>

      <main>
        <p>{work}</p>
        <p>{client}</p>
        <Link
          // href={`/projects/${projectId}`}
          href={{
            pathname: `/projects/${projectId}`,
            query: {
              index: projectId,
              name: name,
              nextProject: projectId! + 1
            }
          }}
          as={`/projects/${slug}`}
        >
          <h3> Explore {name}</h3>
        </Link>
      </main>
    </div>
  )
}

