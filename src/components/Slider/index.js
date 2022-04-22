import React, { useState } from 'react';
import styles from './Slider.module.css';
import ArrowLeftBoxIcon from 'mdi-react/ArrowLeftBoxIcon';
import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon';

const sliderDB = [
  {
    id: 'winter',
    source: 'https://cdn.mos.cms.futurecdn.net/8Zw7hWD5ZaquyftsRbEmof.jpg',
  },
  {
    id: 'spring',
    source:
      'https://cdn.britannica.com/05/155405-050-F8969EE6/Spring-flowers-fruit-trees-bloom.jpg',
  },
  {
    id: 'summer',
    source: 'https://cdn3.dpmag.com/2020/06/challenge-003-summer-sunset.jpg',
  },
  {
    id: 'autumn',
    source:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/autumn-in-the-white-mountains-of-new-hampshire-royalty-free-image-841380450-1567025100.jpg?crop=1.00xw:0.752xh;0,0.123xh&resize=1200:*',
  },
];

function Slider () {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide !== sliderDB.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (currentSlide === sliderDB.length - 1) {
      setCurrentSlide(0);
    }
  };

  const previousSlide = () => {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (currentSlide === 0) {
      setCurrentSlide(sliderDB.length - 1);
    }
  };

  return (
    <div className={styles.slider}>
      <ArrowLeftBoxIcon
        className={styles.arrows}
        size={50}
        color='purple'
        onClick={previousSlide}
      />

      <div className={styles.slide} key={sliderDB[currentSlide].id}>
        <img
          src={sliderDB[currentSlide].source}
          alt={sliderDB[currentSlide].id}
        />
      </div>

      <ArrowRightBoxIcon
        className={styles.arrows}
        size={50}
        color='purple'
        onClick={nextSlide}
      />
    </div>
  );
}

export default Slider;
