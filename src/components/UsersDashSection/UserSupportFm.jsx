import React, { useState } from 'react'
import '../../App.css'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { db } from '../../server'
import { useContext } from 'react'
import {toast} from 'react-toastify'
import { UserContext } from '../../context/UserContext'

const UserSupportFm = () => {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [select, setSelect] = useState('')
  const [loading, setLoading] = useState(false)

  const options = ['Select Categories', 'My Wallet', 'Verification', 'Change Phone Number', 'Profile', 'Referral', 'Withdrawal', 'Payment complaint', 'Investment', 'Contract', 'Others' ]

  const {currentUser} = useContext(UserContext)

  // const UserId = currentUser?.userData?.userUid
   
  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      setLoading(true)
      const sendAt = Timestamp.now()
      const UserId = currentUser?.userData?.userUid
      const data = await addDoc(collection(db, 'support'), {subject, message, select, UserId, sendAt})
      setMessage('')
      setSubject('')
      setSelect('')
      setLoading(false)
      toast.success('Message Received, We will get back to you Shortly', {
        position: 'bottom-left'
      })
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div>
        <h2>SUPPORT</h2>
        <form className='main-contactFm-con bg-dark w-lg-50 w-100 d-flex flex-column p-3 gap-3 text-white rounded' onSubmit={handleSubmit}>
            <h4>Support Ticket</h4>
            <div>
                <label>Subject</label>
                <input type='text' required placeholder='Enter Subject' className='w-100 p-2 rounded ' onChange={(e) => setSubject(e.target.value)}/>
            </div>
            <select className='w-100 p-2 rounded' required value={select} onChange={(e) => setSelect(e.target.value)}>

              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required className='w-100 p-2 rounded' style={{height: '250px'}}></textarea>
            <div className='float-right'>
              <button className='btn btn-success'>{loading ? (<>Summitting...</>):(<>Summit</>)}</button>
            </div>
        </form>
    </div>
  )
}

export default UserSupportFm