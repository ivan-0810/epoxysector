import React, { useState, Fragment, useContext } from 'react';
import translate from '../../i18Provider/translate';
import { Container } from 'reactstrap';
import './Gallery.scss';
import GalleryCarousel from './GalleryCarousel';
import  { Context }  from '../../Context/Context';

const Gallery = () => {
  const { isCarousel, setIsCarousel } = useContext(Context)
  const [ inx,setInx ] = useState(0)
  //render the photos
  const makeArr = [];
  for (let i = 1; i < 22; i++) {
    makeArr.push(i);
  }

  const handlecarousel = (e, pic) => {
    setInx(pic);
    setIsCarousel(true);
  }
  console.log(inx);
  
  return (
    <Fragment>
      {isCarousel && <GalleryCarousel makeArr={makeArr} inx={inx}/> }
    <Container className="galleryCont">
      <div className="header-gallery">
        <h1>{translate('galleryH1')}</h1>
        <p>{translate('galleryTxt1')}</p>
      </div>
      {makeArr.map((pic) => (
        <div
          key={pic}
          className="img-gallery"
          onClick={(e) => handlecarousel(e,pic)}
          style={{
            backgroundImage:
              'url(' + require(`../../images/sliki/${pic}.jpg`) + ')',
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
          }}
        ></div>
      ))}
    </Container>

    </Fragment>
  );
};

export default Gallery;
