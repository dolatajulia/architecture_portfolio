import ProjectLayout from "./ProjectLayout";

//assets
import cover from "../../Assets/Projects/SocialHousing/coversocial.png";

const SocialHousing = () => {
  return (
    <ProjectLayout
      title="Social Housing in Milan"
      subtitle="Kaira Looro Architecture Competition 2022"
      cover={cover}
      team="Julia Dolata, Katarzyna Śliwka, Zuzanna Cywińska, Gabriela Jaszewska"
      year="2023"
      nextproject="/climbing_center"
      description="Presented Social Housing project in Milan, situated adjacent
      to the renowned Arena Romana, offers a compelling
      solution for urban living in the city center, Comprising
      three distinct buildings, each structure caters to different
      resident profiles, ensuring a diverse and inclusive community.
      The building prominently positioned along the
      street, is tailored to accommodate students, providing
      a vibrant and conducive environment for their needs.
      The two remaining buildings, concealed from the street,
      are dedicated to families, offering privacy and tranquility.
      Recognizing the significance of Arena Romana as a
      tourist attraction, the project incorporates ground-floor
      amenities in the first building to cater to the needs of
      visitors. The second building focuses on providing additional
      services for families, ensuring their convenience
      and comfort. The spatial arrangement of the buildings is
      thoughtfully designed to facilitate pedestrian flow, aligning
      with the bustling city center of Milan. This promotes a
      lively and engaging streetscape, enhancing connectivity
      and promoting a vibrant urban atmosphere."
    />
  );
};
export default SocialHousing;
