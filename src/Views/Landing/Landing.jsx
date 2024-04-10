import React, { useState } from 'react';
import style from './Landing.module.css';
import { Link } from 'react-router-dom';
import rizzoSvg from '../../Assets/FrizzoInv.svg';
import landingVideo from '../../Assets/rizzo-landing.mp4';
import DotLoader from 'react-spinners/DotLoader';

const Landing = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <Link to="/Home">
      <div className={style.landingSvg}>
        <img className={style.LandingBg} src={rizzoSvg} alt="landing SVG Federico Rizzo inversiones" />
      </div>

      <div className={style.loading}>
        {!videoLoaded && <DotLoader color="#e5007f" size={100} />}
      </div>

      <video
        autoPlay
        loop
        muted
        className={`${style.landingVideo} ${videoLoaded ? style.videoLoaded : ''}`}
        id="bgVideo"
        onCanPlay={handleVideoLoad}
      >
        <source src={landingVideo} type="video/mp4" />
      </video>
    </Link>
  );
};

export default Landing;