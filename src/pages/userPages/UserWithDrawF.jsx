import '../../App.css'

const UserWithDrawF = () => {

    const reqOtp = () => {
        
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            
        }catch(err){
            console.log(err)
        }
    }
  return (


    <div className='d-flex justify-content-center align-items-center flex-column py-5'>
        <h3>Complete withdrawal request</h3>
        <div className='userwith-dash border border-success p-3 rounded'>
            <h2>ADA</h2>
            <form onSubmit={handleSubmit}>
                <div className='d-flex flex-column gap-2 mb-3'>
                    <label>Enter Amount to Withdraw($)</label>
                    <input type="number" name="" id="" className='w-100 rounded p-2' />
                </div>
                <div className='d-flex flex-column gap-2 mb-3'>
                    <div className='d-flex gap-3'>
                        <label>Enter OTP</label>
                        <button className='btn btn-success' onClick={reqOtp}>Request OTP</button>
                    </div>
                    <input type="number" name="" id="" className='w-100 rounded p-2' />
                </div>
                <div className='d-flex flex-column gap-2 mb-3'>
                    <label>Enter ADA Address</label>
                    <input type="text" className='w-100 rounded p-2' />
                </div>
                <p>ADA is not a default withdrawal option in your account, please enter the correct wallet address to receive your funds</p>
                <button type='submit' className='btn btn-success rounded'>Complete Request</button>
            </form>
        </div>
    </div>
  )
}

export default UserWithDrawF