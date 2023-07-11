import styles from "../Styling/ProjectLayout.module.scss";
import ProjectLayout from "./Projects/ProjectLayout";

import cover from "../Assets/Artwork_box/coversketches.jpg";
import img1 from "../Assets/Artwork_box/postercampus.png";
import img2 from "../Assets/Artwork_box/posterarch.png";
import img3 from "../Assets/Artwork_box/posterwindows.png";

const Sketches = () => {
  return (
    <>
      <ProjectLayout
        title="Sketches Collection"
        subtitle="A collection of freehand sketches"
        cover={cover}
        year="2021"
        team="solo project"
        nextproject="/paintings"
        description="
            Presented collection contains sketches of both architecture and people created during my process of learning how to draw. I find myself to be a expressive drafter prioritizing showing the structure of the form over the details."
      >
        <div className={styles.projectcontainer}>
          <img
            className={styles.fullwidthheightimg}
            style={{ maxHeight: "100vh", objectFit: "contain" }}
            src={img1}
            alt="img"
          />
          <img
            className={styles.fullwidthheightimg}
            style={{ maxHeight: "100vh", objectFit: "contain" }}
            src={img2}
            alt="img"
          />
          <img
            className={styles.fullwidthheightimg}
            style={{ maxHeight: "100vh", objectFit: "contain" }}
            src={img3}
            alt="img"
          />
        </div>
      </ProjectLayout>
    </>
  );
};
export default Sketches;
