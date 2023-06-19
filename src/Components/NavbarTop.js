import { useNavigate } from "react-router-dom";

//styling
import styles from "../Styling/Navbar.module.scss";

const NavbarTop = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <div className={styles.navbaritem} onClick={() => navigate("aboutme")}>
        <h1>about me</h1>
        <p>my education, work experience and skills</p>
      </div>
      <div className={styles.navbaritem} onClick={() => navigate("projects")}>
        <h1>projects</h1>
        <p>my selected projects</p>
      </div>
      <div className={styles.navbaritem} onClick={() => navigate("gallery")}>
        <h1>gallery</h1>
        <p>some of my graphics and sketches</p>
      </div>
    </div>
  );
};

export default NavbarTop;
