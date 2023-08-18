import React from 'react'
import { Link } from 'react-router-dom'

const AbtWhySect = () => {
  return (
    <div className='bg-dark text-light'>
        <div className='container'>
            <div>
               <div>
                <iframe src="https://www.youtube.com/watch?v=W15A7Lf0_fI" frameborder="0"></iframe>
               </div>
            <div>
                <h1>Why are so many people investing Digital currencies like BitCoin?</h1>
                <p>Since 2022 Deep Margins opens access to professional financial services on the cryptocurrency market in order to increase your savings. We are engaged in trust management of finances on cryptocurrency exchanges. We offer the most favorable conditions on the market, combining high profits with stable investments. The main advantages of our company are its profitability, convenience for clients and low risks. Thanks to the experience of our traders and developed trading strategies we can guarantee a significant growth of your capital in a short period of time. By taking advantage of our services you become a member of the world`s largest financial market</p>
    
            </div> 
            </div>
            <div className='rounded row d-flex justify-content-between align-items-center bg-success'>
                <div className='col-md-5'>
                    <h2>Earn up to $25 worth of crypto</h2>
                    <p>Our Goal Is To Provide Our Investors With A Reliable Source Of High Income, While Minimizing Any Possible Risks And Offering A High-Quality Service, Allowing Us To Automate And Simplify The Relations Between The Investors And The Trustees</p>
                </div>
                <div className='col-md-5'>
                    <Link to='/register'>
                        <button className='btn btn-light text-dark '>Get Started</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default AbtWhySect