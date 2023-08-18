import React, { useState } from 'react'

const UserSupportFm = () => {
  const defaultFormData = {
    subject: '',
    message: ''
  }

  const [formData, setFormData] = useState(defaultFormData)
  const {subject, message} = formData;

  return (
    <div>
        <h2>SUPPORT</h2>
        <form className='bg-dark w-lg-50 w-100 d-flex flex-column p-3 gap-3 text-white '>
            <h4>Support Ticket</h4>
            <div>
                <label>Subject</label>
                <input type='text' placeholder='Enter Subject' className='w-100'/>
            </div>
            <select className='w-100'>
                <option>Payment</option>
                <option>My Wallet</option>
                <option>Referrals</option>
                <option>KYC Data</option>
            </select>
            <textarea placeholder='Message'></textarea>
            <div className='float-right'>
              <button className='btn btn-success'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default UserSupportFm