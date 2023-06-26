import Section from "./Section";
import styles from "../Styling/Aboutme.module.scss";

const Aboutme = () => {
  return (
    <>
      <Section title="Education">
        <div className={styles.container}>
          <div className={styles.element}>
            <h3>2018-2021</h3>
            <h1>Poznań University of Technology</h1>
            <h2>Bachelor of Architecture</h2>
            <h3>graduated with grade A (very good)</h3>
          </div>
          <div className={styles.element}>
            <h3>2020-2021</h3>
            <h1>Budapest University of Technology and Economics</h1>
            <h2>Bachelor of Architecture</h2>
            <h3>one year as an exchange student</h3>
          </div>
          <div className={styles.element}>
            <h3>2022-2023</h3>
            <h1>Poznań University of Technology</h1>
            <h2>Master of Architecture</h2>
            <h3>currently working on master thesis</h3>
          </div>
        </div>
      </Section>
    </>
  );
};
export default Aboutme;
