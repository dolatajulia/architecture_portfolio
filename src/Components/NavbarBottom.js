import { useNavigate } from "react-router-dom";

//styling
import styles from "../Styling/Navbar.module.scss";

const NavbarBottom = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      <div
        className={styles.navbaritembottom}
        onClick={() => navigate("contactme")}
      >
        <h1>contact me</h1>
        <p>my contact information</p>
      </div>
    </div>
  );
};
export default NavbarBottom;
