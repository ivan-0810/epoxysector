import React from 'react';
import './Footer.scss';
import { NavLink } from 'reactstrap';
const Footer = () => {
  return (
    <div className="footer">
      <div className="f-box">
        <p>Copyright &#169; 2020 Epoxy Sector Company </p>
        <p>All rights reserved</p>
      </div>
      <div className="f-box f-icnos">
        <NavLink to="https://www.facebook.com/">
          <span>
            <i className="fab fa-facebook"></i>
          </span>
        </NavLink>
        <NavLink to="https://www.facebook.com/">
          <span>
            <i className="fab fa-instagram"></i>
          </span>
        </NavLink>
        <NavLink to="https://www.facebook.com/">
          <span>
            <i className="fab fa-twitter"></i>
          </span>
        </NavLink>
      </div>
      <div className="f-box">
        <p>yourmail@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
