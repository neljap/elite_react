import React, { useEffect, useState } from 'react'
import AbtHeroSection from '../../components/HeroSections/AbtHeroSection'
import FooterS from '../../components/WebSections/FooterS'
import AbtHmSect from '../../components/WebSections/AbtHmSect'
import AbtWhySect from '../../components/WebSections/AbtWhySect'
import AbtTopImg from '../../components/WebSections/AbtTopImg'
import SubFooter from '../../components/WebSections/SubFooter'
import SpinnerLoad from '../SpinnerLoad'

const AboutPg = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (


    <div>
      {loading ? (<><SpinnerLoad /></>):
      (
        <div>
        <AbtHeroSection />
                <AbtTopImg />
                <AbtHmSect />
                <AbtWhySect />
                <SubFooter />
                <FooterS />
        </div>
      )
      }
        
    </div>
  )
}

export default AboutPg