import React, { useState, useEffect } from "react";
//styling
import styles from "../Styling/Slideshow.module.scss";
//assets
import logo from "../Assets/JD_white.svg";
import img1 from "../Assets/Slideshow/1.png";
import img2 from "../Assets/Slideshow/2.png";
import img3 from "../Assets/Slideshow/3.png";
import img4 from "../Assets/Slideshow/4.png";
import img5 from "../Assets/Slideshow/5.png";
import img6 from "../Assets/Slideshow/6.png";
import img7 from "../Assets/Slideshow/7.png";
import img8 from "../Assets/Slideshow/8.png";
import img9 from "../Assets/Slideshow/9.png";
import img10 from "../Assets/Slideshow/10.png";
import img11 from "../Assets/Slideshow/11.png";
import img12 from "../Assets/Slideshow/12.png";

const Slideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img12,
    img11,
    img10,
    img9,
    img8,
    img7,
    img6,
    img5,
    img4,
    img3,
    img2,
  ];
  const switchImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(switchImage, 300);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>Julia Dolata</h1>
        <img alt="JD personal logo" src={logo} />
        <h1>portfolio</h1>
      </div>
      <img
        className={styles.slideshow}
        src={images[currentImage]}
        alt="slideshow"
      />
    </div>
  );
};
export default Slideshow;
