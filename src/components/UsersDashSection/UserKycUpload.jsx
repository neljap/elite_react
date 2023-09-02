import { useState } from "react";
import "../../App.css";
import { storage } from "../../server";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";

const UserKycUpload = () => {
  const [file, setFile] = useState('')
  const [percent, setPercent] = useState(0)

  const uploadFile = (e) => {
    e.preventDefault()
    if(!file){
      toast.error('Please Upload a file', {
        position: 'bottom-left'
      })
    }

    try{
      const storageRef = ref(storage, `/kyc/${file.name}`)
      
      const uploadTask = uploadBytesResumable(storageRef, file)
      
      uploadTask.on("state_changed", (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setPercent(progress)
      }, (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url))
      }
      )
      setFile('')
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="user-depo-top">
      <h2>TIER TWO VERIFICATION</h2>
      <div>
        <h3>Tier two Verification (KYC)</h3>
        <p>
          Please kindly upload a government approved identification document.
          (ID Card, Driver licenses and any other document.)
        </p>
        <p>
          Note: This can be rejected upon submission due to unclear format or
          wrong input
        </p>
        <div className="flex justify-content-center align-items-center flex-wrap gap-2">
          <div className="verify-box">
            <div>
               <input type="file" name="" accept="/image/*" id="" onChange={(e) => setFile(e.target.files[0])}/>
                <p>{percent} % done</p>
               <button className="btn btn-success" onClick={uploadFile}>Upload</button>
            </div>
             
            
           
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default UserKycUpload;
