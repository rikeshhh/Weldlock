import './App.css'
import About from './Components/About'
import Customers from './Components/Customers'
import Explore from './Components/Explore'
import Feature from './Components/Feature'
import Feedback from './Components/Feedback'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Latest from './Components/Latest'
import Solutions from './Components/Solutions'
import Header from './Header'
function App() {

  return (
    <>
    <Header />
 <main>
  <Hero/>
  <About/>
  <Solutions/>
  <Customers/>
  <Feedback/>
  <Feature/>
  <Explore/>
  <Latest/>
 </main>
  <Footer/>
    </>
  )
}

export default App
