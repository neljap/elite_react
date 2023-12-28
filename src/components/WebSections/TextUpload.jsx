import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const TextUpload = () => {
  const [files, setFiles] = useState(null);

  const FileUpload = async () => {
    try {
      const resp = await axios.post("http://localhost:3030/image",  files);
      console.log(resp.data);
    } catch (error) {
      console.log("from file-upload", error);
    }
  };

  return (
    <Form.Group controlId="formFile" className="mb-3">
      <Form.Label>Default file input example</Form.Label>
      <Form.Control
        type="file"
        name="avatar"
        accept="/uploads/*"
        onChange={(e) => setFiles(e.target.files[0])}
      />
      <Button onClick={FileUpload}>Upload</Button>
    </Form.Group>
  );
};

export default TextUpload;
