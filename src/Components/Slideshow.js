import React, { useState, useEffect } from "react";
//styling
import styles from "../Styling/Slideshow.module.scss";
//assets
import logo from "../Assets/JD_white.svg";
import img1 from "../Assets/Slideshow/1.png";
import img2 from "../Assets/Slideshow/2.jpg";
import img3 from "../Assets/Slideshow/3.jpg";

const Slideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [img1, img2, img3];
  const switchImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(switchImage, 1000);
    return () => clearInterval(interval);
  }, [currentImage]);
  return (
    <div className={styles.container}>
      <img alt="JD personal logo" src={logo} />
      <img src={images[currentImage]} alt="cleaning images" />
    </div>
  );
};
export default Slideshow;
