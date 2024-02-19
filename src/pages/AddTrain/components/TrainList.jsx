import React from "react";

const TrainList = () => {
  return (
    <div className="w-[95%] h-full mt-10">
      <div className=" flex justify-end items-center">
        <p className="text-[14px]">Search: </p>
        <input type="text"  className="border-[1px] bg-white border-[#aaa] ml-2 h-7" />
      </div>
      <div className="mt-5">
        <div className="flex w-full border-b-[1px] border-[#aaa] h-8">
          <div className="w-[10%]">
            <p className="font-bold text-[15px]">#</p>
          </div>
          <div className="w-[40%]">
            <p className="font-bold text-[15px]">Train Name</p>
          </div>
          <div className="w-[30%]">
            <p className="font-bold text-[15px]">Train Number</p>
          </div>
          <div className="w-[10%]">
            <p className="font-bold text-[15px]">Action</p>
          </div>
          <div className="w-[10%]">
            <p className="font-bold text-[15px]">Edit Train Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainList;
