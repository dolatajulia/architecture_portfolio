import styles from "../Styling/Website.module.scss";
import "../../src/App.css";
import { motion, useScroll, useSpring } from "framer-motion";

import Homepage from "./Homepage";
import Projects from "./Projects";
import Aboutme from "./Aboutme";

const Website = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <div className={styles.container}>
        <motion.div className={styles.progressbar} style={{ scaleX }} />
        {/* <Homepage /> */}
        <Aboutme />
        <Projects />
        <div className="marginline">
          <p>
            ©2023 designed and created by Julia Dolata, all rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};
export default Website;
