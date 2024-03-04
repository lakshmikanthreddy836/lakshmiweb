import React from "react";
import RestaurantFirstCompoents from "./components/RestaurantFirstCompoents";

const ViewResturant = () => {
  return (
    <div className="bg-white pl-4 h-full overflow-y-auto">
      <div className="text-3xl mx-3 my-4">View Resturant</div>
      <div>
        <RestaurantFirstCompoents />
      </div>
    </div>
  );
};

export default ViewResturant;
