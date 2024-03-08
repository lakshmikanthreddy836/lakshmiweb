import { useEffect, useState } from "react";
import RestaurantFirstCompoents from "./components/RestaurantFirstCompoents";
import Add_Restaurant_Tab from "./components/TabViewAddRestaurantTable";
import { getResturantInfoService } from "../services/restaurantservice";

const ViewResturant = () => {
  const [restaurantInfo, setRestaurantInfo] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
    getRestaurant();
  }, []);
  const getRestaurant = async () => {
    try {
      const response = await getResturantInfoService("ttiU58");
      setRestaurantInfo(response?.data);
      console.log("restaurant info response", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <div className="bg-white pl-4 h-full overflow-y-auto overflow-x-auto w-full">
        <div className="items-center text-start font-bold p-2">
          View Resturant
        </div>
        <div>
          <RestaurantFirstCompoents data={restaurantInfo} />
          <div className="bg-white pl-4 h-full w-full overflow-x-auto mt-10">
            <Add_Restaurant_Tab />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewResturant;
