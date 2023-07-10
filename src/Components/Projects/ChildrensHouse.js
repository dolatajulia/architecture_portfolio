import ProjectLayout from "./ProjectLayout";
import styles from "../../Styling/ProjectLayout.module.scss";

//assets
import cover from "../../Assets/Projects/ChildrensHouse/cover.png";
import img1 from "../../Assets/Projects/ChildrensHouse/podluzny.png";
import img2 from "../../Assets/Projects/ChildrensHouse/poprzeczny.png";
import img3 from "../../Assets/Projects/ChildrensHouse/explosion.png";
import img4 from "../../Assets/Projects/ChildrensHouse/wizkabok.jpg";
import img5 from "../../Assets/Projects/ChildrensHouse/rzut.png";
import img6 from "../../Assets/Projects/ChildrensHouse/filtracja.png";
import img7 from "../../Assets/Projects/ChildrensHouse/airflow_optimized.png";
import img8 from "../../Assets/Projects/ChildrensHouse/building_optimized.png";
import img9 from "../../Assets/Projects/ChildrensHouse/toilet_optimized.png";
import img10 from "../../Assets/Projects/ChildrensHouse/szafa_optimized.png";
import img11 from "../../Assets/Projects/ChildrensHouse/wnetrze_optimized.png";

const ChildrensHouse = () => {
  return (
    <>
      <ProjectLayout
        title="Children’s House"
        subtitle="Kaira Looro Architecture Competition 2022"
        cover={cover}
        team="Julia Dolata, Katarzyna Śliwka"
        year="2022"
        nextproject="/social_housing"
        description="Located in Baghere Village, south Senegal, the Children’s
  House presents itself as a simple construction, yet
  it is full of innovative solutions. The building’s structure
  is designed to protect the inhabitants from the harmful
  effects of weather conditions, but also to help solve local
  problems such as difficult access to pure drinking water,
  malnutrition, or lack of micronutrients. The project
  was created with the aspiration that the implemented
  improvements would positively influence the quality of
  life for children and contribute to their pursuit of a better
  future.
  The inner part of the building contains all the essential
  functions. With consideration for the nature of the spaces
  and the residents’ privacy, the areas have been classified
  into private and public zones. The exterior layer functions
  as a protective barrier for the interior, while its design
  allows for the integration of a water purification system
  within the building."
      >
        <div className={styles.projectcontainer}>
          <div
            className={styles.fullwidthimg}
            style={{ maxHeight: "calc(100vh * 0.8)" }}
          >
            <img src={img5} alt="img" />
          </div>
          <div className={styles.fullwidthimg}>
            <p style={{ left: "2rem" }}>
              <em>longitudinal section</em>
              <br />
              The longitudinal section show the patio from which you can enter
              the doctor’s office or administration room. Deeper inside you can
              find a peaceful hospitality corner with dormitories that are
              connected with the doctor’s office.
            </p>
            <img src={img1} alt="longitudinal section" />
          </div>
          <div className={styles.fullwidthimg}>
            <p style={{ right: "2rem" }}>
              <em>cross-section</em>
              <br />
              The cross section reveals a building design that prioritizes
              functionality and occupant well-being. The outer layer acts as a
              shield, providing ventilation and protection from rain and sun.
            </p>
            <img src={img2} alt="img" />
          </div>
          <div className={styles.fullwidthimg}>
            <img src={img4} alt="img" />
          </div>
          <div className={styles.pair}>
            <div className={styles.doubleimgcolumn} style={{ width: "50%" }}>
              <img src={img10} alt="img" />
              <img src={img11} alt="img" style={{ marginTop: "1rem" }} />
            </div>
            <img
              className={styles.fifty}
              src={img3}
              alt="img"
              style={{ objectFit: "contain", paddingLeft: "1.5rem" }}
            />
          </div>
          <div className={styles.pair}>
            <img className={styles.fifty} src={img6} alt="img" />
            <p className={styles.fifty}>
              <em>Water purification system</em> is integrated with the building
              structure. Rainwater from the roof flows down the gutter{" "}
              <em>[1]</em> and is collected in the water tower <em>[2]</em>. As
              a consequence of the pressure water is transported to the
              following containers: barrel with washed sand <em>[3]</em> that
              cleans the water of dirt, barrel with gravel intertwined by canvas
              <em>[4]</em> that disposes it of inorganic compounds, barrel with
              charcoal and canvas <em>[5]</em> working as a carbon filter,
              transparent pyramid <em>[6]</em> in which the water is evaporating
              and bacteria and viruses are neutralized. Water condenses and runs
              down the walls straight to the drinking water container [7], from
              which we can get drinking water using a hand pump.
            </p>
          </div>
          <div className={styles.grid}>
            <div>
              <img src={img7} alt="img" />
            </div>
            <div>
              <p>
                The form of the roof allows proper ventilation and protects the
                interior from rain and sun. The buffer zone between the clay
                walls and panel façades helps to prevent wall damage and keeps
                the interior cool.
              </p>
            </div>
            <div>
              <img src={img9} alt="img" />
            </div>
            <div>
              <p>
                Composting toilet located next to the main building reduces
                water consumption and allows to get the fertilizer for the local
                vegetable garden.
              </p>
            </div>
            <div>
              <img src={img8} alt="img" />
            </div>
            <div>
              <p>
                The building is based on a grid and can be easly adapted to the
                needs of the user in various situations. Spaces can be adapted
                to differnt functions. For example, the dormitories, can be
                expanded to the common area to fit more beds.
              </p>
            </div>
          </div>
        </div>
      </ProjectLayout>
    </>
  );
};
export default ChildrensHouse;
