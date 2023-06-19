import styles from "../Styling/Navbar.module.scss";

const NavbarTop = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbaritem}>
        <h1>about me</h1>
        <p>my education, work experience and skills</p>
      </div>
      <div className={styles.navbaritem}>
        <h1>projects</h1>
        <p>a collection of selected projects</p>
      </div>
      <div className={styles.navbaritem}>
        <h1>gallery</h1>
        <p>some of my graphics and sketches</p>
      </div>
    </div>
  );
};

export default NavbarTop;
