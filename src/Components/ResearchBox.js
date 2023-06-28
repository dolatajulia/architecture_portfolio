import styles from "../Styling/Box.module.scss";

//assets
import arrow from "../Assets/Project_box/arrow.svg";
import img1 from "../Assets/Research_box/modernist.jpg";
import img2 from "../Assets/Research_box/communities.jpg";
import img3 from "../Assets/Research_box/neuroarch.jpg";

const data = [
  {
    id: 1,
    title: "Modernist transformations",
    subtitle:
      "Modernist transformations of existing residential areas, features of modernism in urban plans",
    comment: "for Periodica Polytechnica Architecture",
    language: "English",
    img: img1,
  },
  {
    id: 2,
    title: "Communities and city structure",
    subtitle:
      "The development of Warsaw after World War II in the context of urban changes and the emergence of gated communities",
    comment: "for Periodica Polytechnica Architecture",
    language: "English",
    img: img2,
  },
  {
    id: 3,
    title: "Neuroarchitecture and modernism",
    subtitle:
      "Neuroarchitecture in the adaptation of the modernist hospital Stalownik building ruins",
    comment: "Master Thesis [in progress]",
    language: "English",
    img: img3,
  },
];

const Box = () => {
  const boxes = data.map((box) => (
    <div className={styles.container}>
      <div>
        <img className={styles.arrow} src={arrow} />
        <h1>{box.title}</h1>
        <h2>{box.subtitle}</h2>
        <h2>{box.comment}</h2>
        <h2>Language: {box.language}</h2>
      </div>
      <img
        className={styles.picture}
        src={box.img}
        alt="picture of the research"
      />
    </div>
  ));
  return <div className={styles.boxgrid}>{boxes}</div>;
};
export default Box;
