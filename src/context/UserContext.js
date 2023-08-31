import { setDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    userDataInfo: [],
    setUserDataInfo: () => []
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [userDataInfo, setUserDataInfo] = useState({})

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('user'))

        if(savedData){
            console.dir(savedData, {depth: null})
            setUserDataInfo(savedData.userData)
        }
    }, [])

    const value = {currentUser, setCurrentUser, userDataInfo, setUserDataInfo}

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}