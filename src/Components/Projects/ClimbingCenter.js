import ProjectLayout from "./ProjectLayout";
import styles from "../../Styling/ProjectLayout.module.scss";

//assets
import cover from "../../Assets/Projects/ClimbingCenter/cover.jpg";
import img1 from "../../Assets/Projects/ClimbingCenter/plan.jpg";
import img2 from "../../Assets/Projects/ClimbingCenter/before_optimized.png";
import img3 from "../../Assets/Projects/ClimbingCenter/after_optimized.png";
import img4 from "../../Assets/Projects/ClimbingCenter/SITE.jpg";
import img5 from "../../Assets/Projects/ClimbingCenter/zamek.jpg";
import img6 from "../../Assets/Projects/ClimbingCenter/wizkomp.jpg";

const ClimbingCenter = () => {
  return (
    <>
      <ProjectLayout
        title="Climbing Center"
        subtitle="Adaptation of the castle ruins
      in Kells"
        cover={cover}
        team="Julia Dolata, Katarzyna Śliwka"
        year="2023"
        nextproject="/co_living"
        description="The project aims to transform the ancient ruins of Kells
      into a vibrant and engaging climbing center, revitalizing
      the site and making it a sought-after destination once
      again. The existing ruins are nestled within the serene
      Irish countryside, offering a tranquil atmosphere that sets
      the stage for the project’s concept.
      By incorporating modern architecture and design elements,
      the proposal seeks to integrate climbing walls,
      facilities, and amenities into the existing structure. Corten
      steel and glass structures will be strategically added to
      extend the ruins and provide spaces for climbing enthusiasts.
      The new additions will house climbing walls of
      various difficulty levels, ensuring an immersive and inclusive
      experience for visitors. In addition to the climbing
      facilities, the project envisions the inclusion of essential
      amenities such as lockers, a café, and restrooms. These
      facilities will enhance the overall visitor experience, catering
      to the needs of climbers and ensuring their comfort
      and convenience."
      >
        <div className={styles.projectcontainer}>
          <div className={styles.pair}>
            <img
              className={styles.fifty}
              style={{ scale: "90%" }}
              src={img2}
              alt="img"
            />
            <img
              className={styles.fifty}
              style={{ scale: "95%" }}
              src={img3}
              alt="img"
            />
          </div>
          <img className={styles.fullwidthheightimg} src={img4} alt="img" />
          <img className={styles.fullwidthheightimg} src={img1} alt="img" />
          <div className={styles.pair}>
            <img
              className={styles.fifty}
              // style={{ scale: "90%" }}
              src={img6}
              alt="img"
            />
            {/* <img
              className={styles.fifty}
              style={{ scale: "95%" }}
              src={img3}
              alt="img"
            /> */}
          </div>
        </div>
      </ProjectLayout>
    </>
  );
};
export default ClimbingCenter;
