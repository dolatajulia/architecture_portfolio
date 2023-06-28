import styles from "../../Styling/ProjectLayout.module.scss";

const ProjectLayout = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.welcomepage}>
        <img src={props.cover} alt="project cover" />
        <div className={styles.bottom}>
          <div className={styles.left}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <h2>
              <span>Team: </span>
              {props.team}
            </h2>
            <h2><span>Year of creation: </span>{props.year}</h2>
          </div>
          <div className={styles.right}>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectLayout;
