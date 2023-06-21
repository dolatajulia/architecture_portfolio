import styles from "../Styling/Section.module.scss";

const Section = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>{props.title}</h1>
      </div>
      <div className={styles.right}>{props.children}</div>
    </div>
  );
};
export default Section;
