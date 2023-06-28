import { Routes, Route, useLocation } from "react-router-dom";

//compnents
import Website from "./Components/Website";
import Contactme from "./Components/Contactme";
import ChildrensHouse from "./Components/Projects/ChildrensHouse";
import ClimbingCenter from "./Components/Projects/ClimbingCenter";
import Coliving from "./Components/Projects/Coliving";
import RakosPatak from "./Components/Projects/RakosPatak";
import SocialHousing from "./Components/Projects/SocialHousing";

//styling
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routes location={location} key={location.key}>
        <Route exact path="" element={<Website />} />
        <Route path="/contactme" element={<Contactme />} />
        <Route path="/childrenshouse" element={<ChildrensHouse />} />
        <Route path="/climbingcenter" element={<ClimbingCenter />} />
        <Route path="/coliving" element={<Coliving />} />
        <Route path="/rakospatak" element={<RakosPatak />} />
        <Route path="/socialhousing" element={<SocialHousing />} />
      </Routes>
    </div>
  );
}

export default App;
