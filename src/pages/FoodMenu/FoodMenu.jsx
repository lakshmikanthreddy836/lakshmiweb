// import React from "react";
import GridTable from "./components/GridTable";
import Button from "../../common-components/Button";
import Title from "../../common-components/Title";
// import { FaPlus } from "react-icons/fa";
import Input from "../../common-components/Input";

const FoodMenu = () => {
  return (
    <div className="bg-white p-4">
      <div className="shadow-[0_12px_23px__rgba(198,_202,_205,_0.7)] p-1 items-center mt-2">
        <Title title={"Food Menu"}>
          <div>
            {/* <FaPlus className="size='1.2rem'"/> */}
            <Button label='+ Add Item' className="rounded-none text-white px-2 py-2 bg-[#34334a] hover:bg-[#34334a]/100 focus:ring-2 focus:outline-none focus:ring-[#34334a]/60 font-medium text-center inline-flex items-center dark:focus:ring-[#34334a]/60" />
          </div>
        </Title>
      </div>
      <div className="flex items-center justify-center flex-1 gap-3 py-3">
        <div className="text-black text-sm mr-2">Search Food :</div>
        <Input placeholder="Enter Food Name" className="w-3/5" />
        <Button label='Search' className="bg-red-500 px-3 p-1.5 text-white hover:bg-red-600 focus:outline-none">
        </Button>
      </div>
      <GridTable />
    </div>
  );
};

export default FoodMenu;
