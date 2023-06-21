import styles from "../Styling/Homepage.module.scss";
import "../../src/App.css";

//components
import NavbarTop from "./NavbarTop";
import NavbarBottom from "./NavbarBottom";
import Slideshow from "./Slideshow";
import Projects from "./Projects";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <NavbarTop />
      </div>
      <Slideshow />
      <div className={styles.bottom}>
        <NavbarBottom />
        <Projects />
        <div className="marginline">
        <p>©2023 designed and created by Julia Dolata, all rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
