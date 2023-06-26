import styles from "../Styling/Projects.module.scss";
import "../../src/App.css";
import Section from "./Section";
import Box from "./Box";

const Projects = () => {
  return (
    <>
      <div className={styles.container}>
        <Section title="Projects">
          <Box />
          <Box />
          <Box />
        </Section>

        <Section title="Research papers">
          <Box />
          <Box />
          <Box />
        </Section>
      </div>
    </>
  );
};
export default Projects;
