// ==================== Imports =====================//

'use client'

//React
import { use } from "react"
import React, { Component } from 'react'

// NextJS
import Link from 'next/link'
import Image from 'next/image'

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
      <FullpageNavigation />
      <FullPageSections>
        <Projectslist />
      </FullPageSections>
    </Fullpage>

  )
}

// ==================== Render =====================//

// export default function Projects() {

//   const anchors = ["firstPage", "secondPage", "thirdPage"]
//   const opts = {
//     licenseKey: 'gplv3-license',
//     scrollOverflow: false,
//     responsiveWidth: 400,
//     responsiveHeight: 900,
//     sectionsColor: ["#7fff00", "#00ffff", "#29ab87"]
//   }

//   return (

//     <ReactFullpage
//       {...opts}
//       onLeave={(origin, destination, direction) => {
//         // console.log("onLeave event", { origin, destination, direction });
//       }}
//       render={({ state, fullpageApi }) => {
//         // console.log("render prop change", state, fullpageApi);
//         return (
//           <ReactFullpage.Wrapper>
//             <Projectslist />
//           </ReactFullpage.Wrapper>
//         )
//       }}
//     />

//   )
// }

// export default class App extends Component {
//   render() {
//     return (
//       <Fullpage>

//         <FullPageSections>

//           <FullpageSection style={{
//             backgroundColor: 'lime',
//             height: '100vh',
//             padding: '1em',
//           }}>1</FullpageSection>
//           <FullpageSection style={{
//             backgroundColor: 'coral',
//             padding: '1em',
//           }}>2</FullpageSection>
//           <FullpageSection style={{
//             backgroundColor: 'firebrick',
//             padding: '1em',
//           }}>3</FullpageSection>

//         </FullPageSections>

//       </Fullpage>
//     )
//   }
// }




