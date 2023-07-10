import ResearchLayout from "./ResearchLayout";

//assets
import img from "../../Assets/Research/communitiesin.jpg";

const Communities = () => {
  return (
    <ResearchLayout
      title="Communities and city structure"
      subtitle="The development of Warsaw after World War II in the context of urban changes and the
      emergence of gated communities"
      comment="Written for Periodica Polytechnica Architecture, Department for History of Architecture and of Monuments, Faculty of Architecture, Budapest University of Technology and
      Economics, Budapest, Hungary"
      keywords="Warsaw, Poland, gated community, city structure, urban planning"
      link="https://drive.google.com/file/d/18CZWrgaPC7UotXAMb_GavnAWkbP_gRfv/view?usp=sharing"
      abstract="The aim of this article is to investigate and explain the phenomenon of gated communities. The case of Warsaw is used as an
      example of a city that had been terribly demolished during the Second World War and its structure has been in the building stage
      since then. Gated communities are a significant element of the new city form, which has been planned according to the current
      needs of society. The number of this type of residential estate is increasing very quickly and absorbing more and more city areas. As
      a result, public space is being fragmented and replaced by semi-private space. Furthermore, the negative sociological consequences
      can be observed. Moreover, one of the major aims of this article is to create a comparison of the pre-war and current structure of
      the city, with special regard to the locations of gated communities and usage of the semi-private space."
      image={img}
      nextproject="/neuroarchitecture_and_modernism"

    />
  );
};
export default Communities;
