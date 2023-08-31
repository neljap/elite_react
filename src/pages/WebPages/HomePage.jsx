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
import UserCyptData from '../../components/UsersDashSection/UserCyptData'

const HomePage = () => {
  return (
    <div>
      <MainHero />
      <AbtHmSect />
      <ProofSection />
      <PricingSec />
      <UserFxData />
      <UserCyptData />
      <FaqSection />
      <SubFooter />
      <FooterS />
    </div>
  )
}

export default HomePage