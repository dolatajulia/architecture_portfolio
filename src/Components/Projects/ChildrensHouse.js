import ProjectLayout from "./ProjectLayout";

//assets
import cover from "../../Assets/Projects/ChildrensHouse/cover.png";

const ChildrensHouse = () => {
  return (
    <ProjectLayout
      title="Children’s House"
      subtitle="Kaira Looro Architecture Competition 2022"
      cover={cover}
      team='Julia Dolata, Katarzyna Śliwka'
      year='2022'
      nextproject='/social_housing'
      description="Located in Baghere Village, south Senegal, the Children’s
  House presents itself as a simple construction, yet
  it is full of innovative solutions. The building’s structure
  is designed to protect the inhabitants from the harmful
  effects of weather conditions, but also to help solve local
  problems such as difficult access to pure drinking water,
  malnutrition, or lack of micronutrients. The project
  was created with the aspiration that the implemented
  improvements would positively influence the quality of
  life for children and contribute to their pursuit of a better
  future.
  The inner part of the building contains all the essential
  functions. With consideration for the nature of the spaces
  and the residents’ privacy, the areas have been classified
  into private and public zones. The exterior layer functions
  as a protective barrier for the interior, while its design
  allows for the integration of a water purification system
  within the building."
    />
  );
};
export default ChildrensHouse;
