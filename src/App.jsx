import Hero from './components/Hero/Hero.jsx'
import Navbar from './components/Header/Navbar.jsx'
import Work from './components/Work/Work.jsx'
import Box from './components/Work/Box.jsx'
import Standout from './components/Standout/Standout.jsx'
import Brandimpact from './components/Brandimpact/Brandimpact.jsx'
import Footer from './components/Footer/Footer.jsx'

import { Canvas } from '@react-three/fiber'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>

      <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Box position={[-4.2, 0, 0]} />
      <Box position={[4.2, 0, 0]} />
    </Canvas>

      <Work/>
      <Standout/>
      <Brandimpact/>
      <Footer/>
    </>
  )
}

export default App
