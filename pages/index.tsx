// ==================== Imports =====================//

// NextJS
import type { NextPage } from 'next'
import Image from 'next/image'

// ==================== Imports =====================//

//

// ==================== Render =====================//
const Home: NextPage = () => {
  return (
    <div>
      <section>
        <p>Hi!, I&#39;m Keith Kyuubi</p>
      </section>

      <section>
        <p>I&#39;m a:</p>

        <p>Frontend Web Developer,</p>
        <p>Brand Identity Designer</p>
        <p>& UIX Designer.</p>
      </section>

      <section>
        <p>Welcome to my portfolio website</p>

        <Image
          data-scroll
          data-scro
          src="/Images/Aesthetics/EnsoCircle.svg"
          alt="Enso Circle"
          width={350}
          height={350}
        />
      </section>
    </div>
  )
}

export default Home
// ==================== Render =====================//
