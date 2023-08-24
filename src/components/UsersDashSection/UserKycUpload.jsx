import "../../App.css";
import Form from "react-bootstrap/Form";

const UserKycUpload = () => {
  return (
    <div>
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
            <Form.Group
              controlId="formFileMultiple"
              className="mb-3"
              style={{ height: "300px", backgroundColor: '#000' }}
            >
              <Form.Label>Multiple files input example</Form.Label>
              <Form.Control type="file" style={{backgroundColor: '#000'}} className="w-100 h-100" multiple />
            </Form.Group>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default UserKycUpload;
