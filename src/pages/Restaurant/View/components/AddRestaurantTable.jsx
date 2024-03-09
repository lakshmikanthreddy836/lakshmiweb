import { useEffect, useState } from "react";
import Paginate from "../../../../common-components/Paginate";
import axiosInstance from "../../../../api-config/axiosinstance";
import { useNavigate } from "react-router";

const AddRestaurant_Table = (props) => {
  const [foodMenu, setFoodMenu] = useState([]);
  const [totalFoodListCount, setTotalFoodListCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState();
  const [foodName, setFoodName] = useState();
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const rest_id = queryParams.get("res_id");
  console.log("rest_id", rest_id);

  const setData = props?.data2;
  console.log("category pass", setData);

  const fetchFoodMenuList = async (pageNumber, name, foodName, category) => {
    const response = await axiosInstance.get(`/getFoodMenu`, {
      params: {
        page: pageNumber - 1,
        limit: itemsPerPage,
        resturant_id: name,
        food_name: foodName,
        category_name: category,
      },
    });
    console.log("response", response);
    if (response?.data?.success) {
      setLoading(false);
      const foodMenuList = response?.data?.data;
      console.log("foodMenuList", foodMenuList);
      setFoodMenu(foodMenuList?.foods);
      setTotalFoodListCount(foodMenuList?.totalCount);
    }
  };
  const handlePageChange = (pageNumber) => {
    console.log("pageNumber", pageNumber);
    setCurrentPage(pageNumber);
    fetchFoodMenuList(pageNumber, rest_id, foodName, category);

    // console.log("Page changed to:", pageNumber);
  };
  useEffect(() => {
    fetchFoodMenuList(currentPage, rest_id, foodName, category);
  }, []);
  const totalPages = Math.ceil(totalFoodListCount / itemsPerPage);

  //search Filter
  const setSearchByFoodNameEvent = async (e) => {
    setFoodName(e.target.value);
    try {
      fetchFoodMenuList(1, rest_id, foodName, category);
    } catch (error) {
      console.error("Error While Geetting Train search", error);
    }
  };

  const setSearchByCategoryEvent = async (e) => {
    setCategory(e.target.value);
    try {
      fetchFoodMenuList(1, rest_id, foodName, category);
    } catch (error) {
      console.error("Error While Geetting Train search", error);
    }
  };

  const handleUpdate = async (data) => {
    console.log("update data", data);
    const formData = new FormData();
    formData.append("food_image", data?.image);
    formData.append("category_id", data?.category_id);
    formData.append("resturant_id", data?.resturant_id);
    formData.append("food_name", data?.food_name);
    formData.append("food_discription", data?.food_discription);
    formData.append("available_from", data?.available_from);
    formData.append("available_to", data?.available_to);
    formData.append("food_type", data?.food_type);
    formData.append("cost_price", data?.cost_price);
    formData.append("percentage_increase", data?.percentage_increase);
    formData.append("selling_price", data?.selling_price);
    console.log("Food Menu ", formData);
    try {
      const response = await upDateFood(formData);
      console.log("Food Menu Updated", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAddFood = () => {
    navigate(`/add-food?rest_id=${rest_id}`);
  };

  const importRestaurant = () => {
    navigate("/importRestaurant");
  };
  return (
    <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
      <div className=" flex justify-end items-center p-5">
        <p className="text-[14px]">Search By Food Name: </p>
        <input
          type="text"
          className="border-[1px] bg-white border-[#aaa] ml-2 h-7"
          onChange={(e) => setSearchByFoodNameEvent(e)}
        />
        <p className="text-[14px] ml-5">Search By Category: </p>
        <input
          type="text"
          className="border-[1px] bg-white border-[#aaa] ml-2 h-7"
          onChange={(e) => setSearchByCategoryEvent(e)}
        />

        <div className="ml-5">
          <button
            onClick={importRestaurant}
            className="bg-red-500 p-2 text-white"
          >
            Upload CVG
          </button>
        </div>
        <div className="ml-5">
          <button onClick={handleAddFood} className="bg-red-500 p-2 text-white">
            Add Food Menu
          </button>
        </div>
      </div>

      <div className="overflow-y-auto  overflow-visible h-fit">
        <div className="overflow-x-auto  w-full h-fit ">
          <div className="flex flex-col w-fit h-fit px-8">
            <div className="flex w-fit border-b-[1px] border-[#aaa] h-[40px]">
              <div className="w-[50px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">#</p>
              </div>
              <div className="w-[130px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">@ Item</p>
              </div>
              <div className="w-[130px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Name</p>
              </div>
              <div className="w-[130px] flex items-center h-9 ">
                <p className="font-bold text-[15px] text-black">Type</p>
              </div>
              <div className="w-[250px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">New Name</p>
              </div>
              <div className="w-[140px]  flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Category</p>
              </div>
              <div className="w-[220px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Description</p>
              </div>
              <div className="w-[100px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Cost Price</p>
              </div>
              <div className="w-[100px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">
                  Percentage increase
                </p>
              </div>
              <div className="w-[100px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">
                  Selling price
                </p>
              </div>
              <div className="w-[150px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Update</p>
              </div>
              <div className="w-[150px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">X</p>
              </div>
            </div>
            <div className="flex flex-col">
              {foodMenu?.map((data, index) => (
                <div
                  key={index}
                  className="flex w-fit  h-[50px] items-center border-b-[1px] border-[#aaa]"
                >
                  <div className="w-[50px] flex items-center h-9">
                    <p className="text-[15px] text-black">{index + 1}</p>
                  </div>
                  <div className="w-[130px] flex items-center h-9">
                    <input type="checkbox"></input>
                    <img src={data?.image} alt="" />
                  </div>
                  <div className="w-[130px] flex items-center h-9">
                    <p className="text-[15px] text-black">{data?.food_name}</p>
                  </div>
                  <div className="w-[130px] flex items-center h-9 ">
                    <button className="text-[15px] p-2 bg-green-500 rounded-full "></button>
                  </div>
                  <div className="w-[250px] flex items-center h-9">
                    <input
                      className="border p-1"
                      defaultValue={data?.food_name}
                    />
                  </div>
                  <div className="w-[140px]  flex items-center h-9">
                    <div>
                      <select
                        defaultValue={data?.categoryInfo?.category_name}
                        id="pricingType"
                        name="pricingType"
                        className="mt-1 ml-2 px-1 pr-10 h-8 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none text-[15px]"
                      >
                        {setData?.map((item, index) => (
                          <option key={index} value={item?.id}>
                            {item?.category_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="w-[220px]  flex items-center h-10">
                    <input
                      className="border p-1 m-2"
                      defaultValue={data?.food_discription}
                    />
                  </div>
                  <div className="w-[100px] flex items-center h-9">
                    <input
                      className="border p-1 m-2"
                      defaultValue={data?.cost_price}
                    />
                  </div>
                  <div className="w-[100px] flex items-center h-9">
                    <input
                      className="border p-1 m-2"
                      defaultValue={data?.percentage_increase}
                    />
                  </div>
                  <div className="w-[100px] flex items-center h-9">
                    <input
                      className="border p-1 m-2"
                      defaultValue={data?.selling_price}
                    />
                  </div>
                  <div className="w-[150px] flex items-center h-9">
                    <div className="flex gap-2 flex-wrap text-black">
                      <button
                        onClick={() => handleUpdate(data)}
                        type="button"
                        className=" bg-green-500 p-2 text-white rounded"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                  <div className="w-[100px] flex items-center h-9">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash text-red-500"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-fit flex justify-between w-full items-center">
          <div className="flex gap-1 items-center">
            <p className="font-semibold text-[15px] text-black">
              Total Records:
            </p>
            <p className="text-[15px]">{totalFoodListCount}</p>
          </div>
          <div>
            <Paginate
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRestaurant_Table;
