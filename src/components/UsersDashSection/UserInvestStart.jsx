import React from 'react'
import IvImg from '../../assests/invest.png'

const UserInvestStart = () => {
  return (
    <div className='bg-dark'>
        <div className='container'>
            <img src={IvImg} alt="img" />
            <p>No active event was found in your account, Kindly click the button to get started</p>
            <button className='btn btn-success'>Get Started</button>
        </div>
    </div>
  )
}

export default UserInvestStart