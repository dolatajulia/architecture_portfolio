import { Routes, Route, useLocation } from "react-router-dom";

//compnents
import Homepage from "./Components/Homepage";
import Aboutme from "./Components/Aboutme";
import Projects from "./Components/Projects";
import Gallery from "./Components/Gallery";
import Contactme from "./Components/Contactme";

//styling
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routes location={location} key={location.key}>
        <Route exact path="" element={<Homepage />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactme" element={<Contactme />} />
      </Routes>
    </div>
  );
}

export default App;
