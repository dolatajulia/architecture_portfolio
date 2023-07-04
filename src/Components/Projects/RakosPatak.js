import ProjectLayout from "./ProjectLayout";

//assets
import cover from "../../Assets/Projects/RakosPatak/coverscreen.png";

const RakosPatak = () => {
  return (
    <ProjectLayout
      title="Rakos Patak"
      subtitle="Bike Square"
      cover={cover}
      team="Julia Dolata, Eva Le Bascond"
      year="2021"
      nextproject="/childrens_house"
      description="Bike Square is an innovative project situated in close
      proximity to Budapest, adjacent to the picturesque bike
      line along Rakos Patak. Designed as a temporary wooden
      modular structure, this unique development offers
      versatility through its potential for reuse in different locations.
      The project boasts a thoughtful design, featuring a blend
      of open modules for communal spaces, activities, and
      communication. Alongside dedicated modules transformed
      into cozy bedrooms and safe indoor bike lockers,
      catering to the needs of bikers seeking an overnight stay.
      One of Bike Square’s remarkable advantages lies in its
      close proximity to Budapest, making it an ideal base for
      sightseeing ventures. Its unique location amidst nature
      provides a tranquil environment, perfect for relaxation
      and recreational activities."
    />
  );
};
export default RakosPatak;
