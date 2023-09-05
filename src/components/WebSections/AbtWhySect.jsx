import React from "react";
import { Link } from "react-router-dom";
import '../../App.css'

const AbtWhySect = () => {
  return (
    <div className="bg-dark text-light">
      <div className="container">
        <div className="flex-row d-flex justify-content-between align-items-center flex-wrap-reverse py-3 gap-3">
          <div className="col-md-5 mb-3">
            <h3 className="all-subheaders">
              Why are so many people investing Digital currencies like BitCoin?
            </h3>
            <p className="font-text">
            Since 2015, Spectrum Capitals has been providing access to professional financial services in the cryptocurrency market to enhance your savings. We specialize in trust management of cryptocurrency finances, offering the most advantageous terms, combining high returns with stability. Our strengths lie in profitability, client convenience, and minimal risks. Our experienced traders and advanced strategies ensure substantial capital growth in a brief span, making you a part of the world's largest financial market.
            </p>
          </div>
          <div className="col-md-5">
            <iframe
              className="w-100"
              height="315"
              src="https://www.youtube.com/embed/W15A7Lf0_fI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        {/* <div className='rounded row d-flex justify-content-between align-items-center bg-success'>
                <div className='col-md-5'>
                    <h2>Earn up to $25 worth of crypto</h2>
                    <p>Our Goal Is To Provide Our Investors With A Reliable Source Of High Income, While Minimizing Any Possible Risks And Offering A High-Quality Service, Allowing Us To Automate And Simplify The Relations Between The Investors And The Trustees</p>
                </div>
                <div className='col-md-5'>
                    <Link to='/register'>
                        <button className='btn btn-light text-dark '>Get Started</button>
                    </Link>
                    
                </div>
            </div> */}
      </div>
    </div>
  );
};

export default AbtWhySect;
