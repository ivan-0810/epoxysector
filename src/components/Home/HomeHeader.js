import React from 'react';
import frontImg from '../../images/Sredeni od Mete 2/IMG_7481.jpg';
import translate from '../../i18Provider/translate'


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
        
    <h1>{translate('header')}</h1>
    <p>{translate('header-podnaslov')}</p>
      </div>
    </div>
  );
};

export default HomeHeader;
