import { useEffect, useState } from "react";
import { FaDownload, FaEye, FaInfo, FaPenAlt } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import AnimateLoader from "../../common-components/AnimateLoader";
import { RestaurantDetails } from "../../Services/RestaurantDetails";
function Restaurant() {
  const [activeState, setActiveState] = useState("15");
  const navigate = useNavigate();

  const handleRestaurantDetails = (rest_id) => {
    // navigate("/view-resturant");
    navigate(`/view-resturant?res_id=${rest_id}`);
  };
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
      console.log("restaurantDetails", restaurantDetails);
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
                  <div
                    key={data.resturant_id}
                    className="flex w-fit  h-[50px] items-center border-b-[1px] border-[#aaa]"
                  >
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
                        <button
                          onClick={() =>
                            handleRestaurantDetails(data?.resturant_id)
                          }
                          type="button"
                          className="p-0"
                        >
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
