import React, { useState } from 'react'

const UserText = () => {

    const [singleData, setSingleData] = useState({})
    const [showData, setShowData] = useState([
        {
            id: 1,
            text: 'test',
            but: 'one',
            img: require('../../assests/2.png')
        },
        {
            id: 2,
            text: 'test',
            but: 'two',
            img: require('../../assests/2.png')
        },
        {
            id: 3,
            text: 'test',
            but: 'three',
            img: require('../../assests/2.png')
        },
        {
            id: 4,
            text: 'test',
            but: 'four',
            img: require('../../assests/2.png')
        }
    ])
 

    const handleChange = (id) => {
       const display =  showData.find((dataId) => {
             return dataId.id == id
         
        })
        if(display){
            setSingleData(display)
            console.log(singleData, 'singleeeee')
          

        }
   
    }
  return (
    <div>

        <div>
            {showData.map((item, index) => (
                <div key={index}><button onClick={() => handleChange(item.id)} className='btn btn-danger'>{item.but}</button></div>
            ))}

        </div>
        <h1>{singleData.but}</h1>
    </div>
  )
}

export default UserText