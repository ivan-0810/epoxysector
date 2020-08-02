import React from 'react';
import frontImg from '../../images/sliki/18.jpg';
import translate from '../../i18Provider/translate';



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
