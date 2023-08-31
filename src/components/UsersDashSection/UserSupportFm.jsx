import React, { useState } from 'react'
import '../../App.css'

const UserSupportFm = () => {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [select, setSelect] = useState('')
  const options = ['Select Categories', 'My Wallet', 'Verification', 'Change Phone Number', 'Profile', 'Referral', 'Withdrawal', 'Payment complaint', 'Investment', 'Contract', 'Others' ]
   

  return (
    <div>
        <h2>SUPPORT</h2>
        <form className='main-contactFm-con bg-dark w-lg-50 w-100 d-flex flex-column p-3 gap-3 text-white rounded'>
            <h4>Support Ticket</h4>
            <div>
                <label>Subject</label>
                <input type='text' required placeholder='Enter Subject' className='w-100 p-2 rounded '/>
            </div>
            <select className='w-100 p-2 rounded' required value={select} onChange={(e) => setSelect(e.target.value)}>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
                {/* <option>Payment</option>
                <option>My Wallet</option>
                <option>Referrals</option>
                <option>KYC Data</option> */}
            </select>
            <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required className='w-100 p-2 rounded' style={{height: '250px'}}></textarea>
            <div className='float-right'>
              <button className='btn btn-success'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default UserSupportFm