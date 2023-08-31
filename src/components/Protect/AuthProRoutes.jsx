import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { Navigate } from "react-router-dom"
import { useEffect } from "react"

const AuthProRoutes = ({children}) => {
    const {currentUser, setCurrentUser} = useContext(UserContext)
    useEffect(() => {
        const currentState = window.localStorage.getItem('user')
    
          setCurrentUser(currentState)
      }, [currentUser])
    if(currentUser){
      return <Navigate to="/" />
    }
    return children
}

export default AuthProRoutes