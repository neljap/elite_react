import { FaRegClipboard } from "react-icons/fa";
import { Form, Modal, Button } from "react-bootstrap";
import { useState } from "react";

const UserPayDataInfo = () => {
  const [fileUp, setFileUp] = useState(null)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-dark mx-auto">
      <h3>Make Payment</h3>
      <div className="d-flex justify-content-between align-items-center p-3">
        <div></div>
        <h2>$500</h2>
      </div>
      <div className="rounded shadow bg-dark ">
        <p>Scan the barcode below to make Payment</p>
        <div
          style={{ height: "200px", width: "200px", backgroundColor: "black" }}
        ></div>
        <p>Or Send $500 to the address below</p>
        <div className="d-flex">
          <input type="text" name="" id="" />
          <div>
            <FaRegClipboard />
          </div>
        </div>
        <p>Network Type: TRC20</p>
        <button onClick={handleShow} className="btn btn-success">
          Mark as Completed
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Multiple files input example</Form.Label>
              <Form.Control type="file"  multiple />
            </Form.Group>
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-danger">Close</button>
            <button className="btn btn-success">Submit</button>
            </div>
            
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default UserPayDataInfo;
