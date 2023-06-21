import styles from "../Styling/Subpage.module.scss";
import "../../src/App.css";
import { useNavigate } from "react-router-dom";

const Subpage = (props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button onClick={() => navigate("/")}>Go Back</button>
      {props.children}
      <div className="marginline">
        <p>©2023 designed and created by Julia Dolata, all rights reserved.</p>
      </div>
    </div>
  );
};
export default Subpage;
