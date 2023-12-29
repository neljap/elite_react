import { useRef, useState } from "react";
import "../../App.css";
import { storage } from "../../server";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import {BsCloudUpload} from "react-icons/bs"
import axios from "axios";
import { hosturl } from "../utils/Apis";

const UserKycUpload = () => {
  const [kycFile, setKycFile] = useState('')
  const [percent, setPercent] = useState(0)
  const inputRef = useRef(null)

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
      return secure_url;
    } catch (error) {
      toast.error(error.code, {position: "bottom-left"})
      console.log(error);
    }
  };

  const uploadFile = async(e) => {
    e.preventDefault()
    if(!file){
      toast.error('Please Upload a file', {
        position: 'bottom-left'
      })
      return;
    }

    try {
      setLoading(true)
      const fileUrl = await preFile('image');
      // hosturl
      const resp = await axios.post("http://localhost:3030/image/kyc", {
        fileUrl,
      });
    } catch (error) {
      
    }


    // try{
    //   const storageRef = ref(storage, `/kyc/${file.name}`)
      
    //   const uploadTask = uploadBytesResumable(storageRef, file)
      
    //   uploadTask.on("state_changed", (snapshot) => {
    //     const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
    //     setPercent(progress)
    //   }, (err) => console.log(err),
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url))
    //   }
    //   )
    //   setFile('')
    //   toast.success("Uploaded Successfully", {position: "bottom-left"})
    // }catch(err){
    //   console.log(err)
    // }
  }

  const uploadRef = () => {
    inputRef.current.click()
  }

  return (
    <div>
      <div >
<h2>TIER TWO VERIFICATION</h2>
      <div>
        <div style={{maxWidth:"500px", margin: "0px auto"}}>
         <h3 className="text-center">Tier two Verification (KYC)</h3>
        <p className="text-center">
          Please kindly upload a government approved identification document.
          (ID Card, Driver licenses and any other document.)
        </p>
        <p className="text-center">
          Note: This can be rejected upon submission due to unclear format or
          wrong input
        </p> 
        </div>
        
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-2">
          <div >
              <div className="verify-box" onClick={uploadRef}>
                <input type="file" name="" style={{display: "none"}} accept="/image/*" id="" onChange={(e) => setKycFile(e.target.files[0])} ref={inputRef}/>
                <p>{percent} % done</p>
                <BsCloudUpload size={100} color="black"/>
                <p className="text-center text-black">Upload Your Document here</p>
              </div>
               <button style={{margin: "0px auto"}} className="btn btn-success" onClick={uploadFile}>Upload</button>
          </div>
          <div></div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default UserKycUpload;
