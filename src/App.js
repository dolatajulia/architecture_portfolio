import { Routes, Route, useLocation } from "react-router-dom";

//compnents
import Website from "./Components/Website";
import Contactme from "./Components/Contactme";

//styling
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routes location={location} key={location.key}>
        <Route exact path="" element={<Website />} />
        <Route path="/contactme" element={<Contactme />} />
      </Routes>
    </div>
  );
}

export default App;
