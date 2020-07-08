import React from 'react';
import "./social-icons.scss"

const SocialIcons = () => {
    return (
        <div className="social-icons">
        <ul>
            <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
            <li> <a href="https://github.com/"><i className="fab fa-github"></i></a></li>
            <li> <a href="https://instagram.com/"><i className="fab fa-instagram"></i></a></li>
            <li><a href="mailto:abc@abc.com?Subject=ABC&Body=Body"><i className="fas fa-envelope"></i></a></li>
        </ul>
    </div>
    );
  }
  
  export default SocialIcons;