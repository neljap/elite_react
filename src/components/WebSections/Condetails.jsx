import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";

const Condetails = () => {
  return (
    <div className="bg-dark ">
      <div className="container d-flex justify-content-center align-items-center row mx-auto gap-5 py-3">
        <div className="col-md-3">
          <div className="bg-light border border-green d-flex justify-content-center align-items-center  rounded" style={{width: '70px', height: '70px'}}>
            <FaPhoneAlt color="green" size={30} />
            
          </div>
          <p className="text-light">Phone Number</p>
            <p className="text-success">+1 (859) 652-3309</p>
        </div>
        <div className="col-md-3">
        <div className="bg-light border border-green d-flex justify-content-center align-items-center rounded" style={{width: '70px', height: '70px'}}>
            <FaEnvelope color="green" size={30} />
          </div>
          <p className="text-light">Email</p>
          <p className="text-success">support@spectrumcapitals.com</p>
        </div>
        <div className="col-md-3">
          <div className="bg-light border border-green d-flex justify-content-center align-items-center rounded" style={{width: '70px', height: '70px'}}>
            <FaLocationArrow color="green" size={30} />
          </div>
          <p className="text-light">Telegram Phone Number</p>
          <p className="text-success">+1(859) 652-3309</p>
        </div>
      </div>
    </div>
  );
};

export default Condetails;
