import React from 'react'
import MainHero from '../../components/HeroSections/MainHero'
import PricingSec from '../../components/WebSections/PricingSec'
import FooterSection from '../../components/WebSections/FooterSection'
import AbtHmSect from '../../components/WebSections/AbtHmSect'
import FaqSection from '../../components/WebSections/FaqSection'
import TestimSect from '../../components/WebSections/TestimSect'
import FooterS from '../../components/WebSections/FooterS'
import ProofSection from '../../components/WebSections/ProofSection'
import CryptoSection from '../../components/WebSections/CryptoSection'
import UserFxData from '../../components/UsersDashSection/UserFxData'
import SubFooter from '../../components/WebSections/SubFooter'

const HomePage = () => {
  return (
    <div>
      <MainHero />
      <AbtHmSect />
      <ProofSection />
      <PricingSec />
      <UserFxData />
      {/* <CryptoSection /> */}
      <FaqSection />
      <SubFooter />
      {/* <TestimSect /> */}
      <FooterS />
      {/* <FooterSection /> */}
    </div>
  )
}

export default HomePage