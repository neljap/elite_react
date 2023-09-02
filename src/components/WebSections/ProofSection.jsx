import { Link } from "react-router-dom";
import ProofImg from "../../assests/proimg.png";
import ProofPdf from "../../assests/tesxt.pdf";
import '../../App.css'

const ProofSection = () => {
  return (
    <div className="bg-dark">
      <div className="container py-5 d-flex justify-content-center align-items-center gap-5 flex-wrap">
        <div className="col-md-5">
          <h6 className="text-success font-weight-bold all-headers">
          Licensed and Certified Trading Platform
            
          </h6>
          <p className="text-white font-text">
          Spectrum Capitals operates as an authorized and certified trading platform.
          </p>
          <div>
            <Link to={ProofPdf} target="_blank" className="text-success">
              Find Out More
            </Link>
          </div>
        </div>
        <div className="col-md-5">
          <img src={ProofImg} alt="img" className="w-100 rounded" />
        </div>
      </div>
    </div>
  );
};

export default ProofSection;
