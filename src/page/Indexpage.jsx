import React from 'react'
import NavbarComponents from '../Components/NavbarComponents'
import AboutComponents from '../Components/AboutComponents'
import SkilComponents from '../Components/SkilComponents'
import ServiceComponents from '../Components/ServiceComponents'
import FooterComponents from '../Components/FooterComponents'
import ChatWidget from '../Components/ChatWidget'
import CardProject from '../Components/CardProject'
import JourneyTimeline from '../Components/JournyeComponents'
import SertifComponets from '../Components/SertifComponets'

const Indexpage = () => {
  return (
    <div>
      <NavbarComponents />

      {/* Beranda */}
      <div id="home" className="pt-20">
        <h1 className="text-center text-3xl font-bold"></h1>
      </div>

      {/* Tentang */}
      <div id="about, beranda">
        <AboutComponents />
      </div>

       <div id="skills">
        <JourneyTimeline />
      </div>

      <div id="skills">
        <SertifComponets/>
      </div>

      {/* Skill */}
      <div id="skills">
        <SkilComponents />
      </div>


      {/* Project */}
      <div id="projects">
        <CardProject />
      </div>

      <ChatWidget/>

      {/* Layanan */}
      <div id="services">
        <ServiceComponents />
      </div>

      {/* Kontak */}
      <div id="contact">
        <FooterComponents />
      </div>
    </div>
  )
}

export default Indexpage
