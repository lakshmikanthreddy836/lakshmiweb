import React, { useEffect, useState } from "react";
import Title from "../../common-components/Title";
import GridTable from "./components/GridTable";
import Button from "../../common-components/Button";
import { FaDownload, FaEye, FaInfo, FaPen, FaPenAlt } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { RestaurantDetails } from "../../Services/RestaurantDetails";
import AnimateLoader from "../../common-components/AnimateLoader";
function Restaurant() {
  const [activeState, setActiveState] = useState("15");
  const tableData = [
    {
      id: 1,
      name: "Las Cruces International Airport",
      opening_time: "6/17/2023",
      closing_time: "4/18/2023",
      station: "Calabozo Airport",
      min_order: 42,
      item_no: "8",
      status: true,
      join_date: "6/11/2023",
      action: false,
    },
    {
      id: 2,
      name: "Kristiansund Airport (Kvernberget)",
      opening_time: "3/5/2023",
      closing_time: "12/4/2023",
      station: "Beatrice Municipal Airport",
      min_order: 74,
      item_no: "7",
      status: true,
      join_date: "6/17/2023",
      action: false,
    },
    {
      id: 3,
      name: "Everett-Stewart Regional Airport",
      opening_time: "8/29/2023",
      closing_time: "8/26/2023",
      station: "April Point Seaplane Base",
      min_order: 80,
      item_no: "8",
      status: false,
      join_date: "10/1/2023",
      action: false,
    },
    {
      id: 4,
      name: "JAGS McCartney International Airport",
      opening_time: "9/13/2023",
      closing_time: "11/6/2023",
      station: "Thornhill Air Base",
      min_order: 48,
      item_no: "9",
      status: true,
      join_date: "6/3/2023",
      action: false,
    },
    {
      id: 5,
      name: "Chiquimula Airport",
      opening_time: "7/10/2023",
      closing_time: "3/10/2023",
      station: "Quthing Airport",
      min_order: 60,
      item_no: "3",
      status: true,
      join_date: "10/9/2023",
      action: true,
    },
    {
      id: 6,
      name: "Geneina Airport",
      opening_time: "12/13/2023",
      closing_time: "11/23/2023",
      station: "General Francisco J. Mujica International Airport",
      min_order: 36,
      item_no: "4",
      status: true,
      join_date: "11/17/2023",
      action: true,
    },
    {
      id: 7,
      name: "Marana Regional Airport",
      opening_time: "5/25/2023",
      closing_time: "11/18/2023",
      station: "Tiksi Airport",
      min_order: 75,
      item_no: "5",
      status: false,
      join_date: "9/29/2023",
      action: true,
    },
    {
      id: 8,
      name: "Solovki Airport",
      opening_time: "9/27/2023",
      closing_time: "2/12/2023",
      station: "Addison Airport",
      min_order: 61,
      item_no: "6",
      status: true,
      join_date: "9/10/2023",
      action: false,
    },
    {
      id: 9,
      name: "Aalborg Airport",
      opening_time: "5/26/2023",
      closing_time: "5/30/2023",
      station: "Xingning Airport",
      min_order: 54,
      item_no: "7",
      status: true,
      join_date: "12/21/2023",
      action: false,
    },
    {
      id: 10,
      name: "German Olano Airport",
      opening_time: "12/20/2023",
      closing_time: "3/12/2023",
      station: "Wuvulu Island Airport",
      min_order: 24,
      item_no: "8",
      status: false,
      join_date: "10/8/2023",
      action: true,
    },
    {
      id: 11,
      name: "Fuvahmulah Airport",
      opening_time: "6/18/2023",
      closing_time: "10/11/2023",
      station: "Roanne-Renaison Airport",
      min_order: 61,
      item_no: "0",
      status: false,
      join_date: "6/9/2023",
      action: true,
    },
    {
      id: 12,
      name: "Kaédi Airport",
      opening_time: "1/6/2024",
      closing_time: "1/4/2024",
      station: "Rogue Valley International Medford Airport",
      min_order: 3,
      item_no: "7",
      status: true,
      join_date: "2/2/2024",
      action: false,
    },
  ];
  const [restaurantDetails, setRestaurantDetails] = useState();
  const [loading, setLoading] = useState(true);
  const fetchRestaurantDetails = async () => {
    const payload = {
      page: 0,
      limit: "",
      filter: "",
    };
    const response = await RestaurantDetails(payload);
    if (response?.data?.success) {
      setLoading(false);
      const restaurant_details = response?.data?.data;
      setRestaurantDetails(restaurant_details?.resturants);
      // setTotalTrainListCount(trainListArray?.totalCount);
    }
    // console.log("result is", result);
  };
  useEffect(() => {
    fetchRestaurantDetails();
  }, []);
  const dateTimeFormat = (dateTime) => {
    const dateString = dateTime;
    const date = new Date(dateString);
    // Get day, month, and year components
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear().toString();
    // Format the date as DD/MM/YYYY
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };
  console.log("restaurantDetails", restaurantDetails);
  return (
    <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
      <div className="overflow-y-auto p-3 overflow-visible h-fit">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4 text-black">
            Restaurant List
          </h2>
          <button className="bg-red-500 font-semibold h-8 text-white px-3 text-[15px] rounded-[5px]">
            Active Station {activeState}{" "}
          </button>
        </div>
        <div className="flex flex-row justify-between items-center mt-4 px-8">
          <div className="flex items-center gap-2 text-black">
            <p>Show</p>
            <div>
              <select
                id="pricingType"
                name="pricingType"
                className="mt-1 ml-2 px-1 h-8 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none  rounded-md text-[15px]"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <p>entries</p>
          </div>
          <div className="flex items-center">
            <p className="text-[15px] text-black">Search: </p>
            <input
              type="text"
              className="bg-white text-black pl-2 border-[1px] border-[#aaa] ml-1 h-8 focus:outline-none"
            />
          </div>
        </div>
        <div className="overflow-x-auto  w-full h-fit mt-4">
          <div className="flex flex-col w-fit h-fit px-8">
            <div className="flex w-fit border-b-[1px] border-[#aaa] h-[40px]">
              <div className="w-[50px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">id</p>
              </div>
              <div className="w-[250px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Name</p>
              </div>
              <div className="w-[130px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Opening Time</p>
              </div>
              <div className="w-[130px] flex items-center h-9 ">
                <p className="font-bold text-[15px] text-black">Closing Time</p>
              </div>
              <div className="w-[250px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Station</p>
              </div>
              <div className="w-[140px]  flex items-center h-9">
                <p className="font-bold text-[15px] text-black">
                  Min Order Value
                </p>
              </div>
              <div className="w-[100px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Item No</p>
              </div>
              <div className="w-[130px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Status</p>
              </div>
              <div className="w-[150px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Join Date</p>
              </div>
              <div className="w-[150px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Action</p>
              </div>
            </div>
            <div className="flex flex-col">
              {loading ? (
                <AnimateLoader count={3} />
              ) : (
                restaurantDetails?.map((data, index) => (
                  <div key = {data.resturant_id} className="flex w-fit  h-[50px] items-center border-b-[1px] border-[#aaa]">
                    <div className="w-[50px] flex items-center h-9">
                      <p className="text-[15px] text-black">{index + 1}</p>
                    </div>
                    <div className="w-[250px] flex items-center h-9">
                      <p className="text-[15px] text-black">
                        {data?.resturant_name}
                      </p>
                    </div>
                    <div className="w-[130px] flex items-center h-9">
                      <p className="text-[15px] text-black">
                        {data?.open_time}
                      </p>
                    </div>
                    <div className="w-[130px] flex items-center h-9 ">
                      <p className="text-[15px] text-black">
                        {data?.close_time}
                      </p>
                    </div>
                    <div className="w-[250px] flex items-center h-9">
                      <p className="text-[15px] text-black">
                        {data?.stationInfo?.station_name}
                      </p>
                    </div>
                    <div className="w-[140px]  flex items-center h-9">
                      <p className="text-[15px] text-black">
                        {data?.min_order_value}
                      </p>
                    </div>
                    <div className="w-[100px] flex items-center h-9">
                      <p className="text-[15px] text-black">
                        {data?.item_no ? data?.item_no : 20}
                      </p>
                    </div>
                    <div className="w-[130px] flex items-center h-9">
                      <p className="text-[15px] text-black">
                        {data?.status ? "Active" : "In Active"}
                      </p>
                    </div>
                    <div className="w-[150px] flex items-center h-9">
                      <p className="text-[15px] text-black">
                        {dateTimeFormat(data?.join_date)}
                      </p>
                    </div>
                    <div className="w-[150px] flex items-center h-9">
                      <div className="flex gap-2 flex-wrap text-black">
                        <button type="button" className="p-0">
                          <FaEye className="text-blue-500 text-lg" />
                        </button>
                        <button type="button" className="p-0">
                          <FaPenAlt className="text-blue-500 text-lg" />
                        </button>
                        <button type="button" className="p-0">
                          <FaDownload className="text-blue-500 text-lg" />
                        </button>
                        <button type="button" className="p-0">
                          <FaInfo className="text-blue-500 text-lg" />
                        </button>
                        <button type="button" className="p-0">
                          <TbToolsKitchen3 className="text-blue-500 text-lg" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
