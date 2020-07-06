import React, { useContext } from 'react';
import { Context } from '../../Context/Context';
import "./translateButtons.scss"

const TranslateButtons = () => {
  const { enLang, mkLang } = useContext(Context);
  
  return (
    <div className="btn-lang">
      <button 
        onClick={mkLang} 
        style={{
          backgroundImage: 'url(' + require('../../images/mkFlag.svg') + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
      </button>
      <button
        onClick={enLang}
        style={{
          backgroundImage: 'url(' + require('../../images/enFlag.png') + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
      </button>
    </div>
  );
};

export default TranslateButtons;
