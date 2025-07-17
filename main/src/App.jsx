import './App.css'
import Navbar from './Components/Portfolio/Navbar'
import HeroSection from './Components/Portfolio/Hero'
import About from './Components/Portfolio/About'
import Skills from './Components/Portfolio/Skills'
import ServicesSection from './Components/Portfolio/ServicesSection'
import PortfolioSection from './Components/Portfolio/PortfolioSection'
import ContactSection from './Components/Portfolio/ContactSection'

function App() {
    return (  
        <>
            <Navbar/>
            <HeroSection/>
            <About/>
            <Skills/>
            <ServicesSection/>
            {/* <PortfolioSection/> */}
            <ContactSection/>
        </>
    )
}

export default App
