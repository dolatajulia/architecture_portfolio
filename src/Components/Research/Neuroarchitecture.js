import ResearchLayout from "./ResearchLayout";

//assets
import img from "../../Assets/Research/stalownik.jpeg";

const Neuroarchitecture = () => {
  return (
    <ResearchLayout
      title="Neuroarchitecture and modernism"
      subtitle="Neuroarchitecture in the adaptation of the modernist hospital Stalownik building ruins"
      comment="Master Thesis at the Faculty of Architecture, Poznan University of Technology, Poznan, Poland"
      keywords="Neuroarchitecture, Stalownik, Poland, Bielsko-Biała modernism, adaptation, eclogical approach, hospital, ruins, social issues"
      link="https://drive.google.com/file/d/18CZWrgaPC7UotXAMb_GavnAWkbP_gRfv/view?usp=sharing"
      abstract="The Master Thesis is in progress."
      image={img}
      visibility="hidden"
    />
  );
};
export default Neuroarchitecture;

