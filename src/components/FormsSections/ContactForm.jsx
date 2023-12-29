import { useState } from "react";
import '../../App.css'
import { toast } from "react-toastify";
import axios from "axios";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const condata = {fullname: name, email, subject, message}

      const resp = await axios.post("https://specserver.vercel.app/api/user/contact", condata);
      
      setEmail('')
      setMessage('')
      setName('')
      setSubject('')
      setLoading(false)
      toast.success('Message Received, We will get back to you Shortly', {
        position: 'bottom-left'
      })
    } catch (err) {
      throw new Error(err)
    }
  };
  return (
    <div className="bg-dark text-light">
      <h2 className="text-success font-bold text-center">Get In Touch</h2>
      <div className="container">
        <form
        onSubmit={handleSubmit}
        className="main-contactFm-con mt-5 border border-success p-md-5 p-3 rounded mx-auto py-3"
      >
        <div className="row">
          <div className="d-flex flex-column col-md-6">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Full Name"
              className="w-100 rounded p-2 mb-3"
            />
          </div>
          <div className="d-flex flex-column col-md-6">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email Address"
              className="w-100 rounded p-2 mb-3"
            />
          </div>
        </div>

        <div className="d-flex flex-column w-1qa  00">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            placeholder="Subject"
            className="w-100 rounded p-2 mb-3"
            
          />
        </div>
        <div className="d-flex flex-column w-100">
          <label className="font-weight-bold ">Message</label>
          <textarea
            required
            placeholder="Messages"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-100 rounded p-2 my-3"
            style={{height: '250px'}}
          />
        </div>
        <button className="btn btn-success w-100">{loading ? (<>sending...</>):(<>SEND</>)}</button>
      </form>
      </div>
      
    </div>
  );
};

export default ContactForm;
