import ProjectLayout from "./ProjectLayout";
import styles from "../../Styling/ProjectLayout.module.scss";

//assets
import cover from "../../Assets/Projects/RakosPatak/coverscreen.png";
import img1 from "../../Assets/Projects/RakosPatak/elewacjascreen.png";
import img2 from "../../Assets/Projects/RakosPatak/sectionscreen.png";
import img3 from "../../Assets/Projects/RakosPatak/wizka1.jpg";
import img5 from "../../Assets/Projects/RakosPatak/plan.png";
import img6 from "../../Assets/Projects/RakosPatak/wizka2.jpg";

const RakosPatak = () => {
  return (
    <>
      <ProjectLayout
        title="Rakos Patak"
        subtitle="Bike Square"
        cover={cover}
        team="Julia Dolata, Eva Le Bascond"
        year="2021"
        nextproject="/childrens_house"
        description="Bike Square is an innovative project situated in close
      proximity to Budapest, adjacent to the picturesque bike
      line along Rakos Patak. Designed as a temporary wooden
      modular structure, this unique development offers
      versatility through its potential for reuse in different locations.
      The project boasts a thoughtful design, featuring a blend
      of open modules for communal spaces, activities, and
      communication. Alongside dedicated modules transformed
      into cozy bedrooms and safe indoor bike lockers,
      catering to the needs of bikers seeking an overnight stay.
      One of Bike Square’s remarkable advantages lies in its
      close proximity to Budapest, making it an ideal base for
      sightseeing ventures. Its unique location amidst nature
      provides a tranquil environment, perfect for relaxation
      and recreational activities."
      >
        <div className={styles.projectcontainer}>
          <img className={styles.fullwidthheightimg} src={img5} alt="img" />
          <div className={styles.fullwidthimg}>
            <img src={img1} alt="img" />
            <p style={{ left: "2rem" }}>
              <em>main elevation</em>
              <br />
              The main elevation of the strucure showing an example of
              organization of the modules.
            </p>
          </div>
          <div className={styles.fullwidthimg}>
            <p style={{ right: "2rem" }}>
              <em>cross-section</em>
              <br />
              The section shows the organization of the interior of the closed
              modules.
            </p>
            <img src={img2} alt="img" />
          </div>
          <div className={styles.fullwidthimg}>
            <img src={img3} alt="img" />
          </div>
          <div className={styles.fullwidthimg}>
            <img src={img6} alt="img" />
          </div>
         
        </div>
      </ProjectLayout>
    </>
  );
};
export default RakosPatak;
