import React , { useRef } from 'react'
import './contact.css';
import {MdOutlineMail} from "react-icons/md"
import {SiWhatsapp} from 'react-icons/si'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ve2ykes', 'template_aowgzmm', form.current, 'MlEPZ8pssjdVJI37I')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
        <article className="contact_option">
          <MdOutlineMail className='contact_option_icon'/>
          <h4>Email</h4>
          <h5>rsonalikeshri@gmail.com</h5>
           <a href="mailto:rsonalikeshri@gmail.com"  target="_blank">Send a message</a>
        </article>
        <article className="contact_option">
          <SiWhatsapp className='contact_option_icon'/>
          <h4>Whatsapp</h4> 
          <h5>+91 9608120483</h5>
           <a href=" https://web.whatsapp.com/send?phone=9608120483" target="_blank">Send a message</a>
        </article>  
        </div>
        <form ref={form} onSubmit={sendEmail}> 
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary sendBtn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
