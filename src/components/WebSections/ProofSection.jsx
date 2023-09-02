import { Link } from "react-router-dom";
import ProofImg from "../../assests/proimg.png";
import ProofPdf from "../../assests/tradehood.pdf";

const ProofSection = () => {
  return (
    <div className="bg-dark">
      <div className="container py-5 d-flex justify-content-center align-items-center gap-5 flex-wrap">
        <div className="col-md-5">
          <h2 className="text-success font-weight-bold all-headers">
          Spectrum Capitals operates as an authorized and certified trading platform.
            
          </h2>
          <p className="text-white ">
            Spectrum Capitals is a Licensed and Certified Trading Platform.{" "}
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
