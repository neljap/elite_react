import ProofImg from "../../assests/tra.png";

const ProofSection = () => {
  return (
    <div className="bg-dark">
      <div className="container py-5 d-flex justify-content-center align-items-center gap-5 flex-wrap">
        <div className="col-md-5">
          <img src={ProofImg} alt="img" className="w-100" />
        </div>
        <div className="col-md-5">
          <h2 className="text-success font-weight-bold all-headers">
            Licensed and Certified Trading Platform
          </h2>
          <p className="text-white ">
            Spectrum Capitals is a Licensed and Certified Trading Platform.{" "}
          </p>
          <div>
            <p>Find Out More </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProofSection;
