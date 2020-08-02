import React from 'react';
import TextDiv from '../TextDiv';
import translate from '../../i18Provider/translate';
const MainContainer = () => {
  return (
    <div className="main-containner">
      <h1>{translate('whatWeDo')}</h1>
      <div className="img-txt">
      <div className="img-box" >
          <div className="img"style={{
          backgroundImage:'url(' + require(`../../images/Sredeni od Mete 2/IMG_7481.jpg`)+')',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}></div>
        </div>
        <div className="txt-box">
          <TextDiv h3={['table1']} text={['textTableOne']} />
        </div>
      </div>
      <div className="img-txt">
        <div className="txt-box">
          <TextDiv h3={['table2']}  />
        </div>
        <div className="img-box" >
          <div className="img"style={{
          backgroundImage:'url(' + require(`../../images/Sredeni od Mete 2/IMG_7481.jpg`)+')',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}></div>
        </div>
      </div>
      <div className="img-txt">
      <div className="img-box" >
          <div className="img"style={{
          backgroundImage:'url(' + require(`../../images/Sredeni od Mete 2/IMG_7481.jpg`)+')',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}></div>
        </div>
        <div className="txt-box">
          <TextDiv h3={['table3']}  />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
