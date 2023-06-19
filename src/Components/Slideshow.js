import styles from "../Styling/Slideshow.module.scss";
import logo from "../Assets/JD_white.svg";

const Slideshow = () => {
  return (
    <div className={styles.container}>
      <img alt="JD personal logo" src={logo} />
    </div>
  );
};
export default Slideshow;
