import React, { useState, useEffect } from 'react';
import Form from './Form';
import './Form.scss';
import Footer from '../Footer/Footer'

const ContactUs = () => {
  const [isReady, setIsReady] = useState(false);
 

  useEffect(() => {
    window.scrollTo(0,0);
    const timeout = setTimeout(() =>{
      setIsReady(true);
    },500)

    return () => {
      clearTimeout(timeout);
   }

  }, [isReady])
    return (
      <div className="contact-us">
          <div className="box">
            <Form isReady={isReady}/>
        </div>
          < Footer />
      </div>
    );
  }
  
  export default ContactUs;