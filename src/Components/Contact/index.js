import React from 'react'
import './contact.css'
import emailjs from 'emailjs-com';
const Contact = () => {


  function contact(e){
    e.preventDefault();

    emailjs.sendForm('service_3gba1mp', 'template_ftqlaw8', e.target, 'IVaTehtM7iIsRoeL9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  
 
  return (
   
    <section className ="contact">
<h1 className="contact-heading"><span >Contact Me</span> </h1>
    <div className="contact-container">
      
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch!</h3>
          <p className="text">
            don't be shy , send me an email
          </p>

          <div className="info">
          
            <div className="information">
              <img src="img/email.png" className="icon" alt="" />
              <p>angelankosi0118@gmail.com</p>
            </div>
         
          </div>

        
        </div>

        <div className="contact-form">
       

          <form onSubmit={contact}>
            <h3 className="title">Contact Me</h3>
            <div className="input-container">
              <input type="text" name="name" placeholder="Username" className="input" />
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" placeholder="Email"  className="input" />
             
              <span>Email</span>
            </div>

            <div className="input-container textarea">
              <textarea name="message" className="input" placeholder="Enter your message"></textarea>
              <span>Message</span>
            </div>
            <input type="submit" value="Send"  className="contact-btn" />
          </form>
        </div>
      </div>
    </div>
 </section>

 

  )
}

export default Contact