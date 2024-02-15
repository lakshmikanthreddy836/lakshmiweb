import React from "react";
import Button from "../../../common-components/Button";
import TimePicker from "../../../common-components/TimePicker";

const AddTrainDetails = () => {
  return (
    <div className="w-full h-fit addtrainboxshadow mt-10 mx-[2px] flex flex-col gap-3 p-2">
      <div className="flex items-center justify-center">
        <b className="text-[1.5em]">Add Train Details</b>
      </div>
       <div className="w-[280px]">
        <TimePicker/>
       </div>
      <div className="flex items-center justify-center mt-5">
        <Button
          label={"Add Now"}
          style={
            "bg-red-500 h-10 w-[100px] text-white text-[15px] rounded-[5px] font-medium hover:bg-red-700"
          }
        />
      </div>
    </div>
  );
};

export default AddTrainDetails;
