import '../../App.css'
import { Link } from 'react-router-dom'

const UserWdMain = () => {
  return (
    <div className='bg-dark text-light user-depo-top'>
        <h2 className='text-center'>Withdraw from your account</h2>
        <p className='text-center'>Place a withdrawal request using any of the payment method below</p>
        <div className='d-flex justify-content-center align-items-center flex-column  '>
            <div className='userwd-container border border-success rounded p-3'>
                <p className='text-center font-extrabold'>USDT</p>
                <h4>$1,000,000<span>Max</span></h4>
                <div>
                    <p>Minimum amount: $10,000</p>
                    <p>Charge Type: percentage</p>
                    <p>Charges Amount: 3%</p>
                    <p>Duration: Instantly</p>
                </div>
                <Link to='/user/withdraw-funds'>
                <button className='btn btn-success rounded'>Select this method</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UserWdMain