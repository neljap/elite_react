import React, { useState } from 'react'
import '../../App.css'

const UserSupportFm = () => {
  const defaultFormData = {
    subject: '',
    message: ''
  }

  const [formData, setFormData] = useState(defaultFormData)
  

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target

    setFormData({

    })
  }

  return (
    <div>
        <h2>SUPPORT</h2>
        <form className='main-contactFm-con bg-dark w-lg-50 w-100 d-flex flex-column p-3 gap-3 text-white rounded'>
            <h4>Support Ticket</h4>
            <div>
                <label>Subject</label>
                <input type='text' placeholder='Enter Subject' className='w-100 p-2 rounded '/>
            </div>
            <select className='w-100 p-2 rounded'>
                <option>Payment</option>
                <option>My Wallet</option>
                <option>Referrals</option>
                <option>KYC Data</option>
            </select>
            <textarea placeholder='Message' className='w-100 p-2 rounded' style={{height: '250px'}}></textarea>
            <div className='float-right'>
              <button className='btn btn-success'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default UserSupportFm