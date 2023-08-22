import React from 'react'
import { FaBars } from 'react-icons/fa'
import BtcIcon from '../../assests/bitcoin.png'
import LiteCoin from '../../assests/litecoin.png'
import EthIcon from '../../assests/ethereum.png'
import DollIcon from '../../assests/dollar.png'
import { Link } from 'react-router-dom'


const UserWallSec = () => {
  return (
    <div className='row'>
        <div className='col-md-5'>
            <div>
                <div></div>
                <div>
                    <h4>Full Name</h4>
                    <p>email address</p>
                    <p>supportId</p>
                </div>
            </div>
            <div className='d-flex'>
                <div>
                    <h4>Account Balance</h4>
                    <h2>$0.00</h2>
                </div>
                <div>
                    <h4>Total Profit</h4>
                    <h2>$0.00</h2>
                </div>
            </div>
            <div className='d-flex gap-2 justify-content-between align-items-center px-3'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <FaBars />
                    <p>Fund Wallet</p>
                    <Link to='/user/deposit'>
                      <button className='btn btn-success'>Proceed</button>  
                    </Link>
                </div>
                {/* <div className='d-flex flex-column justify-content-center align-items-center'>
                    <FaBars />
                    <p>Coin Swap</p>
                    <Link to='/user/coin-swap'>
                       <button className='btn btn-success'>Get Started</button> 
                    </Link>
                    
                </div> */}
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <FaBars />
                    <p>Withdraw</p>
                    <Link to='/user/withdraw'>
                        <button className='btn btn-success'>Proceed</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className='col-md-5'>
            <div className='d-flex flex-wrap justify-content-center align-items-center gap-4'>
                <div className='d-flex justify-content-center align-items-center gap-2'>
                    <img src={BtcIcon} alt="" style={{width: '50px', height: '50px'}}/>
                    <div>
                        <h6>Bitcoin Wallet</h6>
                        <h5>0.00000000BTC</h5>
                        <h4>$0.00</h4>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-2'>
                <img src={EthIcon} alt="" style={{width: '50px', height: '50px'}}/>
                    <div >
                        <h6>Bitcoin Wallet</h6>
                        <h5>0.00000000BTC</h5>
                        <h4>$0.00</h4>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-2'>
                <img src={LiteCoin} alt="" style={{width: '50px', height: '50px'}}/>
                    <div >
                        <h6>Bitcoin Wallet</h6>
                        <h5>0.00000000BTC</h5>
                        <h4>$0.00</h4>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-2'>
                <img src={DollIcon} alt="" style={{width: '50px', height: '50px'}}/>
                    <div >
                        <h6>Bitcoin Wallet</h6>
                        <h5>0.00000000BTC</h5>
                        <h4>$0.00</h4>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default UserWallSec