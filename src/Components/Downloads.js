import Section from "./Section";
import styles from "../Styling/Box.module.scss";

import downloadarrow from "../Assets/downloadarrow.svg";
import downloadarrow5 from "../Assets/downloadarrow5.svg";

const data = [
  {
    id: 1,
    title: "portfolio",
    subtitle: "Download a PDF version of my portfolio book",
    link: "https://drive.google.com/file/d/1K0dd2MERa9XPBuzAwanamcjkQeBKqO0_/view?usp=sharing",
  },
  {
    id: 2,
    title: "cv",
    subtitle: "Download a PDF version of my CV",
    link: "https://drive.google.com/file/d/1K012KzGfAA8HJ8-CZPkPvWs2jKyTizJr/view?usp=sharing",
  },
];

const Downloads = () => {
  const boxes = data.map((box) => (
    <a className={styles.container} href={box.link} target="_blank">
      <div>
        <img className={styles.arrow} src={downloadarrow} />
        <img className={styles.arrowhover} src={downloadarrow5} />
        <h1>{box.title}</h1>
        <h2>{box.subtitle}</h2>
      </div>
    </a>
  ));

  return (
    <Section title="Downloads">
      <div className={styles.boxgrid}>{boxes}</div>
    </Section>
  );
};
export default Downloads;
