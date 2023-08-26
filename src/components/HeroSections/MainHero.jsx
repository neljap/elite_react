import Navbar from '../Layout/Navbar'
import '../../App.css'
import HeroImg from '../../assests/dow.png'

const MainHero = () => {
  return (
    <div className='mainhero-container w-100'>
        {/* <video src="https://res.cloudinary.com/dr6a80sph/video/upload/v1692919990/pexels-tima-miroshnichenko-7579953_2160p_hvfvbg.mp4" autoPlay muted /> */}
        <div>
           <Navbar />
        <div className='container d-flex justify-content-between align-items-center flex-wrap pt-10'>
            <div className='col-md-5'>
                <h1 className='text-white font-bold all-headers'>Invest Your <br /> Money With Higher Return</h1>
                <p className='text-white'>Anyone can invest money to different currency to increase their earnings by the help of Bitrader through online.</p>
                <button className='btn btn-success'>
                    Get Started
                </button>
            </div>
            <div className='col-md-5'>
                <img src={HeroImg} alt="image" className='heroimg-item' />
            </div>
        </div> 
        </div>
        
    </div>
  )
}

export default MainHero;