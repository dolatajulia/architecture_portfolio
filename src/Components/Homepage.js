import styles from "../Styling/Homepage.module.scss";
import "../../src/App.css";

//components
import Slideshow from "./Slideshow";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <Slideshow />
      <div className="marginline">
        <p>©2023 designed and created by Julia Dolata, all rights reserved.</p>
      </div>
    </div>
  );
};
export default Homepage;
