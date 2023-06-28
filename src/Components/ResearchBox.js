import styles from "../Styling/Box.module.scss";

//assets
import arrow from "../Assets/Project_box/arrow.svg";
import img1 from "../Assets/Project_box/childrenshouse.jpg";
import img2 from "../Assets/Project_box/socialhousing.jpg";
import img3 from "../Assets/Project_box/heritage.jpg";
import img4 from "../Assets/Project_box/coliving.jpg";
import img5 from "../Assets/Project_box/rakos.jpg";

const data = [
  {
    id: 1,
    title: "Modernist transformations",
    subtitle: "Modernist transformations of existing residential areas, features of modernism in urban plans",
    language: "English",
    img: img1,
  },
  {
    id: 2,
    title: "Social Housing in Milan",
    subtitle: "Cooperation with Politecnico di Milano",
    img: img2,
  },
  {
    id: 3,
    title: "Climbing Center",
    subtitle: "Adaptation of the castle ruins in Kells, Ireland",
    img: img3,
  },
  {
    id: 4,
    title: "Co-living for the elderly",
    subtitle:
      "Bachelor Thesis at Poznan University of Technology   Faculty of Architecture",
    img: img4,
  },
  {
    id: 5,
    title: "Rakos Patak",
    subtitle: "Bike Square",
    img: img5,
  },
];

const Box = () => {
  const boxes = data.map((box) => (
    <div className={styles.container}>
      <div>
        <img className={styles.arrow} src={arrow} />
        <h1>{box.title}</h1>
        <h2>{box.subtitle}</h2>
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
