import Logo from "../../assests/logosc.png"
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import {FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, FaHome, FaPhone, FaEnvelope} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function FooterS() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted text-white'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span className='text-white'>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <FaFacebook color='white'/>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <FaTwitter color='white' />
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <FaGoogle color='white' />
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <FaInstagram color='white' />
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <FaLinkedin color='white' />
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <FaGithub color='white' />
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start'>
          <MDBRow className='mt-3'>
            <MDBCol md='' lg='4' xl='3' className='mx-auto '>
            <div>
            <Link
        to="/"
        className="d-flex justify-content-center align-items-center text-decoration-none"
      >
        <div style={{ width: "50px", height: "50px" }}>
          <img src={Logo} alt="img" className="w-100" />
        </div>
        <div>
          <span className="text-white font-weight-bold">Spectrum</span>
          <br />
          <span className="text-success font-weight-bold">Capitals</span>
        </div>
      </Link>
            </div>
            
              {/* <h6 className='text-uppercase text-white fw-bold mb-0'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Company name
              </h6> */}
              <p className='text-white'>
              Spectrum Capitals offers a variety of trading accounts to match every trading style across all levels of experience.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto '>
              <h6 className='text-uppercase text-white fw-bold mb-0'>Packages</h6>
              <p className='text-decoration-none text-white'>
                <Link to='/' className='text-decoration-none text-reset'>
                  Basic Pack
                </Link>
              </p>
              <p className=' text-white'>
                <Link to='/'  className='text-decoration-none text-reset'>
                  Silver Pack
                </Link>
              </p>
              <p className='text-decoration-none text-white'>
                <Link to='/' className='text-decoration-none text-reset'>
                  Gold Pack
                </Link>
              </p>
              <p className='text-decoration-none text-white'>
                <Link to='/' className='text-decoration-none text-reset'>
                  Diamond Pack
                </Link>
              </p>
              <p className='text-decoration-none text-white'>
                <Link to='/' className='text-decoration-none text-reset'>
                  Platinum Pack
                </Link>
              </p>
              <p className='text-decoration-none text-white'>
                <Link to='/' className='text-decoration-none text-reset'>
                  Ultimate Pack
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-0'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Useful links</h6>
              <p className='text-white'>
                <Link to='/' className='text-reset text-decoration-none'>
                  Packages
                </Link>
              </p>
              <p className='text-white'>
                <Link to='/' className='text-reset text-decoration-none'>
                  About Us
                </Link>
              </p>
              <p className='text-white'>
                <Link to='/' className='text-reset text-decoration-none'>
                  Orders
                </Link>
              </p>
              <p className='text-white'>
                <Link to='/' className='text-reset text-decoration-none'>
                  Help
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-0'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Contact</h6>
              <div>
                <div className="d-flex justify-content-start align-items-center gap-2">
                  <FaHome color="white" size={40}  style={{marginBottom: "10px"}}/> <p className="text-white">Aberdeen Avenue, California, Santa Rosa, US</p>
                </div>
                <div className="d-flex justify-content-start align-items-center gap-2">
                  <FaEnvelope color="white" size={40}  style={{marginBottom: "10px"}}/><p className="text-white">support@spectrumcapitals.com</p>
                </div>
                <div className="d-flex justify-content-start align-items-center gap-2">
                  <FaPhone color="white" size={20} style={{marginBottom: "10px"}}/>
                  <p className="text-white">+1 916 857 3164</p>
                </div>
                
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center px-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          spectrumcapitals.com
        </a>
      </div>
    </MDBFooter>
  );
}