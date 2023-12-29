import { useContext, useRef, useState } from "react";
import "../../App.css";
import { toast } from "react-toastify";
import { BsCloudUpload } from "react-icons/bs";
import axios from "axios";
import {ThreeDots} from "react-loader-spinner";
import { hosturl } from "../../components/utils/Apis";
import { AuthContext } from "../../components/context/AuthContext";
const UserKycVData = () => {
  const [kycFile, setKycFile] = useState("");
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(false)

 const inputRef = useRef(null);

 const {data} = useContext(AuthContext);

  const preFile = async (type) => {
    const data = new FormData();
    data.append("file", kycFile);
    data.append("upload_preset", "kyc_preset");

    try {
      let cloudName = "dpqswhzt3";
      let resourceType = type === "image" ? "image" : "";
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(secure_url);
      return secure_url;
    } catch (error) {
      toast.error(error.code, { position: "bottom-left" });
    }
  };

  const uploadFile = async(e) => {
    e.preventDefault();
    if (!kycFile) {
      toast.error("Please Upload a file", {
        position: "bottom-left",
      });
      return;
    }

    try {
      setLoading(true)
      const kycinfo = await preFile('image');
      const resp = await axios.patch(`${hosturl}/api/user/update/${data?._id}`, {
        kycinfo,
      });
    } catch (error) {
      toast.error(error.code, { position: "bottom-left" });
    } finally{
      setLoading(false)
    }
  };

  const uploadRef = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <div>
        <h2>TIER TWO VERIFICATION</h2>
        <div>
          <div style={{ maxWidth: "500px", margin: "0px auto" }}>
            <h3 className="text-center">Tier two Verification (KYC)</h3>
            <p className="text-center">
              Please kindly upload a government approved identification
              document. (ID Card, Driver licenses and any other document.)
            </p>
            <p className="text-center">
              Note: This can be rejected upon submission due to unclear format
              or wrong input
            </p>
          </div>

          <div className="d-flex justify-content-center align-items-center flex-wrap gap-2">
            <div>
              <div className="verify-box" onClick={uploadRef}>
                <input
                  type="file"
                  name=""
                  style={{ display: "none" }}
                  accept="/image/*"
                  id=""
                  onChange={(e) => setKycFile(e.target.files[0])}
                  ref={inputRef}
                />
                <p>{percent} % done</p>
                <BsCloudUpload size={100} color="black" />
                <p className="text-center text-black">
                  Upload Your Document here
                </p>
              </div>
              <button
                style={{ margin: "0px auto" }}
                className="btn btn-success"
                onClick={uploadFile}
              >
                Upload
              </button>
              {loading && <ThreeDots /> }
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserKycVData;
