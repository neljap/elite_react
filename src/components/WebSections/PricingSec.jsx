import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import {IoIosCheckmarkCircle} from 'react-icons/io'
const PricingSec = () => {
  return (
    <section id="pricing" class="pricing-content section-padding bg-dark text-light">
	<div class="container">					
		<div class="section-title text-center">
			<h2 className='text-success'>Packages</h2>
			{/* <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> */}
		</div>				
		<div class="row text-center py-5 justify-content-center align-items-center">									
		<div class="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp text-start" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
			<h2 className='text-3xl all-subheaders text-success'>A Trading Account For Every Trader</h2>
			<p className='font-text '>Spectrum Capitals offers a variety of trading accounts to match every trading style across all levels of experience.</p>
			<p className='font-text'>Whether you’re a scalper or day trader, use EAs or are a discretionary trader - we have you covered.</p>
		</div>
			<div class="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
				<div class="pricing_design mb-4">
					<div class="single-pricing">
						<div class="price-head">		
							<h2>BRONZE PLAN</h2>
							<div className='d-flex gap-3 justify-content-center align-items-center'>
								<strong className='text-success text-3xl h2 font-extrabold'>$500</strong>
								<small className='text-success h5'>minimum</small>
							</div>
							
							<span>/14 days</span>
						</div>
						<div>
							<div className='d-flex justify-content-between align-items-center'>
							<p>Min Deposit</p>
							<p>$500</p>
						</div>
						<div className='d-flex justify-content-between align-items-center'>
							<p>Max Deposit</p>
							<p>$2499</p>
						</div>
						<div className='d-flex justify-content-between align-items-center'>
							<p>Return of Interest</p>
							<p>25%</p>
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
							
						</div>
						<Link to='/register'className=" text-decoration-none price_btn">
							Select Package
						</Link>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
				<div class="pricing_design mb-4">
					<div class="single-pricing">
						<div class="price-head">		
							<h2>SILVER PLAN</h2>
							<div className='d-flex gap-3 justify-content-center align-items-center'>
								<strong className='text-success text-3xl h2 font-extrabold'>$2500</strong>
								<small className='text-success h5'>minimum</small>
							</div>
							<span>/28 days</span>
						</div>
						<div>
							<div className='d-flex justify-content-between align-items-center'>
							<p>Min Deposit</p>
							<p>$2500</p>
						</div>
						<div className='d-flex justify-content-between align-items-center'>
							<p>Max Deposit</p>
							<p>$4999</p>
						</div>
						<div className='d-flex justify-content-between align-items-center'>
							<p>Return of Interest</p>
							<p>25%</p>
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
							
						</div>
						<Link to='/register'className=" text-decoration-none price_btn">
							Select Package
						</Link>
						
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
				<div class="pricing_design mb-4">
					<div class="single-pricing">
						<div class="price-head">		
							<h2>GOLD PLAN</h2>
							<div className='d-flex gap-3 justify-content-center align-items-center'>
								<strong className='text-success text-3xl h2 font-extrabold'>$5000</strong>
								<small className='text-success h5'>minimum</small>
							</div>
							<span>/40 days</span>
						</div>
						<div>
							<div className='d-flex justify-content-between align-items-center'>
							<p>Min Deposit</p>
							<p>$5000</p>
						</div>
						<div className='d-flex justify-content-between align-items-center'>
							<p>Max Deposit</p>
							<p>$9999</p>
						</div>
						<div className='d-flex justify-content-between align-items-center'>
							<p>Return of Interest</p>
							<p>25%</p>
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
							
						</div>
						<Link to='/register'className=" text-decoration-none price_btn">
							Select Package
						</Link>
					</div>
				</div>
			</div>
            <div class="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
				<div class="pricing_design mb-4">
					<div class="single-pricing">
						<div class="price-head">		
							<h2>DIAMOND PLAN</h2>
							<div className='d-flex gap-3 justify-content-center align-items-center'>
								<strong className='text-success text-3xl h2 font-extrabold'>$10000</strong>
								<small className='text-success h5'>minimum</small>
							</div>
							<span>/14 days</span>
						</div>
						<div>
							<div className='d-flex justify-content-between align-items-center'>
							<p>Min Deposit</p>
							<p>$10000</p>
						</div>
						<div className='d-flex justify-content-between align-items-center'>
							<p>Max Deposit</p>
							<p>$19999</p>
						</div>
						<div className='d-flex justify-content-between align-items-center'>
							<p>Return of Interest</p>
							<p>25%</p>
						</div>
						<div className='d-flex justify-content-between align-items-center'>
							<p>Base Currency</p>
							<p>USD</p>
						</div>
						<div className='d-flex justify-content-between align-items-center'>
							<p>Full I.T Support</p>
							<p></p>
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
							
						</div>
						<Link to='/register'className=" text-decoration-none price_btn">
							Select Package
						</Link>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
				<div class="pricing_design mb-4">
					<div class="single-pricing">
						<div class="price-head">		
							<h2>PLATINUM PLAN</h2>
							<div className='d-flex gap-3 justify-content-center align-items-center'>
								<strong className='text-success text-3xl h2 font-extrabold'>$200</strong>
								<small className='text-success h5'>minimum</small>
							</div>
							<span>/28 days</span>
						</div>
						<div>
							<div className='d-flex justify-content-between align-items-center'>
							<p>Min Deposit</p>
							<p>$20000</p>
						</div>
						<div className='d-flex justify-content-between align-items-center'>
							<p>Max Deposit</p>
							<p>$50000</p>
						</div>
						<div className='d-flex justify-content-between align-items-center'>
							<p>Return of Interest</p>
							<p>25%</p>
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
							
						</div>
						<Link to='/register'className=" text-decoration-none price_btn">
							Select Package
						</Link>
					</div>
				</div>
			</div>	  
		</div>
	</div>
</section>
  )
}

export default PricingSec