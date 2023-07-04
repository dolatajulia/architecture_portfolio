import ProjectLayout from "./ProjectLayout";

//assets
import cover from "../../Assets/Projects/CoLiving/cover.jpg";

const Coliving = () => {
  return (
    <ProjectLayout
      title="CO-LIVING
      FOR THE
      ELDERLY"
      subtitle="Bachelor Thesis at Poznan
      University of Technology
      Faculty of Architecture"
      cover={cover}
      team="Julia Dolata, Katarzyna Śliwka"
      year="2022"
      nextproject="/rakos_patak"
      description="The BSc Thesis includes a project of a residential-service
      building located in Poznań, Jeżyce district. It incorporates
      conceptual, construction, and structural design.
      The project aims to address the contemporary social
      issues prevalent in our society, such as loneliness and
      isolation, which have been amplified by the recent pandemic
      circumstances. The design prioritizes the needs
      of solitary individuals, particularly the elderly, who constitute
      a social group deserving of special consideration
      and support.
      Due to its unique character, the building stands out as
      an innovative element of the urban fabric. The created
      structure fits into the frontage along the street since it is
      inspired by the local context. Moreover, with its modern
      form, it invites people to enter the diverse green space of
      the courtyard through the dynamic opening in elevation.
      It aims to introduce a fresh perspective and innovative
      solutions that are infrequently employed in the realm of
      Polish housing."
    />
  );
};
export default Coliving;
