import TabComponent from "../components/TabComponent.jsx";
import MainContainer from "../components/Containers/MainContainer.jsx";

const CategoriesRoots = () => {
  const tabs = [
    {
      name: "All",
      link: "results",
    },
    {
      name: "Create",
      link: "create",
    },
  ];

  return (
    <MainContainer>
      <TabComponent Tabs={tabs} baseUrl="categories" />
    </MainContainer>
  );
};

export default CategoriesRoots;
