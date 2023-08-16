import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
const PricingSec = () => {
  return (
    <section id="pricing" class="pricing-content section-padding">
	<div class="container">					
		<div class="section-title text-center">
			<h2>Pricing Plans</h2>
			<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
		</div>				
		<div class="row text-center">									
			<div class="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
				<div class="pricing_design">
					<div class="single-pricing">
						<div class="price-head">		
							<h2>BASIC PACKAGE</h2>
							{/* <h1>$0</h1>
							<span>/Monthly</span> */}
						</div>
						<ul>
							<li>Minimum Deposit: $200.00</li>
							<li>Maximum Deposit: $1000.00</li>
							<li>Trade Duration: 2days</li>
							<li>ROI: 30% Daily</li>
							<li>Cycle: hourly</li>
						</ul>
						<div class="pricing-price">
							
						</div>
						<Link class="price_btn">Get Started</Link>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="0" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
				<div class="pricing_design">
					<div class="single-pricing">
						<div class="price-head">		
							<h2>STANDARD PACKAGES</h2>
							{/* <h1 class="price">$29</h1>
							<span>/Monthly</span> */}
						</div>
						<ul>
							<li>Minimum Deposit: $2,000:00</li>
							<li>Maximum Deposit: $5,000:00</li>
							<li>Trade Duration: 7days</li>
							<li>ROI: 45% Daily</li>
							<li>Cycle: hourly</li>
						</ul>
						<div class="pricing-price">
							
						</div>
						<a href="#" class="price_btn">Select Package</a>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0" style={{visibility: 'visible', animationDuration: '1s', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
				<div class="pricing_design">
					<div class="single-pricing">
						<div class="price-head">		
							<h2>EXECUTIVE PACKAGE</h2>
							{/* <h1 class="price">$49</h1>
							<span>/Monthly</span> */}
						</div>
						<ul>
							<li>Minimum Deposit: $10,000.00</li>
							<li>Maximum Deposit: $100,000.00</li>
							<li>Trade Duration</li>
							<li>ROI: 50% Daily</li>
							<li>Cycle: hourly</li>
						</ul>
						<div class="pricing-price">
							
						</div>
						<a href="#" class="price_btn">Select Package</a>
					</div>
				</div>
			</div>
            		  
		</div>
	</div>
</section>
  )
}

export default PricingSec