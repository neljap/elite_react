import React, { useState } from 'react'
import BtcImg from '../../assests/bitcoin.png'
import LtcImg from '../../assests/litecoin.png'
import EthImg from '../../assests/ethereum.png'
import UtImg from '../../assests/dollar.png'

const UserDepForm = () => {
    const [DepData, setDepData] =  useState({
        amount: '',
        currency: ''
    })

    const handleChange = (e) => {
        const {name, value, checked, type} = e.target
        setDepData(prevDepData => {
            return {
                ...prevDepData,
                [name]: type === "checkbox" ? checked : value
            }

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try{
            console.log(DepData)
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div>
        <h3>DEPOSIT</h3>
        <div>
            <p>Choose your Prefer Option</p>
            <form onSubmit={handleSubmit}>
                
                <fieldset>
                    <div><label>Enter Amount</label>
                <input type='number' value={DepData.amount} onChange={handleChange} name='amount' />
                    </div>
                    <select>
                        <div style={{width: '100px', height: '50px'}}>
                            <img src={BtcImg} alt="" style={{width: '30px', height: '30px'}} className='rounded' />
                            <label>Bitcoin (B)</label>
                            <input type="radio" name="bitcoin" id="bitcoin" value='bitcoin' checked={DepData.currency === "bitcoin"} onChange={handleChange} />
                        </div>
                        <div style={{width: '100px', height: '50px'}}>
                            <img src={LtcImg} alt="" style={{width: '30px', height: '30px'}} className='rounded' />
                            <label>Bitcoin (B)</label>
                            <input type="radio" name="bitcoin" id="bitcoin" value='bitcoin' checked={DepData.currency === "bitcoin"} onChange={handleChange} />
                        </div>
                        <div style={{width: '100px', height: '50px'}}>
                            <img src={EthImg} alt="" style={{width: '30px', height: '30px'}} className='rounded' />
                            <label>Bitcoin (B)</label>
                            <input type="radio" name="bitcoin" id="bitcoin" value='bitcoin' checked={DepData.currency === "bitcoin"} onChange={handleChange} />
                        </div>
                        <div style={{width: '100px', height: '50px'}}>
                            <img src={UtImg} alt="" style={{width: '30px', height: '30px'}} className='rounded' />
                            <label>Bitcoin (B)</label>
                            <input type="radio" name="bitcoin" id="bitcoin" value='bitcoin' checked={DepData.currency === "bitcoin"} onChange={handleChange} />
                        </div>
                    </select>
                </fieldset>
                <button className='btn btn-success'>Proceed to Payment</button>
            </form>
        </div>
    </div>
  )
}

export default UserDepForm