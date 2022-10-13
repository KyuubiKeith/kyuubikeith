// ==================== Imports =====================//

// NextJS
import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'

// ==================== Imports =====================//

//

// ==================== Render =====================//
const Home: NextPage = () => {
  return (
    <>

      <Head>
       <meta name="google-site-verification" content="27j2PYwrO2uQD8BS6_IQ2VUn2L7ymIa3pohFauLplKs" />
      </Head>

      <section>
        <p>Hi!, I&#39;m Keith Kyuubi</p>
      </section>

      <section>
        <p>I&#39;m a:</p>

        <h2>Frontend Web Developer, <br /> Brand Identity Designer <br />& UIX Designer.</h2>
      </section>

      <section>
        <p>Welcome to my portfolio website</p>

        <Image
          src="/Images/Aesthetics/EnsoCircle.svg"
          className='Enso'
          alt="Enso Circle"
          width={350}
          height={350}
        />
      </section>
    </>
  )
}

export default Home
// ==================== Render =====================//
