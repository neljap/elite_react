import { Spinner } from 'react-bootstrap'
import Logo from '../assests/logosc.png'
import '../App.css'

const SpinnerLoad = () => {
  return (
    <div className='loader-main'>
        
        <div className='flex justify-content-center align-items-center gap-3'>
          <img src={Logo} alt="logo" style={{height: '50px', width: '50px'}} />
          <Spinner animation='grow' variant='dark'/>
          <Spinner animation='grow' variant='primary'/>
          <Spinner animation='grow' variant='success'/>
          <Spinner animation='grow' variant='warning'/>
          <Spinner animation='grow' variant='light'/>
          <Spinner animation='grow' variant='info'/>
        </div>
      </div>
   
  )
}

export default SpinnerLoad