import { useRef } from "react";
import { Accordion } from "react-bootstrap";
import { FaTimes, FaBars, FaAddressCard } from "react-icons/fa";
import '../../App.css'

const UserWallAcc = () => {
    const WallRef = useRef()

    const showRecord = () => {
        WallRef.current.classList.toggle('record')
    }

  const WallDetails = [
    {
      id: 1,
      icon: <FaAddressCard />,
      curr: "Dollar (USD)",
      unit: "USD",
    },
    {
      id: 2,
      icon: <FaAddressCard />,
      curr: "Bitcoin (BTC)",
      unit: "BTC",
    },
    {
      id: 3,
      icon: <FaAddressCard />,
      curr: "Ethereum (ETH)",
      unit: "ETH",
    },
    {
      id: 4,
      icon: <FaAddressCard />,
      curr: "Tether (USDT)",
      unit: "USDT",
    },
    {
      id: 5,
      icon: <FaAddressCard />,
      curr: "Litecoin (LTC)",
      unit: "LTC",
    },
  ];
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center ">
        <div>
          <FaBars />
          <p>Wallet</p>
        </div>
        <div>
          <FaTimes onClick={showRecord} />
        </div>
      </div>
      <div ref={WallRef}>
        <div className="row">
          <div className="col-md-2">
            <p>Icon</p>
          </div>
          <div className="col-md-2">
            <p>Currency</p>
          </div>
          <div className="col-md-4">
            <p>Balance</p>
          </div>
          <div className="col-md-2">
            <h2>Total Deposit</h2>
            <p>$0.00 USD</p>
          </div>
        </div>
        <div>
          {WallDetails.map((item) => {
            return (
              <div className="row mb-2" key={item.id}>
                <div className="col-md-2">
                  <FaTimes />
                </div>
                <div className="col-md-2">
                  <h4>Bitcoin</h4>
                </div>
                <div className="col-md-4">
                  <h2>0.00USD</h2>
                  <p>0.00000000BTC</p>
                </div>
                <div className="col-md-2 d-flex gap-2">
                  <div>
                    <button className="btn btn-success">Deposit</button>
                  </div>
                  <div>
                    <button className="btn btn-transparent border border-light text-light">
                      Exchange
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="my-3">
          {WallDetails.map((item) => (
            <Accordion className="w-100 bg-dark" key={item.id}>
              <Accordion.Item eventKey="0" className="bg-dark text-light">
                <Accordion.Header className="bg-dark text-light">
                  <div className="d-flex">
                    <FaBars />
                    <p>Bitcoin</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p>$0.00USD</p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <button className="btn btn-success">Deposit</button>
                      </div>
                      <div>
                        <button className="btn btn-transparent border border-light text-light">
                          Exchange
                        </button>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserWallAcc;
