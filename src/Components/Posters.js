import styles from "../Styling/ProjectLayout.module.scss";
import ProjectLayout from "./Projects/ProjectLayout";

import cover from "../Assets/Artwork_box/posterscoverscreen.jpg";
import img1 from "../Assets/Artwork_box/postercampus.png";
import img2 from "../Assets/Artwork_box/posterarch.png";
import img3 from "../Assets/Artwork_box/posterwindows.png";

const Posters = () => {
  return (
    <>
      <ProjectLayout
        title="Posters for PUT"
        subtitle="A series of posters for the Poznan University of Technology"
        cover={cover}
        year="2021"
        team="solo project"
        nextproject="/sketches"
        description="
        These posters were made as part of a campaign to promote Poznań University of Technology. They draw inspiration from the shapes of buildings on the campus and the surrounding scenery. The aim was to design eye-catching and captivating posters that are also informative and simple to understand. The series was selected to be printed on the university's merchandise, including t-shirts and bags, to spread the university's message even further."
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
export default Posters;
