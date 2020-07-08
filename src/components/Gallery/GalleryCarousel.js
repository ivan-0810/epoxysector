import React, { useState, useContext } from 'react';
import './Gallery.scss';
import { Context } from '../../Context/Context';

const GalleryCarousel = ({ makeArr, inx }) => {
  const [index, setIndex] = useState(inx);
  const { setIsCarousel } = useContext(Context);

  const incrementPic = () => {
    if (index === 28) {
      setIndex(28);
    } else {
      setIndex(index + 1);
    }
  };
  const decrementPic = () => {
    if (index === 1) {
      setIndex(1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="galleryCarousel">
      <div className="overlay">
        <span className="time" onClick={() => setIsCarousel(false)}>
          <i className="fas fa-times "></i>
        </span>
        <span onClick={decrementPic}>
          <i className="fas fa-arrow-left arrow"></i>
        </span>
        <div className="carouselImg">
          <img src={require(`../../images/sliki/${index}.jpg`)} alt="" />
        </div>
        <span onClick={incrementPic}>
          <i className="fas fa-arrow-right arrow"></i>
        </span>
      </div>
    </div>
  );
};

export default GalleryCarousel;
