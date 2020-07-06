import React, { useState, useContext } from 'react';
import './Gallery.scss';
import { Context } from '../../Context/Context';

const GalleryCarousel = ({ makeArr, inx }) => {
  const [index, setIndex] = useState(inx);
  const { setIsCarousel } = useContext(Context);

  return (
    <div className="galleryCarousel">
      <div className="overlay"
        style={{
          backgroundImage:
            'url(' + require(`../../images/sliki/${index}.jpg`) + ')',
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
        }}
      >
        <span className='time' onClick={() => setIsCarousel(false)}>
          <i className="fas fa-times "></i>
        </span>
        <span onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-left arrow"></i>
        </span>
        <div
          className="carouselImg"
          style={{
            backgroundImage:
              'url(' + require(`../../images/sliki/${index}.jpg`) + ')',
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
          }}
        ></div>
        <span onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right arrow"></i>
        </span>
      </div>
    </div>
  );
};

export default GalleryCarousel;
