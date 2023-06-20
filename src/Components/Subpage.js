import styles from "../Styling/Subpage.module.scss";
import "../../src/App.css";
import { useNavigate } from "react-router-dom";

const Subpage = (props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className="marginline">
        <button onClick={() => navigate("/")}>Go Back</button>
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