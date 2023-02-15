// ==================== Imports =====================//

//React
import { use } from "react"

// NextJS
import Link from 'next/link'
import Image from 'next/image'

// Contentful Client
import { Client } from '@/source/organisms/content/contentful'
import { TypeProjectsFields } from '@/source/organisms/content/contentful'

// ==================== Imports =====================//

//

// ==================== Query =====================//

export const revalidate = 60

// ==================== Query =====================//

//

// ==================== Render =====================//

async function getProjects() {

  const data = await Client.getEntries({
    content_type: 'projects'
  })

  const projectData: TypeProjectsFields = data.items.map(
    (project) => project.fields
  )

  return projectData
}

export default function Projects() {

  const projectData = use(getProjects())
  // console.log(projectData)

  return (

    // <>

    //   <header>
    //     <h1>
    //       List Of Projects.
    //     </h1>
    //   </header>
    //   {/* {projectData?.map((project) => {
    //     return (

    //       <main key={projectId}>
    //         <ol>
    //           <li>

    //             <header>
    //               <h3>{name}</h3>
    //             </header>

    //             <main>
    //               <h5>Sample Project Description</h5>
    //             </main>

    //             <footer>
    //               <Link href={'/projects/project-details'}>
    //                 Sample Project Link
    //               </Link>
    //             </footer>

    //           </li>
    //         </ol>
    //       </main>
    //     )
    //   })} */}



    //   <footer>
    //     <Link href={'/'}>Back Home</Link>
    //   </footer>

    // </>

    <>
      {projectData
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
              <p>{project.projectId}</p>
            </header>

            <main>
              <p>{project.work}</p>
              <p>{project.client}</p>
              <Link
                // href={`/projects/${projectId}`}
                href={{
                  pathname: `/projects/${project.slug}`,
                  query: {
                    index: project.projectId,
                    name: project.name,
                    nextProject: project.projectId! + 1
                  }
                }}
                as={`/projects/${project.slug}`}
              >
                <h3> Explore {project.name}</h3>
              </Link>
            </main>
          </div>
        ))}
    </>


  )
}


// ==================== Render =====================//

