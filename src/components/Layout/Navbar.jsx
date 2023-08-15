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
      <Link to='/'>
        <img src={Logo} alt="img" />
      </Link>
      <nav ref={NavRef}>
        <Link to='/about' className='text-white text-decoration-none ml-3' onClick={showNavRef}>About</Link>
        <Link to='/packages' onClick={showNavRef}>Packages</Link>
        <Link to='/contact' onClick={showNavRef}>Contact Us</Link>
        <Link></Link>
        <Link></Link>
        <div>
          <Link to='/login'>
            <button className='btn btn-success' onClick={showNavRef}>Login</button>
          </Link>
          <Link to='/register'>
            <button className='btn btn-success' onClick={showNavRef}>Register</button>
          </Link>
          
        </div>
        <FaTimes onClick={showNavRef}/>
      </nav>
      <div>
        <Link to='/login'>
          <button className='btn btn-success' onClick={showNavRef}>Login</button>
        </Link>
        <Link to='/register'>
          <button className='btn btn-success' onClick={showNavRef}>Register</button>
        </Link>
      </div>
      <FaBars onClick={showNavRef}/>
    </div>
  )
}

export default Navbar