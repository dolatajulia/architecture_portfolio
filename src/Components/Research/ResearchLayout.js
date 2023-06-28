import { useNavigate } from "react-router-dom";
import styles from "../../Styling/ResearchLayout.module.scss";

const ResearchLayout = (props) => {
  return (
    <div className={styles.container}>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};
export default ResearchLayout;
