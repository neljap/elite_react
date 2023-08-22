import {createContext, useState} from 'react'

const DepContext = createContext({
    amtData: [],
    setAmtData: () => []
})

export const DepConProvider = ({children}) => {
    const [amtData, setAmtData] = useState([])
    const info = {amtData, setAmtData}
    return(
        <DepContext.Provider value={info}>
            {children}
        </DepContext.Provider>
    )
}