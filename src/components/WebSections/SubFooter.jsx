import { Link } from "react-router-dom";
import "../../App.css";

const SubFooter = () => {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row bg-success rounded mx-auto sub-ft-container p-3 text-light">
          <div className="col-md-5">
            <h2>The Better Way to Trade & Invest</h2>
            <p>
              Spectrum Capitals Provides a research driven approach to trading
              and Investing with advanced tools abd top tier security measures,
              making it the better way to invest.
            </p>
          </div>
          <div className="col-md-3">
            <Link to='/register'>
               <button className="btn btn-light text-dark p-3">Get Started</button> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
