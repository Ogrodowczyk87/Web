import React, { useState } from "react";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', messgae: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)


  //! Destructure
  const { name, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }
    
    
    // client.create(contact)
    //   .then(() => {
    //     setLoading(false)
    //     setIsFormSubmitted(true)
    //   })
  }

  return <div className="footer-cards">
    <div className="footer-card">
      <h2 className="head-text">Take A Coffe & Chat with Me</h2>
      <AlternateEmailIcon />
      <img alt="email: " />
      <a href="r.ogrodowczyk87@gmail.com" className="footer-email">r.ogrodowczyk87@gmail.com</a>

      <div className="footer-card">
        <PhoneAndroidIcon />
        <img alt="mobile: " />
        <a href="r.ogrodowczyk87@gmail.com" className="footer-email">+44 7305736646</a>
      </div>
    </div>
    {!isFormSubmitted ? (
      <div className="footer-form">
        <div className="footer-flex">
          <input className="p-text" type="text" placeholder="Your Name" name="name"
            value={name} onChange={handleChangeInput}
          />
        </div>
        <div className="footer-flex">
          <input className="p-text" type="text" placeholder="Your Email" name="email"
            value={email} onChange={handleChangeInput}
          />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            name={message}
            onChange={handleChangeInput}
          />
        </div>
        <button className="p-text" type="button"
          onClick={handleSubmit}
        >{loading ? 'Sending' : 'Send Message'}</button>
      </div>
      ) : (  <div>
        <h3 className="head-text">Thank you for getting in touch</h3>
      </div>
    )}
  </div>;
}

export default Footer;
