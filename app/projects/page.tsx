// ==================== Imports =====================//

'use client'


// Fullpage JS
// @ts-ignore
import Fullpage, { FullPageSections, FullpageNavigation } from '@ap.cx/react-fullpage'

// List
import Projectslist from "./projectslist"

// ==================== Imports =====================//

//

// ==================== Query =====================//

export const revalidate = 60

// ==================== Query =====================//

//

// ==================== Render =====================//

export default function Projects() {

  return (
    <Fullpage>
      {/* <FullpageNavigation className={'nav-dots' } /> */}
      <FullPageSections>
        <Projectslist />
      </FullPageSections>
    </Fullpage>

  )
}

// ==================== Render =====================//