import styles from "../Styling/Homepage.module.scss";
import "../../src/App.css";

//components
import Slideshow from "./Slideshow";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <Slideshow />
      
    </div>
  );
};
export default Homepage;
