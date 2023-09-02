import {useState, useEffect} from 'react'
import MainHero from '../../components/HeroSections/MainHero'
import PricingSec from '../../components/WebSections/PricingSec'
import AbtHmSect from '../../components/WebSections/AbtHmSect'
import FaqSection from '../../components/WebSections/FaqSection'
import FooterS from '../../components/WebSections/FooterS'
import ProofSection from '../../components/WebSections/ProofSection'
import UserFxData from '../../components/UsersDashSection/UserFxData'
import SubFooter from '../../components/WebSections/SubFooter'
import UserCyptData from '../../components/UsersDashSection/UserCyptData'
import SpinnerLoad from '../SpinnerLoad'

const HomePage = () => {
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div>
      {loading ? (
        <SpinnerLoad />
      ):(
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
      )}
    </div>
    
  )
}

export default HomePage