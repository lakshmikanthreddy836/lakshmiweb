import React from "react";
import RestaurantFirstCompoents from "./components/RestaurantFirstCompoents";
import AddRestaurant_Table from "./components/AddRestaurantTable";
import Add_Restaurant_Tab from "./components/TabViewAddRestaurantTable";

const ViewResturant = () => {
  return (
    <div className="bg-white pl-4 h-full overflow-y-auto">
      <div className="items-center text-start font-bold p-2">
        View Resturant
      </div>
      <div>
        <RestaurantFirstCompoents />
        <div className="bg-white pl-4 h-full overflow-y-auto mt-10">
          <Add_Restaurant_Tab />
        </div>
      </div>
    </div>
  );
};

export default ViewResturant;
