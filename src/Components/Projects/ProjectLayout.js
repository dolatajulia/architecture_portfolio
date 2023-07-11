import styles from "../../Styling/ProjectLayout.module.scss";
import { useNavigate } from "react-router-dom";
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

const ProjectLayout = (props) => {
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
          next
        </button>
      </div>

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
            <h2>
              <span>Year of creation: </span>
              {props.year}
            </h2>
          </div>
          <div className={styles.right}>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      {props.children}
    </motion.div>
  );
};
export default ProjectLayout;
