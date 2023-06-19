import styles from "../Styling/Navbar.module.scss";

const NavbarTop = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbaritem}>
        <h3>about me</h3>
        <p>education/experience/skills</p>
      </div>
      <div className={styles.navbaritem}>
        <h3>projects</h3>
        <p>selected works</p>
      </div>
      <div className={styles.navbaritem}>
        <h3>gallery</h3>
        <p>graphics/sketches</p>
      </div>
    </div>
  );
};

export default NavbarTop;
