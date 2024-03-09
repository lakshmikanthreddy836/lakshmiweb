// import React from 'react'
import { useEffect, useState } from "react";
import Button from "../../../common-components/Button";
import SelectOption from "../../../common-components/SelectOption";
import {
  categoryService,
  upDateFood,
} from "../../Restaurant/services/restaurantservice";
import { useLocation } from "react-router-dom";

const AddFood = () => {
  const [imageFile, setImageFile] = useState();
  const [category, setCategory] = useState();
  const [selectedCategory, setSelectedcategory] = useState();
  const [formData, setFormData] = useState(new FormData());

  const handleInputChange = (event) => {
    console.log("FormData", event);
    const { name, value } = event.target;
    formData.set(name, value);
    console.log("FormData", formData);
  };

  //   const [value, setValue] = useState({
  //     category_id: "",
  //     resturant_id: "",
  //     food_name: "",
  //     food_discription: "",
  //     available_from: "",
  //     available_to: "",
  //     food_type: "",
  //     cost_price: "",
  //     percentage_increase: "",
  //     selling_price: "",
  //   });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const rest_id = queryParams.get("res_id");
  console.log("rest_id", rest_id);

  //   const handleChangeValue = (e) => {
  //     const foodValue = e.target.value;
  //     setValue({ ...value, [e.target.name]: foodValue });
  //     console.log("value", value);
  //   };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    formData.set("food_image", file);
  };

  const getCategory = async () => {
    try {
      const response = await categoryService();
      const category = response?.data?.data;
      setCategory(category?.categories);

      console.log("setCategory info response", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getCategory();
  }, []);

  const Add_Food_Menu = async () => {
    const formData = new FormData();
    formData.append("food_image", "ksdhfksfg");
    formData.append("category_id", "ksdhfksfg");
    formData.append("resturant_id", "ksdhfksfg");
    formData.append("food_name", "ksdhfksfg");
    formData.append("food_discription", "ksdhfksfg");
    formData.append("available_from", "ksdhfksfg");
    formData.append("available_to", "ksdhfksfg");
    formData.append("food_type", "ksdhfksfg");
    formData.append("cost_price", "ksdhfksfg");
    formData.append("percentage_increase", "ksdhfksfg");
    formData.append("selling_price", "ksdhfksfg");

    console.log("Food Form data", formData);

    // try {
    //   const response = await upDateFood(formData);
    //   console.log("Food Menu Updated", response);
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
  };

  const handleCategory = (event) => {
    console.log("Selected Category", event.target.value);
    setSelectedcategory(event.target.value);
  };

  const uploadImageFile = async (e) => {
    console.log("file ", e.target.files[0]);

    try {
      const file = e.target.files[0];
      setImageFile(file);
    } catch (error) {
      console.error("habdle scrap csv", error);
    }
  };

  const FoodType = [
    { id: 1, label: "Biryani", value: "Biryani" },

    { id: 2, label: "Dal", value: "Dal" },

    { id: 3, label: "Rice", value: "Rice" },
  ];
  const PaymentMode = [
    { id: 1, label: "veg", value: "veg" },

    { id: 2, label: "non-veg", value: "non-veg" },
  ];
  return (
    <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
      <div className="overflow-y-auto p-3 overflow-visible h-fit">
        <h2 className="text-2xl font-bold mb-4 text-black">Add Food</h2>
        <form className="border shadow-[1px_29px_26px_-11px_rgba(189,198,203,0.59)]">
          <div className="text-center text-2xl font-bold p-3">
            <label>Add New Food</label>
          </div>
          <div className="p-4">
            <div className="columns-2">
              <div>
                <label>Food Name</label>
                <div>
                  <input
                    name="food_name"
                    value={formData.food_name}
                    onChange={handleInputChange}
                    type="text"
                    className="border rounded p-1 w-[100%] shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2"
                  />
                </div>
              </div>
              <div>
                <label>Food Type</label>
                <div>
                  <SelectOption
                    name="food_type"
                    value={formData.food_type}
                    onChange={handleInputChange}
                    label={"select"}
                    options={FoodType}
                    style="w-[100%] mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <label>Food Description</label>
                <div>
                  <textarea
                    name="food_discription"
                    value={formData.food_discription}
                    onChange={handleInputChange}
                    className="border rounded p-1 w-[100%] shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2"
                  />
                </div>
              </div>
            </div>
            <div className="columns-2">
              <div>
                <label>Available From Time</label>
                <div>
                  <input
                    name="available_from"
                    value={formData.available_from}
                    onChange={handleInputChange}
                    type="time"
                    className="border rounded p-1 w-[100%] shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2"
                  />
                </div>
              </div>
              <div>
                <label>To Time</label>
                <div>
                  <input
                    name="available_to"
                    value={formData.available_to}
                    onChange={handleInputChange}
                    type="time"
                    className="border rounded p-1 w-[100%] shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2"
                  />
                </div>
              </div>
            </div>
            <div className="columns-2">
              <div>
                <label>Select Category</label>
                <div>
                  {/* <SelectOption
                    name="food_type"
                    value={value.food_type}
                    onChange={handleChangeValue}
                    label={"select"}
                    options={FoodType}
                    style="w-[100%] mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"
                  /> */}
                  <select
                    onChange={handleInputChange}
                    id="pricingType"
                    name="pricingType"
                    className="mt-1 ml-2 px-1 pr-10 h-8 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none text-[15px]"
                  >
                    {category?.map((item, index) => (
                      <option key={index} value={item?.id}>
                        {item?.category_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label>Product Image</label>
                <div>
                  <input
                    name="train_name"
                    value={formData.train_name}
                    onChange={handleFileChange}
                    type="file"
                    className="border rounded p-1 shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button
                // onClick={Add_Food_Menu()}
                handleClick={() => Add_Food_Menu()}
                label={"Add Now"}
                style="text-white py-2 px-6 bg-[#ff0018]"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
