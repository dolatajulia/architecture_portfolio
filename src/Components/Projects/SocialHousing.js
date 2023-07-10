import ProjectLayout from "./ProjectLayout";
import styles from "../../Styling/ProjectLayout.module.scss";

//assets
import cover from "../../Assets/Projects/SocialHousing/coversocial.png";
import img1 from "../../Assets/Projects/SocialHousing/axoscreen_optimized.png";
import img2 from "../../Assets/Projects/SocialHousing/ele1screen.png";
import img3 from "../../Assets/Projects/SocialHousing/ele2screen.png";
import img4 from "../../Assets/Projects/SocialHousing/planscreen_optimized.png";
import img5 from "../../Assets/Projects/SocialHousing/wizka2screen_optimized.png";

const SocialHousing = () => {
  return (
    <>
      <ProjectLayout
        title="Social Housing in Milan"
        subtitle="Kaira Looro Architecture Competition 2022"
        cover={cover}
        team="Julia Dolata, Katarzyna Śliwka, Zuzanna Cywińska, Gabriela Jaszewska"
        year="2023"
        nextproject="/climbing_center"
        description="Presented Social Housing project in Milan, situated adjacent
      to the renowned Arena Romana, offers a compelling
      solution for urban living in the city center, Comprising
      three distinct buildings, each structure caters to different
      resident profiles, ensuring a diverse and inclusive community.
      The building prominently positioned along the
      street, is tailored to accommodate students, providing
      a vibrant and conducive environment for their needs.
      The two remaining buildings, concealed from the street,
      are dedicated to families, offering privacy and tranquility.
      Recognizing the significance of Arena Romana as a
      tourist attraction, the project incorporates ground-floor
      amenities in the first building to cater to the needs of
      visitors. The second building focuses on providing additional
      services for families, ensuring their convenience
      and comfort. The spatial arrangement of the buildings is
      thoughtfully designed to facilitate pedestrian flow, aligning
      with the bustling city center of Milan. This promotes a
      lively and engaging streetscape, enhancing connectivity
      and promoting a vibrant urban atmosphere."
      >
        <div className={styles.projectcontainer}>
          <div className={styles.fullwidthimg}>
            <img src={img1} alt="img" />
          </div>
          <div className={styles.pair}>
            <img className={styles.fourty} src={img3} alt="img" />
            <img className={styles.sixty} src={img2} alt="img" />
          </div>
          <div
            className={styles.fullwidthimg}
            style={{ maxHeight: "calc(100vh * 1.1)" }}
          >
            <img src={img4} alt="img" />
          </div>
          <div
            className={styles.fullwidthimg}
            style={{ maxHeight: "calc(100vh * 0.8)" }}
          >
            <img src={img5} alt="img" />
          </div>
        </div>
      </ProjectLayout>
    </>
  );
};
export default SocialHousing;
