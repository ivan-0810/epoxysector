import React from 'react';
import { Container } from 'reactstrap';
import frontImg from '../../images/Sredeni od Mete 2/IMG_7481.jpg';
import TextDiv from '../TextDiv';
import translate from '../../i18Provider/translate';
const MainContainer = () => {
  return (
    <Container className="main-containner">
      <h1>{translate('whatWeDo')}</h1>
      <div className="img-txt">
        <div className="img-box">
          <img src={frontImg} alt="" />
        </div>
        <div className="txt-box">
          <TextDiv h3={['table1']} text={['textTableOne']} />
        </div>
      </div>
      <div className="img-txt">
        <div className="txt-box">
          <TextDiv h3={['table2']} text={['textTableTwo']} />
        </div>
        <div className="img-box">
          <img src={frontImg} alt="" />
        </div>
      </div>
      <div className="img-txt">
        <div className="img-box">
          <img src={frontImg} alt="" />
        </div>
        <div className="txt-box">
          <TextDiv h3={['table3']} text={['textTableThree']} />
        </div>
      </div>
    </Container>
  );
};

export default MainContainer;
