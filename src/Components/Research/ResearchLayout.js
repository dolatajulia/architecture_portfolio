import { useNavigate } from "react-router-dom";
import "../../App.css";
import styles from "../../Styling/ResearchLayout.module.scss";

const ResearchLayout = (props) => {
  const visibility = props.visibility;
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <img src={props.image} alt="thematic image" />
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <h3>{props.comment}</h3>
      </div>
      <div className={styles.content}>
        <p>
          <span>Keywords:</span> {props.keywords}
        </p>
        <p>
          <span className={props.visibility}>Abstract:</span> {props.abstract}
        </p>
      </div>
      <div className={props.visibility}>
        <a href={props.link} target="_blank">
          read the full article
        </a>
      </div>
    </div>
  );
};
export default ResearchLayout;
