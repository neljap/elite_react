import {AiOutlineArrowRight} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import { signOutHandler } from '../../server_side/userAuth'


const UserTopNot = () => {

    const signOutFunc = async() => {
        try{
            await signOutHandler()
        }catch(err){
            console.log(err)
        }
    }

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
                <button className='btn btn-danger' onClick={signOutFunc}>Log Out<AiOutlineArrowRight /></button>
                
            </div>
        </div>
    </div>
  )
}

export default UserTopNot