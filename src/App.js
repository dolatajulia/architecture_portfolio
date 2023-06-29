import { Routes, Route, useLocation } from "react-router-dom";

//compnents
import Website from "./Components/Website";
import Contactme from "./Components/Contactme";
import ChildrensHouse from "./Components/Projects/ChildrensHouse";
import ClimbingCenter from "./Components/Projects/ClimbingCenter";
import Coliving from "./Components/Projects/Coliving";
import RakosPatak from "./Components/Projects/RakosPatak";
import SocialHousing from "./Components/Projects/SocialHousing";
import ModernistTransformations from "./Components/Research/ModernistTransformations";
import Communities from "./Components/Research/Communities";
import Neuroarchitecture from "./Components/Research/Neuroarchitecture";
import ScrollToTop from "./Components/ScrollToTop";

//styling
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <ScrollToTop />
      <Routes location={location} key={location.key}>
        <Route exact path="" element={<Website />} />
        <Route path="/contactme" element={<Contactme />} />
        <Route path="/childrens_house" element={<ChildrensHouse />} />
        <Route path="/climbing_center" element={<ClimbingCenter />} />
        <Route path="/co_living" element={<Coliving />} />
        <Route path="/rakos_patak" element={<RakosPatak />} />
        <Route path="/social_housing" element={<SocialHousing />} />
        <Route
          path="/modernist_transformations"
          element={<ModernistTransformations />}
        />
        <Route
          path="/communities_and_city_structure"
          element={<Communities />}
        />
        <Route
          path="/neuroarchitecture_and_modernism"
          element={<Neuroarchitecture />}
        />
      </Routes>
    </div>
  );
}

export default App;
