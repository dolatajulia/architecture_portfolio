import styles from "../Styling/Subpage.module.scss";
import "../../src/App.css";

const Subpage = (props) => {
  return (
    <div className={styles.container}>
      <div className="marginline">
        <p>Go Back</p>
      </div>
      {props.children}
      <div className="marginline">
        <p>Created by Julia Dolata</p>
        <p>2023</p>
      </div>
    </div>
  );
};
export default Subpage;
