import {FaRegCopyright} from 'react-icons/fa'

const UserFooterCy = () => {
  return (
    <div className='p-2 w-100 rounded' style={{backgroundColor: '#2A3064', marginTop: '20px'}}>
        <p className='text-light d-flex gap-2 align-items-center'>
            2023
            <FaRegCopyright />
            Spectrum Capitals
        </p>
    </div>
  )
}

export default UserFooterCy