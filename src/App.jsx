
import { BrowserRouter }  from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas }
 from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary object-cover">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
            
        </div>
        <About to="/#about" element={<About />}/>
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

      </div>
      <div className="relative z-0">
        <Contact to="/#contact" element={<Contact />}/>
        <StarsCanvas />
      </div>
    </BrowserRouter>
  )
}

export default App
