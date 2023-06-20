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
        <div className="marginline">
          <p>The collection of selected works</p>
        </div>
        <NavbarTop />
      </div>
      <Slideshow />
      <div className={styles.bottom}>
        <NavbarBottom />
        <div className="marginline">
          <p>Created by Julia Dolata</p>
          <p>2023</p>
        </div>
      </div>
    </div>
  );
};
export default Homepage;