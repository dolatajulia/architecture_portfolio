import { useNavigate } from "react-router-dom";
import "../../App.css";
import styles from "../../Styling/ResearchLayout.module.scss";
import { motion } from "framer-motion";

const animationSettings = {
  initial: {
    opacity: 0,
    y: "100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      delay: 0.1,
      duration: 1.2,
    },
  },
  exit: {
    y: "-100vh",
    transition: { ease: "easeInOut", duration: 1 },
    opacity: 0,
  },
};

const ResearchLayout = (props) => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={animationSettings}
      initial="initial"
      animate="animate"
      exit="exit"
      className={styles.container}
    >
      <div className={styles.nav}>
        <button className={styles.backbutton} onClick={() => navigate("/")}>
          exit
        </button>
        <button
          className={styles.nextbutton}
          onClick={() => navigate(`${props.nextproject}`)}
        >
          next project
        </button>
      </div>
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
    </motion.div>
  );
};
export default ResearchLayout;
