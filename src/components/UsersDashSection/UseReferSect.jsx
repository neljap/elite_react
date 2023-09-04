import {
  FaClipboard
} from "react-icons/fa";
import '../../App.css'
import { useState } from "react";
import {CopyToClipboard} from "react-copy-to-clipboard"

const UseReferSect = () => {
  const [refer, setRefer] = useState('https://spectrumcapitals.com/register')
  const [copied, setCopied] = useState(false)

  const RegLink = 'https://spectrumcapitals.com/register'

  return (
    <div className="bg-dark text-light user-depo-top">
      <h2>REFFERALS</h2>
      <div className="container">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="col-md-3" >
          <p>
            Make extra income by reffering your family and friends. We pay you
            commissions for every signup that comes via your referral link.
          </p>
          <div>
            <input type="text" value={refer}  className="w-75 rounded p-1" />
          <CopyToClipboard text={RegLink} onCopy={() => setCopied(true)}>
              <FaClipboard cursor='pointer' size={30}/>
          </CopyToClipboard>
          {copied ? (<span style={{color: 'green'}}>Copied</span>): null}
          </div>
          
        </div>
        <div className="col-md-3 p-3 border border-success rounded" style={{backgroundColor: '#2A3042'}}>
          <h4>Total Referral</h4>
          <h1>0</h1>
        </div>
        <div className="col-md-3 p-3 border border-success rounded" style={{backgroundColor: '#2A3042'}}>
          <h4>Active Referral</h4>
          <h1>0</h1>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default UseReferSect;
