import styles from "../Styling/Homepage.module.scss";

//components
import NavbarTop from "./NavbarTop";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.marginline}>
        <p>The collection of selected works</p>
      </div>
      <NavbarTop />
      <div className={styles.marginline}>
        <p>Created by Julia Dolata</p>
        <p>2023</p>
      </div>
    </div>
  );
};
export default Homepage;
