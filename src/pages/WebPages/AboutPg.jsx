import React from 'react'
import AbtHeroSection from '../../components/HeroSections/AbtHeroSection'
import FooterS from '../../components/WebSections/FooterS'
import AbtHmSect from '../../components/WebSections/AbtHmSect'
import AbtWhySect from '../../components/WebSections/AbtWhySect'
import AbtTopImg from '../../components/WebSections/AbtTopImg'

const AboutPg = () => {
  return (
    <div>
        <AbtHeroSection />
        <AbtTopImg />
        <AbtHmSect />
        <AbtWhySect />
        <FooterS />
    </div>
  )
}

export default AboutPg