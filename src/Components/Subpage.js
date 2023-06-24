import styles from "../Styling/Subpage.module.scss";
import "../../src/App.css";
import { useNavigate } from "react-router-dom";

const Subpage = (props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {props.children}
      
    </div>
  );
};
export default Subpage;
