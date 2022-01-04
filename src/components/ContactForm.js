import React, { useEffect, useState } from 'react';
import { isValidEmail } from 'email-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const notifySuccess = () => {
    toast.success("Great! Your email was sent! !", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  const notifyFailure = () => {
    toast.error("Please, fill in all required fields!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }

  useEffect(() => {
    if (emailSent) {
      setEmailSent(false);
    }
  }, [emailSent])

  const submit = (e) => {
    e.preventDefault();
    console.log('NAME', name);
    console.log('isValidEmail', isValidEmail(email));
    console.log('message', message);
    if (name && isValidEmail(email) && message) {
      console.log('passei aqui');
      notifySuccess();
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
        notifyFailure();
    }
  }

    return (
      <>
        <ToastContainer />
        <h1 className="contact-title">contact.</h1>
        <div className='form-container'>
          <h2>Contact me today, and get reply with in 24 hours!</h2>
          <form className="contact-form">
            <label htmlFor="input-name">Your Name: <span className="required">*</span></label>
            <input className='text-input' id="input-name" type="text" value={name} onChange={e => setName(e.target.value)} autoFocus required/>
            
            <label htmlFor="input-email">Your Email: <span className="required">*</span></label>
            <input className='text-input' id='input-email' type="email" value={email} onChange={e => setEmail(e.target.value)} />

            <label htmlFor="input-message">Your Message: <span className="required">*</span></label>
            <textarea className='input-message' value={message} onChange={e => setMessage(e.target.value)} />

            <button className='send' type='submit' id="contact-submit" onClick={(e) => submit(e)}>Send Message</button>
          </form>
        </div>
      </>
    );
};

export default ContactForm;