import {useState, useEffect} from 'react'
import ContactHeroSec from '../../components/HeroSections/ContactHeroSec'
import FooterS from '../../components/WebSections/FooterS'
import ContactForm from '../../components/FormsSections/ContactForm'
import Condetails from '../../components/WebSections/Condetails'
import SpinnerLoad from '../SpinnerLoad'

const ContactPg = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div>
    {loading ? (<SpinnerLoad/>): (
      <div>
      <ContactHeroSec />
      <Condetails />
      <ContactForm />
      <FooterS />
    </div>
    )}
    </div>
    
  )
}

export default ContactPg