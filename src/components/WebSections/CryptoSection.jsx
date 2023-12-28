import '../../App.css'

const CryptoSection = () => {
  return (
    <div className="bg-dark text-white py-5">
      <div>
        <h1 className="text-success text-center all-headers">Cryptocurrency</h1>
        <p className="text-center">Trade and Invest Top Cryptocurrency</p>
      </div>
      <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap py-5">
        <div className="col-md-3 crypto-sm-box">
          <div>
            <div>
              <h2>Ethereum</h2>
              <p>ETH/USD</p>
            </div>
            <h1>$29,082</h1>
            <p className="text-center text-danger">(-0.86%)</p>
          </div>
        </div>
        <div className="col-md-3 crypto-sm-box">
          <div>
            <div>
              <h2>Ethereum</h2>
              <p>ETH/USD</p>
            </div>
            <h1>$29,082</h1>
            <p className="text-center text-danger">(-0.86%)</p>
          </div>
        </div>
        <div className="col-md-3 crypto-sm-box">
          <div>
            <div>
              <h2>Ethereum</h2>
              <p>ETH/USD</p>
            </div>
            <h1>$29,082</h1>
            <p className="text-center text-danger">(-0.86%)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoSection;
