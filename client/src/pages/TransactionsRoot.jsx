import TabComponent from "../components/TabComponent.jsx";
import MainContainer from "../components/Containers/MainContainer.jsx";

const TransactionsRoot = () => {
  const tabs = [
    {
      name: "Create",
      link: "create",
    },

    {
      name: "Delete",
      link: "delete",
    },
  ];

  return (
    <MainContainer>
      <TabComponent Tabs={tabs} baseUrl="transactions" />
    </MainContainer>
  );
};

export default TransactionsRoot;
