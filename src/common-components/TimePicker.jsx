import React, { useState } from "react";

const TimePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hrTime, setHrTime] = useState(0);
  const [minuteTime, setMinuteTime] = useState(0);
  const [dayTime, setDayTime] = useState("");
  return (
    <div className="w-full bg-transparent">
      <div className="w-full h-9 border-[1px] bg-white border-[#aaa] rounded-[4px] flex relative">
        <span className="w-[90%] flex items-center font-medium text-[15px] pl-3">
          <p>{hrTime > 9 ? hrTime : "0" + hrTime}</p>
          <p>:</p>
          <p>{minuteTime > 9 ? minuteTime : "0" + minuteTime}</p>
          <p className="ml-1">{dayTime}</p>
        </span>
        <button
          className="text-[20px] font-bold flex justify-center items-center w-[10%] cursor-pointer"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          +
        </button>
      </div>
      {isOpen && (
        <div className="h-[320px] w-[180px] addtrainboxshadow border-[1px] bg-white border-[#aaa] absolute p-1 overflow-hidden z-50">
          <div className="flex overflow-hidden h-full">
            <div className="w-[33%] h-full  flex justify-center flex-col items-center cursor-pointer overflow-hidden">
              <div className="overflow-scroll h-fit w-full timepickeroverflow">
                {new Array(12)?.fill(null).map((data, index) => (
                  <div
                    className={`flex text-[15px] gap-[1px] h-10 w-full justify-center ${
                      index + 1 == hrTime ? "bg-blue-500" : "bg-white"
                    } items-center hover:bg-blue-600 text-black font-bold`}
                    onClick={() => {
                      setHrTime(index + 1);
                    }}
                  >
                    <p className=" ">{index + 1 > 9 ? null : 0}</p>
                    <p className=" ">{index + 1}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[33%] h-full  flex justify-center flex-col items-center cursor-pointer overflow-hidden">
              <div className="overflow-scroll h-fit w-full timepickeroverflow">
                {new Array(60)?.fill(null).map((data, index) => (
                  <div
                    className={`flex text-[15px] gap-[1px] h-10 w-full justify-center items-center ${
                      index == minuteTime ? "bg-blue-500" : "bg-white"
                    } hover:bg-blue-600 text-black font-bold`}
                    onClick={() => {
                      setMinuteTime(index);
                    }}
                  >
                    <p>{index > 9 ? null : 0}</p>
                    <p>{index}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[33%] h-fit  flex justify-center flex-col items-center cursor-pointer">
              <p
                className={`h-10 w-full flex justify-center items-center hover:bg-blue-600 text-black font-bold ${
                  dayTime == "AM" ? "bg-blue-500" : "bg-white"
                }`}
                onClick={() => {
                  setDayTime("AM");
                }}
              >
                AM
              </p>
              <p
                className={`h-10 w-full flex justify-center items-center hover:bg-blue-600  text-black font-bold ${
                  dayTime == "PM" ? "bg-blue-500" : "bg-white"
                }`}
                onClick={() => {
                  setDayTime("PM");
                }}
              >
                PM
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePicker;
