import { useEffect, useState } from "react";
import RestaurantFirstCompoents from "./components/RestaurantFirstCompoents";
import Add_Restaurant_Tab from "./components/TabViewAddRestaurantTable";
import { getResturantInfoService } from "../services/restaurantservice";
import { useLocation } from "react-router";

const ViewResturant = () => {
  const [restaurantInfo, setRestaurantInfo] = useState();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const rest_id = queryParams.get("res_id");

  useEffect(() => {
    window.scrollTo(0, 0);
    getRestaurant();
  }, []);
  
  const getRestaurant = async () => {
    try {
      const response = await getResturantInfoService(rest_id);
      setRestaurantInfo(response?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const dataPass = {
  //   rest_data: restaurantInfo,
  //   res_id: rest_id,
  // };
  return (
    <>
      <div className="bg-white pl-4 h-full overflow-y-auto overflow-x-auto w-full">
        <div className="items-center text-start font-bold p-2">
          View Resturant
        </div>
        <div>
          <RestaurantFirstCompoents data={restaurantInfo} data2={rest_id} />
          <div className="bg-white pl-4 h-full w-full overflow-x-auto mt-10">
            <Add_Restaurant_Tab />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewResturant;
