import Logo from '../../assests/sclogo.png'
import {Link} from 'react-router-dom'
import {
  FaTimes,
  FaBars
} from 'react-icons/fa'
import '../../App.css'
import { useRef } from 'react'


const Navbar = () => {
  const NavRef = useRef()

  const showNavRef = () => {
    NavRef.current.classList.toggle('switch')
  }

  return (
    <div className='container d-flex justify-content-between align-items-center'>
      <Link to='/' style={{width: '200px', height: '50px'}}>
        <img src={Logo} alt="img"  className='w-100'/>
      </Link>
      <nav ref={NavRef} className='nav-mob-div'>
        <Link to='/about' className='text-white text-decoration-none ml-3' onClick={showNavRef}>About</Link>
        <Link to='/packages' className='text-white text-decoration-none ml-3' onClick={showNavRef}>Packages</Link>
        <Link to='/contact' className='text-white text-decoration-none ml-3' onClick={showNavRef}>Contact Us</Link>
        <Link to='/faq' className='text-white text-decoration-none ml-3'>FAQ</Link>
        <div className='nav-btn-mob'>
          <Link to='/login'>
            <button className='btn btn-success' onClick={showNavRef}>Login</button>
          </Link>
          <Link to='/register'>
            <button className='btn btn-success' onClick={showNavRef}>Register</button>
          </Link>
          
        </div>
        <FaTimes color='white' className='nav-icon-mob' size={25} onClick={showNavRef}/>
      </nav>
      <div className='nav-btn-desk'>
        <Link to='/login'>
          <button className='btn btn-success' onClick={showNavRef}>Login</button>
        </Link>
        <Link to='/register'>
          <button className='btn btn-success' onClick={showNavRef}>Register</button>
        </Link>
      </div>
      <FaBars color='white' className='nav-icon-mob' size={25} onClick={showNavRef}/>
    </div>
  )
}

export default Navbar