import React from "react";
import GridTable from "./components/GridTable";
import Button from "../../common-components/Button";
import Title from "../../common-components/Title";
import { FaPlus } from "react-icons/fa";
import Input from "../../common-components/Input";

const FoodMenu = () => {
  return (
    <div className="bg-white pl-4">
      <div className="shadow-lg p-2 items-center">
        <Title title={"Food Menu"}>
          <Button className="bg-black text-white px-2 py-1.5 rounded-md flex items-center">
            <FaPlus />
            Add Item
          </Button>
        </Title>
      </div>
      <div className="flex items-center justify-center flex-1 gap-3 py-3">
        <div className="text-black text-sm mr-2">Search Food :</div>
        <Input placeholder="Enter Food Name" className="w-3/5" />
        <Button className="bg-red-600 px-3 p-1.5 text-white rounded-md">
          Search
        </Button>
      </div>
      <GridTable />
    </div>
  );
};

export default FoodMenu;
