import React from 'react';

import frontImg from '../../images/Sredeni od Mete 2/DSCF0183.jpg';
const HomeHeader = () => {
  return (
    <div
      className="home-header"
      style={{
        backgroundImage: `url(${frontImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="overlay">
        
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </div>
    </div>
  );
};

export default HomeHeader;
