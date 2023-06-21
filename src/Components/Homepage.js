import styles from "../Styling/Homepage.module.scss";
import "../../src/App.css";

//components
import NavbarTop from "./NavbarTop";
import NavbarBottom from "./NavbarBottom";
import Slideshow from "./Slideshow";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <NavbarTop />
      </div>
      <Slideshow />
      <div className={styles.bottom}>
        <NavbarBottom />
        <div className="marginline">
          <p>©2023 created by Julia Dolata, all rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
