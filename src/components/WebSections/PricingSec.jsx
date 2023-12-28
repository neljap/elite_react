import '../../App.css'
import PricingSecCard from './PricingSecCard'
const PricingSec = () => {

	const name = {
		bronze: "BRONZE",
		silver: "SILVER",
		gold: "GOLD",
		diamond: "DIAMOND",
		platinum: "PLATINUM"
	}


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
		<PricingSecCard name={name.bronze} minDeposit={500} maxDeposit={2499} roi={40} time={7}/>
		<PricingSecCard name={name.silver} minDeposit={2500} maxDeposit={4999} roi={55} time={14}/>
		<PricingSecCard name={name.gold} minDeposit={5000} maxDeposit={9999} roi={70} time={14}/>
		<PricingSecCard name={name.diamond} minDeposit={10000} maxDeposit={19999} roi={80} time={14}/>
		<PricingSecCard name={name.platinum} minDeposit={20000} maxDeposit={50000} roi={95} time={20}/>
		</div>
	</div>
</section>
  )
}

export default PricingSec