import {AiOutlineArrowRight} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'

const UserTopNot = () => {
  return (
    <div className='d-flex justify-content-between align-items-center p-3 rounded '>
        <div></div>
        <div className='d-flex gap-2'>
            <div style={{borderRadius: '50%'}} className='shadow rounded d-flex justify-content-center align-items-center'>
                <BiUserCircle />
            </div>
            <div style={{borderRadius: '50%'}} className='shadow rounded  d-flex justify-content-center align-items-center'>
                <BiUserCircle />
            </div>
            <div className='d-flex'>
                <p>Logout</p>
                <AiOutlineArrowRight />
            </div>
        </div>
    </div>
  )
}

export default UserTopNot