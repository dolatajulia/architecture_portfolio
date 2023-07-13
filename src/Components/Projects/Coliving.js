import ProjectLayout from "./ProjectLayout";
import styles from "../../Styling/ProjectLayout.module.scss";

//assets
import cover from "../../Assets/Projects/CoLiving/cover.jpg";
import img1 from "../../Assets/Projects/CoLiving/formdev.png";
import img2 from "../../Assets/Projects/CoLiving/wizka.jpg";
import img3 from "../../Assets/Projects/CoLiving/photo1.png";
import img4 from "../../Assets/Projects/CoLiving/photo2.png";
import img5 from "../../Assets/Projects/CoLiving/rzut150.jpg";
import img6 from "../../Assets/Projects/CoLiving/plan.png";

const Coliving = () => {
  return (
    <ProjectLayout
      title="CO-LIVING
      FOR THE
      ELDERLY"
      subtitle="Bachelor Thesis at Poznan
      University of Technology
      Faculty of Architecture"
      cover={cover}
      team="Julia Dolata, Katarzyna Śliwka"
      year="2022"
      nextproject="/rakos_patak"
      description="The BSc Thesis includes a project of a residential-service
      building located in Poznań, Jeżyce district. It incorporates
      conceptual, construction, and structural design.
      The project aims to address the contemporary social
      issues prevalent in our society, such as loneliness and
      isolation, which have been amplified by the recent pandemic
      circumstances. The design prioritizes the needs
      of solitary individuals, particularly the elderly, who constitute
      a social group deserving of special consideration
      and support.
      Due to its unique character, the building stands out as
      an innovative element of the urban fabric. The created
      structure fits into the frontage along the street since it is
      inspired by the local context. Moreover, with its modern
      form, it invites people to enter the diverse green space of
      the courtyard through the dynamic opening in elevation.
      It aims to introduce a fresh perspective and innovative
      solutions that are infrequently employed in the realm of
      Polish housing."
    >
      <div className={styles.projectcontainer}>
        <div className={styles.pair}>
          <p
            className={styles.fourty}
            style={{
              paddingRight: "2rem",
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "column",
            }}
          >
            <em>Form development</em>
            <br /> The form development scheme involved aligning with
            regulations and extending existing buildings boundaries. Contextual
            considerations led to the implementation of a mansard roof and a
            beveled corner. The building form was dynamically divided into two
            wings, creating a connection between the street and courtyard.
            Terraces were incorporated for outdoor recreation and social
            interaction, fostering community engagement.
          </p>
          <img className={styles.sixty} src={img2} alt="img" />
        </div>
        <img className={styles.fullwidthheightimg} src={img1} alt="img" />
        <img className={styles.fullwidthheightimg} src={img6} alt="img" />

        <div className={styles.pair}>
          <img className={styles.fifty} src={img3} alt="img" />
          <img className={styles.fifty} src={img4} alt="img" />
        </div>
        <img className={styles.fullwidthheightimg} src={img5} alt="img" />
      </div>
    </ProjectLayout>
  );
};
export default Coliving;
