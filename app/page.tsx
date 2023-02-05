// ==================== Imports =====================//

// Styling
import '../source/blerdCorps.scss'

// NextJS
import Image from 'next/image'
import Link from 'next/link'

// ==================== Imports =====================//

//

// ==================== Render =====================//

function Home() {
  return (
    <>
      <section>
        <p>Hi!, I&#39;m Keith Kyuubi</p>
      </section>

      <section>
        <p>I&#39;m a:</p>

        <h2>
          Frontend Web Developer, <br /> Brand Identity Designer <br />& UIX
          Designer.
        </h2>
      </section>

      <section>
        <p>Welcome to my portfolio website</p>

        <Link href={'/projects'}>projects</Link>

        <Image
          src="/Images/Aesthetics/EnsoCircle.svg"
          className="Enso"
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
