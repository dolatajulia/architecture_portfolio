import styles from "../Styling/ProjectLayout.module.scss";
import cover from "../Assets/Artwork_box/cover.jpg";
import img1 from "../Assets/Artwork_box/ikona.jpg";
import img2 from "../Assets/Artwork_box/ikona2.jpg";
import img3 from "../Assets/Artwork_box/zdjecie1.jpg";
import img4 from "../Assets/Artwork_box/zdjecie2.jpg";
import img5 from "../Assets/Artwork_box/zdjęcie3.jpg";
import img6 from "../Assets/Artwork_box/zdjęcie4.jpg";

import ProjectLayout from "./Projects/ProjectLayout";

const Paintings = () => {
  return (
    <>
      <ProjectLayout
        title="The Barcelona Pavilion Marble"
        subtitle="A series of paintings inspired by sufraces in the Barcelona Pavilion by Mies van der Rohe"
        cover={cover}
        year="2020"
        team="solo project"
        nextproject="/posters"
        description="This series of paintings is inspired by the surfaces found in the Barcelona Pavilion, designed by the famous architect Mies van der Rohe. The goal was to recreate marble-like textures with colorful and eye-catching structures, just like those in the pavilion. To achieve this, I used a pouring method, where paint is poured onto the canvas and left to create unique shapes and patterns thanks to delicate movements. These paintings contrast intricate surfaces with plain ones, similar to the pavilion itself. The result is a collection of captivating artworks that combine careful planning with spontaneous artistic expression. They capture the essence of the Barcelona Pavilion while providing a fresh and captivating perspective."
      >
        <div className={styles.projectcontainer}>
          <img className={styles.fullwidthheightimg} src={img1} alt="img" />
          <img className={styles.fullwidthheightimg} src={img2} alt="img" />
          <img className={styles.fullwidthheightimg} src={img3} alt="img" />
          <img className={styles.fullwidthheightimg} src={img4} alt="img" />
          <img className={styles.fullwidthheightimg} src={img5} alt="img" />
          <img className={styles.fullwidthheightimg} src={img6} alt="img" />
        </div>
      </ProjectLayout>
    </>
  );
};
export default Paintings;
