import React from 'react'
import MainHero from '../../components/HeroSections/MainHero'
import PricingSec from '../../components/WebSections/PricingSec'
import FooterSection from '../../components/WebSections/FooterSection'
import AbtHmSect from '../../components/WebSections/AbtHmSect'
import FaqSection from '../../components/WebSections/FaqSection'
import TestimSect from '../../components/WebSections/TestimSect'

const HomePage = () => {
  return (
    <div>
      <MainHero />
      <AbtHmSect />
      <PricingSec />
      <FaqSection />
      {/* <TestimSect /> */}
      <FooterSection />
    </div>
  )
}

export default HomePage