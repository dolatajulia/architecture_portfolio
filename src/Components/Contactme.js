import styles from "../Styling/Contactme.module.scss";

//assets
import linkedin from "../Assets/Contactme/linkedin.svg";
import email from "../Assets/Contactme/email.png";
import phone from "../Assets/Contactme/phone.png";
import whatsapp from "../Assets/Contactme/whatsapp.svg";

const Contactme = () => {
  return (
    <div className={styles.container}>
      <h1>Contact me</h1>
      <div className={styles.elements}>
        <div className={styles.element}>
          <img src={email} alt="email" />
          <p>julia.rozalia.dolata@gmail.com</p>
        </div>
        <div className={styles.element}>
          <img src={phone} alt="phone" />
          <p>+48 511 710 107</p>
        </div>
        <div className={styles.element}>
          <img src={whatsapp} alt="whatsapp" />
          <p>+48 511 710 107</p>
        </div>
        <div className={styles.element}>
          <img src={linkedin} alt="linkedin" />
          <a
            href="https://www.linkedin.com/in/archjuliadolata/"
            target="_blank"
          >
            www.linkedin.com/in/archjuliadolata
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contactme;
