import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./TabSelector";
import AddRestaurant_Table from "./AddRestaurantTable";

const Add_Restaurant_Tab = () => {
  const [selectedTab, setSelectedTab] = useTabs([
    "storeMenu",
    "wallet",
    "deliveryBoys",
    "storeActivity",
  ]);
  return (
    <>
      <nav className="flex border-b border-gray-300 w-full">
        <TabSelector
          isActive={selectedTab === "storeMenu"}
          onClick={() => setSelectedTab("storeMenu")}
        >
          Store Menu Item (32)
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "wallet"}
          onClick={() => setSelectedTab("wallet")}
        >
          Wallet Transaction
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "deliveryBoys"}
          onClick={() => setSelectedTab("deliveryBoys")}
        >
          Delivery Boys
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "storeActivity"}
          onClick={() => setSelectedTab("storeActivity")}
        >
          Store Activities
        </TabSelector>
      </nav>
      <div className="p-2">
        <TabPanel hidden={selectedTab !== "storeMenu"}>
          <AddRestaurant_Table />
        </TabPanel>
        <TabPanel hidden={selectedTab !== "wallet"}>
          Wallet Transaction
        </TabPanel>
        <TabPanel hidden={selectedTab !== "deliveryBoys"}>
          Delivery Boys
        </TabPanel>
        <TabPanel hidden={selectedTab !== "storeActivity"}>
          Store Activities
        </TabPanel>
      </div>
    </>
  );
};

export default Add_Restaurant_Tab;
