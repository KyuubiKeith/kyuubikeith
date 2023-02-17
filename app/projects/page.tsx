// ==================== Imports =====================//

'use client'

//React
import { use } from "react"

// NextJS
import Link from 'next/link'
import Image from 'next/image'

// Contentful Client
import { Client } from '@/source/organisms/content/contentful'
import { TypeProjectsFields } from '@/source/organisms/content/contentful'

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
    licenseKey: 'gplv3-license',
    scrollOverflow: false,
    responsiveWidth: 600,
    responsiveHeight: 300,
  }

  return (

    <ReactFullpage
      {...opts}
      responsiveHeight={900}
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

