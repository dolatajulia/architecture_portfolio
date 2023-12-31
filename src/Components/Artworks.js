import styles from "../Styling/Box.module.scss";
import Section from "./Section";
import { useNavigate } from "react-router-dom";

//assets
import arrow from "../Assets/Project_box/arrow.svg";
import arrow5 from "../Assets/Project_box/arrow5mm.svg";
import img1 from "../Assets/Artwork_box/iconposter.jpg";
import img2 from "../Assets/Artwork_box/twarz.jpg";
import img3 from "../Assets/Artwork_box/ikona.jpg";


const data = [
  {
    id: 1,
    title: "Posters",
    subtitle:
      "A collection of posters created for Poznan University of Technology used as graphics for the university merch",
    img: img1,
    link: "posters",
  },
  {
    id: 2,
    title: "Sketches",
    subtitle: "A collection of freehand sketches",
    img: img2,
    link: "sketches",
  },
  {
    id: 3,
    title: "Paintings",
    subtitle: "A collection of paintings, documented artistic experiments and explorations",
    img: img3,
    link: "paintings",
  },
];

const Artworks = () => {
  const navigate = useNavigate();
  const boxes = data.map((box) => (
    <div className={styles.container} onClick={() => navigate(`${box.link}`)}>
      <div>
        <img className={styles.arrow} src={arrow} />
        <img className={styles.arrowhover} src={arrow5} />
        <h1>{box.title}</h1>
        <h2>{box.subtitle}</h2>
      </div>
      <img
        className={styles.picture}
        src={box.img}
        alt="picture of the research"
      />
    </div>
  ));
  return (
    <Section title="Artworks">
      <div className={styles.boxgrid}>{boxes}</div>
    </Section>
  );
};
export default Artworks;
