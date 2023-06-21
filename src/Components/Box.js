import styles from "../Styling/Box.module.scss";

//assets
import arrow from "../Assets/Project_box/arrow.svg";
import img1 from "../Assets/Project_box/childrenshouse.jpg";

const Box = () => {
  return (
    <div className={styles.container}>
      <img className={styles.arrow} src={arrow} />
      <h1>Children's House</h1>
      <h2>Kaira Looro Architecture Competition 2022</h2>
      <img className={styles.picture} src={img1} alt="picture of the project" />
    </div>
  );
};
export default Box;
