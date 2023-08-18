import React from 'react'
import ContactHeroSec from '../../components/HeroSections/ContactHeroSec'
import FooterS from '../../components/WebSections/FooterS'
import ContactForm from '../../components/FormsSections/ContactForm'
import Condetails from '../../components/WebSections/Condetails'

const ContactPg = () => {
  return (
    <div>
      <ContactHeroSec />
      <Condetails />
      <ContactForm />
      <FooterS />
    </div>
  )
}

export default ContactPg