import Navbar from '../Layout/Navbar'
import '../../App.css'
import HeroImg from '../../assests/hero.png'

const MainHero = () => {
  return (
    <div className='mainhero-container w-100'>
        <Navbar />
        <div className='container d-flex justify-content-center align-items-center flex-wrap pt-10'>
            <div className='col-md-6'>
                <h1 className='text-white font-bold all-headers'>Invest Your <br /> Money With Higher Return</h1>
                <p className='text-white'>Anyone can invest money to different currency to increase their earnings by the help of Bitrader through online.</p>
                <button className='btn btn-success'>
                    Get Started
                </button>
            </div>
            <div className='col-md-6'>
                <img src={HeroImg} alt="image" className='w-100' />
            </div>
        </div>
    </div>
  )
}

export default MainHero