// import React from 'react'
import { useEffect, useState } from "react";
import Button from "../../../common-components/Button";
import SelectOption from "../../../common-components/SelectOption";
import {
  categoryService,
  upDateFood,
} from "../../Restaurant/services/restaurantservice";
import { useLocation } from "react-router-dom";
import { FoodType, calculatePercentage } from "./utils";
import ShowErrorMessages from "../../../alert-messages/ShowErrorMessages";
import ShowSucessmessages from "../../../alert-messages/ShowSucessmessages";

const AddFood = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const rest_id = queryParams.get("rest_id");

  const [category, setCategory] = useState();
  const [addFoodData, setAddFoodData] = useState({
    category_id: "",
    resturant_id: rest_id,
    food_name: "",
    food_discription: "",
    available_from: "",
    available_to: "",
    food_type: "",
    cost_price: "",
    percentage_increase: "",
    selling_price: "",
  });

  console.log(addFoodData, "> addFoodData");
  useEffect(() => {
    window.scrollTo(0, 0);
    getCategory();
  }, []);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let otherVal = {};
    let updatedData = { ...addFoodData }
    if (name === "percentage_increase") {
      let sp = ((parseInt(addFoodData.cost_price || 0) * parseInt(value)) / 100) + parseInt(addFoodData.cost_price || 0);
      otherVal = { selling_price: parseInt(sp) }
    }
    if (name === "selling_price") {
      let pi = calculatePercentage(addFoodData.cost_price, value)
      otherVal = { percentage_increase: parseInt(pi) }
    }


    updatedData = { ...updatedData, [name]: value, resturant_id: rest_id, ...(otherVal) }

    setAddFoodData(updatedData)
  };

  const uploadImageFile = async (e) => {
    try {
      const file = e.target.files[0];
      setAddFoodData((prev) => ({ ...prev, food_image: file }))

    } catch (error) {
      console.error("habdle scrap csv", error);
    }
  };


  const getCategory = async () => {
    try {
      const response = await categoryService();
      const category = response?.data?.data;
      setCategory(category?.categories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const Add_Food_Menu = async () => {
    const formData = new FormData();
    formData.append("food_image", addFoodData.food_image);
    formData.append("category_id", addFoodData.category_id);
    formData.append("resturant_id", addFoodData.resturant_id || rest_id);
    formData.append("food_name", addFoodData.food_name);
    formData.append("food_discription", addFoodData.food_discription);
    formData.append("available_from", addFoodData.available_from);
    formData.append("available_to", addFoodData.available_to);
    formData.append("food_type", addFoodData.food_type);
    formData.append("cost_price", addFoodData.cost_price);
    formData.append("percentage_increase", addFoodData.percentage_increase);
    formData.append("selling_price", addFoodData.selling_price);

    try {
      const response = await upDateFood(formData);
      if(response?.data?.success){
        ShowSucessmessages(response?.data?.message)
      }
    } catch (error) {
      let errMessage = error?.response?.data?.error?._message || ""
      ShowErrorMessages(errMessage)
    }
  };


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
                    value={addFoodData.food_name}
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
                    value={addFoodData.food_type}
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
                    value={addFoodData.food_discription}
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
                    value={addFoodData.available_from}
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
                    value={addFoodData.available_to}
                    onChange={handleInputChange}
                    type="time"
                    className="border rounded p-1 w-[100%] shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2"
                  />
                </div>
              </div>
            </div>
            <div className="columns-2">
              <div>
                <label>Cost Price</label>
                <div>
                  <input
                    name="cost_price"
                    value={addFoodData.cost_price}
                    onChange={handleInputChange}
                    type="number"
                    min="0"
                    pattern="[0-9]*"
                    className="border rounded p-1 w-[100%] shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2"
                  />
                </div>
              </div>
              <div>
                <label>% Increment</label>
                <div>
                  <input
                    name="percentage_increase"
                    value={addFoodData.percentage_increase}
                    onChange={handleInputChange}
                    type="number"
                    min="0"
                    pattern="[0-9]*"
                    className="border rounded p-1 w-[100%] shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2"
                  />
                </div>
              </div>
            </div>
            <div className="columns-2">
              <div>
                <label>Selling Price</label>
                <div>
                  <input
                    name="selling_price"
                    min="0"
                    pattern="[0-9]*"
                    value={addFoodData.selling_price}
                    onChange={handleInputChange}
                    type="number"
                    className="border rounded p-1 w-[100%] shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2"
                  />
                </div>
              </div>
              <div>
                <label>Select Category</label>
                <div>
                  {/* <SelectOption
                    name="category_id"
                    value={addFoodData.category_id}
                    onChange={handleInputChange}
                    label={"select"}
                    options={category || []}
                    style="w-[100%] mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"
                  /> */}
                  <select
                    onChange={handleInputChange}
                    id="category_id"
                    value={addFoodData.category_id}
                    name="category_id"
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
            </div>
            <div className="">
              <div>
                <label>Product Image</label>
                <div>
                  <input
                    name="train_name"
                    value={addFoodData.train_name}
                    onChange={uploadImageFile}
                    type="file"
                    className="border rounded p-1 shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button
                handleClick={Add_Food_Menu}
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
