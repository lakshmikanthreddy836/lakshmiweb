// import React from "react";
import Button from "../../../common-components/Button";
import { useState } from "react";
import axiosInstance from "../../../api-config/axiosinstance";

const AddTrainForm = () => {

  const [value, setValue] = useState({ train_name: '', train_number: '' });

  const handleChangeValue = (e) => {
    const trainValue = e.target.value;
    setValue({ ...value, [e.target.name]: trainValue });
  }

  const handleSubmitTrain = async (event) => {
    event.preventDefault();
    try{
      const trainDetail = {
        train_name : value.train_name,
        train_number: value.train_number
      }
      const response = await  axiosInstance.post(`/saveAndUpdateTrain`,trainDetail);
      console.log(response);
    }catch(error){
      console.log(error);
    } 
  };
  return (
    <div className="w-full h-fit addtrainboxshadow mt-10 mx-[2px] flex flex-col gap-3 p-2">
      <div className="flex items-center justify-center">
        <b className="text-[1.5em]">
          Add New Train
        </b>
      </div>
      <div className="flex flex-row justify-between w-full gap-3">
        <div className="flex flex-col w-full gap-2">
          <p className="text-[15px] font-medium">Train Name</p>
          <input
            type="text"
            name="train_name"
            value={value.train_name}
            className="w-full h-8 border-[1px] bg-white border-[#aaa] rounded-[4px]"
            onChange={handleChangeValue}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <p className="text-[15px] font-medium">Train Number</p>
          <input
            type="text"
            name="train_number"
            value={value.train_number}
            className="w-full h-8 border-[1px] bg-white border-[#aaa] rounded-[4px]"
            onChange={handleChangeValue}
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
        <Button
          label={"Add Now"}
          style={
            "bg-red-500 h-10 w-[100px] text-white text-[15px] rounded-[5px] font-medium hover:bg-red-700"
          }
          handleClick={handleSubmitTrain}
        />
      </div>
    </div>
  );
};

export default AddTrainForm;
