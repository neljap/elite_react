import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const UserGreetings = () => {
  const {currentUser} = useContext(UserContext)
  
  return (
    <div>
        <h1 className='display-6'>Welcome, {currentUser?.userData?.fullname}</h1>
    </div>
  )
}

export default UserGreetings