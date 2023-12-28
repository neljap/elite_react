import Navbar from "../Layout/Navbar"
import '../../App.css'

const PackHeroSec = () => {
  return (
    <div className='abtHero-container'>
        <Navbar />
        <div className='container' style={{paddingTop: '50px'}}>
          <h1 className='text-white all-headers'>Packages Section</h1>
        </div>
    </div>
  )
}

export default PackHeroSec