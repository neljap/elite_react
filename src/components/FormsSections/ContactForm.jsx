import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-dark text-light'>
        <h2 className='text-success font-bold text-center'>Get In Touch</h2>
        <form className='w-75 border border-success p-5 rounded mx-auto py-3'>
            <div className='d-flex flex-column'>
                <label>Your Name</label>
                <input type='text' required placeholder='Full Name' />
            </div>
            <div className='d-flex flex-column'>
                <label>Your Email</label>
                <input type='email' required placeholder='Full Name' />
            </div>
            <div className='d-flex flex-column'>
                <label>Subject</label>
                <input type='text' required placeholder='Full Name' />
            </div>
            <div className='d-flex flex-column'>
                <label>Message</label>
                <textarea required placeholder='Full Name' />
            </div>
        </form>
    </div>
  )
}

export default ContactForm