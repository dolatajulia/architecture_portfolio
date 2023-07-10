import ResearchLayout from "./ResearchLayout";

//assets
import img from "../../Assets/Research/transformations.jpg";

const ModernistTransformations = () => {
  return (
    <ResearchLayout
      title="Modernist Transformations"
      subtitle="Modernist transformations of existing residential areas, features of modernism in urban plans"
      comment="Written for Periodica Polytechnica Architecture, Department of Urban Planning and Design, Faculty of Architecture, Budapest University of Technology and
      Economics, Budapest, Hungary"
      keywords="modernism, modernist transformation, Zeilenbau, Le Corbusier, Josef Llouis Sert, Paris, Barcelona, redent, solar orientation, plan
      Voisin, GCATSPAC, urban planning"
      link='https://drive.google.com/file/d/1UEX3T_4XSCNQ8N8MInYYt6gpaTR5uCwg/view?usp=sharing'
      abstract="This article aims to analyze the modernist transformations of residential areas with the focus on Zeilenbau and planned
      transformations of Paris (by Le Corbusier) and Barcelona (by Josef Llouis Sert). It explains the XIX-XX century’s housing
      architecture underlining the issues existing at the time such as improper organization, overcrowding, hygiene and health
      complications. These problems motivated architects and urbanists to implement a fresh approach and come up with
      revolutionary ideas. The description of discussed transformation is followed by an analysis of their advantages and
      disadvantages and a comparison highlighting the reasons for success or failure. Moreover, the article investigates the effects and
      influence of realized modernist plans."
      image={img}
      nextproject="/communities_and_city_structure"
    />
  );
};
export default ModernistTransformations;
