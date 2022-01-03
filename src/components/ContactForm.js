import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const userId = process.env.REACT_APP_EMAILJS_USER_ID;

const ContactForm = () => {
  // https://www.webtips.dev/react-contact-form-without-backend
  // https://www.emailjs.com/ (trafego de email gratuito)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const from_name = 'Renan Moraes';

  useEffect(() => {
    if (emailSent) {
      alert('Thank you for your message, we will be in touch in 24 hours!');
      setEmailSent(false);
    }
  }, [emailSent])

  const submit = () => {
    if (name && isValidEmail && message) {
      const templateParams = {
          name,
          email,
          message,
          from_name,
      };

      emailjs.send(serviceId, templateId, templateParams, userId)
          .then(response => console.log(response))
          .then(error => console.log(error));
      
      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
    } else {
        alert('Please fill in all fields.');
    }
  }

  const isValidEmail = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

    return (
      <>
        <h1 className="contact-title">contact.</h1>
        <div className='form-container'>
          <h2>Contact me today, and get reply with in 24 hours!</h2>
          <form className="contact-form">
            <label for="input-name">Your Name: <span class="required">*</span></label>
            <input className='text-input' id="input-name" type="text" value={name} onChange={e => setName(e.target.value)} autoFocus required />
            
            <label for="input-email">Your Email: <span class="required">*</span></label>
            <input className='text-input' id='input-email' type="email" value={email} onChange={e => setEmail(e.target.value)} required />

            <label for="input-message">Your Message: <span class="required">*</span></label>
            <textarea className='input-message' value={message} onChange={e => setMessage(e.target.value)} required />

            <button className='send' type='submit' id="contact-submit" onClick={submit}>Send Message</button>
          </form>
        </div>
      </>
    );
};

export default ContactForm;