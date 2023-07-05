import styles from "../Styling/Website.module.scss";
import "../../src/App.css";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Homepage from "./Homepage";
import Projects from "./Projects";
import Aboutme from "./Aboutme";
import Contactme from "./Contactme";

const Website = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <motion.div className={styles.progressbar} style={{ scaleX }} />
        <div
          className={color ? "contact contact_bckg" : "contact"}
          onClick={() => navigate('/contactme')}
        >
          contact
        </div>
        <Homepage />
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
