import React from 'react'
// import {CDBBox, CDBBtn, CDBIcon, } from 'cdbreact'
import { Link } from 'react-router-dom';
import Logo from '../../assests/sclogo.png'
import '../../App.css'

const FooterSection = () => {
    return (
        <div className='d-flex justify-content-center align-items-start  flex-wrap footer-main-container'>
            <div className='col-md-3'>
                <Link to='/'>
                    <img src={Logo} alt="image" />
                </Link>
            </div>
            <div className='col-md-3'>
                <h3>Quick Link</h3>
                <div>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                </div>
            </div>
            <div className='col-md-3'>
            <div>
                <h3>Contact Us</h3>
                    <Link>support@spectrumcapitals</Link>
                    <Link></Link>
                    <Link></Link>
                </div>
            </div>
            <div className='col-md-3'>
            <div>
                    <h3>Support Us</h3>
                    <button className='btn btn-success'>Make a Gift</button>
                </div>
            </div>
        </div>
    );
}

export default FooterSection