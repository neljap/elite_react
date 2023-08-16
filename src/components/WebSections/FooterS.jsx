import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import {FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
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
              <h6 className='text-uppercase text-white fw-bold mb-0'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Company name
              </h6>
              <p className='text-white'>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto '>
              <h6 className='text-uppercase text-white fw-bold mb-0'>Products</h6>
              <p className='text-white'>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p className='text-white'>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p className='text-white'>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p className='text-white'>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-0'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Useful links</h6>
              <p className='text-white'>
                <Link to='/' className='text-reset'>
                  Pricing
                </Link>
              </p>
              <p className='text-white'>
                <Link to='/' className='text-reset'>
                  Settings
                </Link>
              </p>
              <p className='text-white'>
                <Link to='/' className='text-reset'>
                  Orders
                </Link>
              </p>
              <p className='text-white'>
                <Link to='/' className='text-reset'>
                  Help
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-0'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Contact</h6>
              <p className='text-white'>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p className='text-white'>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p className='text-white'>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p className='text-white'>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
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