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
        <div id="contact-form">
          <h1>contact.</h1>
          <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
          <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
          <button onClick={submit}>Send Message</button>
        </div>
    );
};

export default ContactForm;