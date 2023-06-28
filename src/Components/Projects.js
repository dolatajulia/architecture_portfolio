import styles from "../Styling/Projects.module.scss";
import "../../src/App.css";
import Section from "./Section";
import ProjectBox from "./ProjectBox";
import ResearchBox from "./ResearchBox";

const Projects = () => {
  return (
    <>
      <div className={styles.container}>
        <Section title="Projects">
          <ProjectBox />
        </Section>
        <Section title="Research papers">
          <ResearchBox />
        </Section>
      </div>
    </>
  );
};
export default Projects;
