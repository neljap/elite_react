import {AiOutlineArrowRight} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineDown} from "react-icons/ai"
import {FaUserXmark} from "react-icons/fa6"
import {IoCheckmarkDoneCircle} from "react-icons/io5"
import { signOut } from 'firebase/auth'
import { auth } from '../../server'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import Logo from "../../assests/sclogo.png"
import { useState } from 'react'
import "../../App.css"
import { Link } from 'react-router-dom'
import {BsBoxArrowInRight} from "react-icons/bs"
import { Button, Modal } from 'react-bootstrap'

// import { signOutHandler } from '../../server_side/userAuth'


const UserTopNot = () => {
    const {setUserDataInfo, setCurrentUser, currentUser} = useContext(UserContext)

    const userVerify = currentUser?.userData?.verified
  const profilePicsInfo = currentUser?.userData?.profilePics;
  const fullNameInfo = currentUser?.userData?.fullname;
  const userEmailInfo = currentUser?.userData?.userEmail;



    const [isOpen, setIsOpen] = useState(null)
    const [show, setShow] = useState(false)
  const [profilePics, setProfilePics] = useState(profilePicsInfo);


    const signOutFunc = async() => {
        try{
            await signOut(auth)
            setIsOpen(!isOpen)
            setShow(false)
            setUserDataInfo({})
            setCurrentUser(null)
            localStorage.removeItem('user')
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center p-2 rounded bg-success opacity-500'>
        <div>
            {/* <img src={Logo} alt="" style={{width: "150px", height: "50px",}} /> */}
        </div>
        <div className='d-flex gap-2'>
            {/* <div style={{borderRadius: '50%'}} className='shadow rounded d-flex justify-content-center align-items-center'>
                <BiUserCircle />
            </div>
            <div style={{borderRadius: '50%'}} className='shadow rounded  d-flex justify-content-center align-items-center'>
                <BiUserCircle />
            </div> */}
            <div className='d-flex'>
                {/* <div>
                   <button className='btn btn-danger' onClick={signOutFunc}>Log Out<AiOutlineArrowRight /></button> 
                </div> */}
                
                <div className='bg-success rounded' style={{cursor: "pointer"}} onClick={() => setIsOpen(!isOpen)}>
                    <div className='d-flex gap-2 p-1 justify-content-center align-item-center'>
                        <div>
              {profilePics === "" ? (
                <BiUserCircle size={40} />
              ) : (
                <div>
                  <img
                    src={profilePics}
                    alt="image"
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              )}
            </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <span>{fullNameInfo}</span>
                            {userVerify ? (
                                 <span>Verified <IoCheckmarkDoneCircle color='yellow'size={20}/></span>
                            ): (
                                <span>not verified <FaUserXmark color='yellow'size={20}/></span>
                            )}
                           
                        </div>
                        <div>
                            <AiOutlineDown size={25} style={{marginTop: "15px"}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    {isOpen ? (
<div className='dropdown-container'>
        <Link to="/user/kyc-verify" onClick={() => setIsOpen(!isOpen)}>Kyc Verification</Link>
        <Link to="/user/settings" onClick={() => setIsOpen(!isOpen)}>Settings</Link>
        <Link to="/user/support" onClick={() => setIsOpen(!isOpen)}>Help</Link>
        <div className='d-flex gap-2'>
            <Link onClick={() => setShow(true)}>Log Out</Link>
            <BsBoxArrowInRight color='black' size={30} />
        </div>
        
    </div>
    ):(null)}
    <Modal size='sm' show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        <Modal.Title>Hi {fullNameInfo} </Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to Log Out?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={signOutFunc}>
            Yes
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    
       </div> 
    
  )
}

export default UserTopNot