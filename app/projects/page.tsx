// ==================== Imports =====================//

'use client'

//React
import { use } from "react"

// NextJS
import Link from 'next/link'
import Image from 'next/image'

// Fullpage JS
import ReactFullpage from '@fullpage/react-fullpage'

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

  const opts = {
    licenseKey: 'gplv3-license'
  }

  return (

    // @ts-ignore
    <ReactFullpage
      {...opts}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Projectslist />
          </ReactFullpage.Wrapper>
        )
      }}
    />

  )
}


// ==================== Render =====================//

