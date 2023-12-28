import { Accordion } from "react-bootstrap";
import FaqImg from "../../assests/faqi.png";
import '../../App.css'

const FaqSection = () => {
  return (
    <div className="bg-dark text-light ">
      <h2 className="text-success text-center all-headers">FAQ</h2>
      <p className="text-center font-size">Answers to Common Questions: Your Ultimate FAQ Guide</p>
      <div className="container py-5 d-flex justify-content-center align-items-center flex-wrap gap-3 w-100">
        <div className="faqacc">
          <Accordion className="w-100">
            <Accordion.Item eventKey="0" className="bg-dark text-light">
              <Accordion.Header className="bg-dark text-light"><strong>What is the minimum amount to start an investment?</strong></Accordion.Header>
              <Accordion.Body>
                The Minimum Amount to get started with an investment plan under Spectrum Capitals is $500
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="bg-dark text-light">
              <Accordion.Header><strong>What is the waiting time for a withdrawal request to be processed after I've made an investment?</strong></Accordion.Header>
              <Accordion.Body>
                <p className="font-size">
                The time it takes to initiate a withdrawal request varies depending on your chosen Investment Plan. You have the flexibility to request a withdrawal at any time, as long as it's been more than 14 days since you began your investment. Please be aware that any withdrawal request made within 14 days of starting your investment will not be approved.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="bg-dark text-light">
              <Accordion.Header><strong>Is it possible for me to invest an amount other than the ones specified in the Investment Packages?</strong></Accordion.Header>
              <Accordion.Body>    
                <p className="font-text">Yes, it is permitted, but the minimum accepted amount is $500, as anything below $500 will not be accepted.</p> 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="bg-dark text-light">
              <Accordion.Header><strong>What is the typical waiting time for my funds to be processed after I've submitted a withdrawal request?</strong></Accordion.Header>
              <Accordion.Body>
                <p className="font-text">
                You will receive the token USDT immediately into your designated wallet address once you have submitted it.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        {/* <div className="col-md-5">
          <img src={FaqImg} alt="img" className="w-100" />
        </div> */}
      </div>
    </div>
  );
};

export default FaqSection;
