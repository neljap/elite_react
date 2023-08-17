import React from 'react'
import Navbar from '../Layout/Navbar'
import '../../App.css'

const AbtHeroSection = () => {
  return (
    <div className='abtHero-container'>
        <Navbar />
        <div className='container' style={{paddingTop: '50px'}}>
          <h1 className='text-white all-headers'>About Section</h1>
        </div>
    </div>
  )
}

export default AbtHeroSection