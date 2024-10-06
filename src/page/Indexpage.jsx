import React from 'react'
import NavbarComponents from '../Components/NavbarComponents'
import AboutComponents from '../Components/AboutComponents'
import SkilComponents from '../Components/SkilComponents'
import ServiceComponents from '../Components/ServiceComponents'
import FooterComponents from '../Components/FooterComponents'
const Indexpage = () => {
  return (
    <div>
      <NavbarComponents />
      <AboutComponents />
      <SkilComponents />
      <ServiceComponents/>
      <FooterComponents/>
    </div>
  )
}

export default Indexpage
