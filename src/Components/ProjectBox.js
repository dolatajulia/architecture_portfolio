import styles from "../Styling/Box.module.scss";
import { useNavigate } from "react-router-dom";

//assets
import arrow from "../Assets/Project_box/arrow.svg";
import arrow5 from "../Assets/Project_box/arrow5mm.svg";
import img1 from "../Assets/Project_box/childrenshouse.jpg";
import img2 from "../Assets/Project_box/socialhousing.jpg";
import img3 from "../Assets/Project_box/heritage.jpg";
import img4 from "../Assets/Project_box/coliving.jpg";
import img5 from "../Assets/Project_box/rakos.png";

const data = [
  {
    id: 1,
    title: "Children's House",
    subtitle: "Kaira Looro Architecture Competition 2022",
    img: img1,
    link: "childrenshouse",
  },
  {
    id: 2,
    title: "Social Housing in Milan",
    subtitle: "Cooperation with Politecnico di Milano",
    img: img2,
    link: "socialhousing",
  },
  {
    id: 3,
    title: "Climbing Center",
    subtitle: "Adaptation of the castle ruins in Kells, Ireland",
    img: img3,
    link: "climbingcenter",
  },
  {
    id: 4,
    title: "Co-living for the elderly",
    subtitle:
      "Bachelor Thesis at Poznan University of Technology   Faculty of Architecture",
    img: img4,
    link: "coliving",
  },
  {
    id: 5,
    title: "Rakos Patak",
    subtitle: "Bike Square",
    img: img5,
    link: "rakospatak",
  },
];

const Box = () => {
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
        alt="picture of the project"
      />
    </div>
  ));
  return <div className={styles.boxgrid}>{boxes}</div>;
};
export default Box;
