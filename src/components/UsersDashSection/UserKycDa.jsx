import { Link } from 'react-router-dom'
import KycDa from '../../assests/sss.png'

const UserKycDa = () => {
  return (
    <div className='h-100'>
        <img src={KycDa} alt="" />
        <p>With tier verification you stand a chance to increase your daily withdrawal limit.
</p>
<p>We encourage you to upload a clear and standard version of your preferred document</p>
<Link to='/user/kyc-data'>
   <button className='btn btn-success'>Click here for Verification</button> 
</Link>

    </div>
  )
}

export default UserKycDa