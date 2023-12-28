import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const UserGreetings = () => {
  const {currentUser} = useContext(UserContext)
  
  return (
    <div>
        <h3>Welcome, {currentUser?.userData?.fullname}</h3>
    </div>
  )
}

export default UserGreetings