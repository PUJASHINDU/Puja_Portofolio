import React from 'react'
import NavbarComponents from '../Components/NavbarComponents'
import AboutComponents from '../Components/AboutComponents'
import SkilComponents from '../Components/SkilComponents'
import ServiceComponents from '../Components/ServiceComponents'
import FooterComponents from '../Components/FooterComponents'
import Chatbot from '../Components/Chatbot'
import ChatWidget from '../Components/ChatWidget'
import CardProject from '../Components/CardProject'
const Indexpage = () => {
  return (
    <div>
      <NavbarComponents />
      <AboutComponents />
      <SkilComponents />
      <CardProject />
      <ChatWidget/>
      <ServiceComponents/>
      <FooterComponents/>
    </div>
  )
}

export default Indexpage
