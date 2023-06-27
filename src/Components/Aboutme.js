import Section from "./Section";
import styles from "../Styling/Aboutme.module.scss";

//assests
import illustrator from "../Assets/Software/ill.svg";
import indesign from "../Assets/Software/ind.svg";
import photoshop from "../Assets/Software/ps.svg";
import archicad from "../Assets/Software/archicad.svg";
import blender from "../Assets/Software/blender.svg";
import lumion from "../Assets/Software/lumion.svg";
import microsoft from "../Assets/Software/microsoft.svg";
import rhino from "../Assets/Software/rhino.svg";
import sketchup from "../Assets/Software/sketchup.svg";
import twinmotion from "../Assets/Software/twinmotion.svg";

const Aboutme = () => {
  return (
    <>
      <Section title="Education">
        <div className={styles.container}>
          <div className={styles.element}>
            <h3>2018-2021</h3>
            <h1>Poznań University of Technology</h1>
            <h2>Bachelor of Architecture</h2>
            <h3>graduated with grade A (very good)</h3>
          </div>
          <div className={styles.element}>
            <h3>2020-2021</h3>
            <h1>Budapest University of Technology and Economics</h1>
            <h2>Bachelor of Architecture</h2>
            <h3>one year as an exchange student</h3>
          </div>
          <div className={styles.element}>
            <h3>2022-2023</h3>
            <h1>Poznań University of Technology</h1>
            <h2>Master of Architecture</h2>
            <h3>currently working on master thesis</h3>
          </div>
        </div>
      </Section>
      <Section title="Work experience">
        <div className={styles.container}>
          <div className={styles.element}>
            <h3>2019</h3>
            <h1>Architect's assistant</h1>
            <h2>Architectural Design Studio Pracownia Projektowa 77</h2>
            <h3>
              assistance in the creative process, creating and completing the
              documantation, 3D modeling
            </h3>
          </div>
          <div className={styles.element}>
            <h3>2021-2022</h3>
            <h1>Architectural drafter</h1>
            <h2>Mediatask</h2>
            <h3>
              working on 3D building scans as a basis for technical
              documentation created in CAD software
            </h3>
          </div>
          <div className={styles.element}>
            <h3>
              other jobs not related to architecture, but improving skills such as:<br/> customer servive, teamwork, communication, organization, attention to detail, time management, problem solving, and more...
            </h3>
          </div>
        </div>
      </Section>
      <Section title="skills">
        <div className={styles.container}>
          <div className={styles.element}>
            <h1>Languages</h1>
            <h2>
              Polish: <span>native</span>
            </h2>
            <h2>
              English: <span>fluently communicative [B2+/C1]</span>
            </h2>
          </div>
          <div className={styles.element}>
            <h1>Software</h1>
            <div className={styles.grid}>
              <div className={styles.item}>
                <img src={illustrator} alt="illustrator icon" />
                <h3>Illustrator</h3>
              </div>
              <div className={styles.item}>
                <img src={indesign} alt="indesign icon" />
                <h3>InDesign</h3>
              </div>
              <div className={styles.item}>
                <img src={photoshop} alt="photoshop icon" />
                <h3>Photoshop</h3>
              </div>

              <div className={styles.item}>
                <img src={archicad} alt="archicad" />
                <h3>Archicad</h3>
              </div>
              <div className={styles.item}>
                <img src={blender} alt="blender icon" />
                <h3>Blender</h3>
              </div>
              <div className={styles.item}>
                <img src={lumion} alt="lumion" />
                <h3>Lumion</h3>
              </div>
              <div className={styles.item}>
                <img src={microsoft} alt="microsoft" />
                <h3>Microsoft Office</h3>
              </div>
              <div className={styles.item}>
                <img src={rhino} alt="rhino" />
                <h3>Rhino</h3>
              </div>
              <div className={styles.item}>
                <img src={sketchup} alt="sketchup" />
                <h3>Sketchup</h3>
              </div>
              <div className={styles.item}>
                <img src={sketchup} alt="sketchup" />
                <h3>Sketchup</h3>
              </div>
              <div className={styles.item}>
                <img src={sketchup} alt="sketchup" />
                <h3>Sketchup</h3>
              </div>
              <div className={styles.item}>
                <img src={twinmotion} alt="twinmotion icon" />
                <h3>Twinmotion</h3>
              </div>
            </div>
          </div>
          <div className={styles.element}>
            <h1>Soft skills</h1>
            <ul>
              <li>a lot of experience working in teams, also international</li>
              <li>
                used to deadline-driven approach and working under pressure
              </li>
              <li>open and experimental mindset</li>
              <li>aesthetic sensitivity</li>
              <li>critical thinking and organizational abilities</li>
              <li>
                willingness to learn and adapt to new environemnts and
                situations
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
};
export default Aboutme;
