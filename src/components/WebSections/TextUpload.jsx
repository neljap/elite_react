import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {ThreeDots} from "react-loader-spinner";
import { toast } from "react-toastify";


const TextUpload = () => {
  const [image, setImage] = useState(null);
  const [fileUrl, setFileUrl] = useState('');
  const [loading, setLoading] = useState(false)

  const uploadFile = async(type)=> {
    const data = new FormData()
    data.append("file", image);
    data.append("upload_preset", "kyc_preset")

    try {
      let cloudName = "dpqswhzt3";
      let resourceType = type === "image" ? "image" : "";
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const {secure_url} = res.data;
      console.log(secure_url);
      return secure_url;
    } catch (error) {
      toast.error(error.code, { position: "bottom-left" });
    }
  }

  
 
  const FileUpload = async () => {
    try {
      setLoading(true)
      const  fileUrl = await uploadFile('image')
      const resp = await axios.post("http://localhost:3030/image/kyc",  {fileUrl});
      console.log(resp.data);
      setImage(null)
    } catch (error) {
      toast.error(error.code, { position: "bottom-left" });
    } finally{
      setLoading(false)
    }
  };
// useEffect(() => {
//     uploadFile()
//   }, [FileUpload])
//   console.log("file", fileUrl);
  return (
    <>
      {/* <Form.Group className="mb-3">
        <Form.Label htmlFor="image">Default file input example</Form.Label>
        <Form.Control
          type="file"
          name="avatar"
          accept="image/*"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <Button onClick={uploadFile}>Upload</Button>
      </Form.Group> */}
      <div>
        <label htmlFor="image">Image</label>
        <br />
        <input
          type="file"
          accept="image/*"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
          name=""
        />
        <button onClick={FileUpload}>Upload</button>
      </div>
      {loading && <ThreeDots />}
    </>
  );
};

export default TextUpload;
