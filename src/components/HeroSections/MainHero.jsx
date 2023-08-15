import Navbar from '../Layout/Navbar'
import '../../App.css'
import HeroImg from '../../assests/hero.png'

const MainHero = () => {
  return (
    <div className='mainhero-container'>
        <Navbar />
        <div className='container'>
            <div>
                <h1>Invest Your Money With Higher Return</h1>
                <p>Anyone can invest money to different currency to increase their earnings by the help of Bitrader through online.</p>
                <button className='btn btn-success'>
                    Get Started
                </button>
            </div>
            <div>
                <img src={HeroImg} alt="image" />
            </div>
        </div>
    </div>
  )
}

export default MainHero