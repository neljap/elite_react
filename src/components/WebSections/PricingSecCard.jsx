import '../../App.css'
import { Link } from 'react-router-dom'
import {IoIosCheckmarkCircle} from 'react-icons/io'

const PricingSecCard = ({name, minDeposit, maxDeposit, roi, time}) => {
  return (
    <div class="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
				<div class="pricing_design mb-4">
					<div class="single-pricing">
						<div class="price-head">		
							<h2>{name} PLAN</h2>
							<div className='d-flex gap-3 justify-content-center align-items-center'>
								<strong className='text-success text-3xl h2 font-extrabold'>${minDeposit}</strong>
								<small className='text-success h5'>minimum</small>
							</div>
							
							<span>/ {time} days</span>
						</div>
						<div>
							<div className='d-flex justify-content-between align-items-center'>
							<p>Min Deposit</p>
							<p>${minDeposit}</p>
						</div>
						<div className='d-flex justify-content-between align-items-center'>
							<p>Max Deposit</p>
							<p>${maxDeposit}</p>
						</div>
						<div className='d-flex justify-content-between align-items-center'>
							<p>Return of Interest</p>
							<p>{roi}%</p>
						</div>
						<div className='d-flex justify-content-between align-items-center'>
							<p>Base Currency</p>
							<p>USD</p>
						</div>
						<div className='d-flex justify-content-between align-items-center'>
							<p>Full I.T Support</p>
							<p>
								<IoIosCheckmarkCircle color='green' size={20} />
							</p>
						</div>
						<div className='d-flex justify-content-between align-items-center'>
							<p>Referral Bonus</p>
							<p>
								<IoIosCheckmarkCircle color='green' size={20} />
							</p>
							
						</div>
						<div className='d-flex justify-content-between align-items-center'>
							<p>Hedging Allowed</p>
							<p>
								<IoIosCheckmarkCircle color='green' size={20} />
							</p>
						</div>
						</div>
						<div class="pricing-price">
							<button className='btn btn-success btn-lg'>
								<Link to="/register" className='text-decoration-none text-white'>Get Started</Link>
							</button>
						</div>
						
					</div>
				</div>
			</div>
  )
}

export default PricingSecCard