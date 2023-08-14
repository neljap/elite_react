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
    <div>
      <img src={Logo} alt="img" />
      <nav>
        <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link>
        <div>
          <button>Login</button>
          <button>Register</button>
        </div>
        <FaTimes />
      </nav>
      <div>
        <button>Login</button>
        <button>Register</button>
      </div>
      <FaBars />
    </div>
  )
}

export default Navbar