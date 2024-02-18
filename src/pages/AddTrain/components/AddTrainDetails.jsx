import React, { useState } from "react";
import Button from "../../../common-components/Button";

const AddTrainDetails = () => {
  const [fields, setFields] = useState([
    { name: "", value: "", date: "", hr: 0, minute: 0, shipt: "" },
  ]);
  const handleAddField = () => {
    setFields([
      ...fields,
      { name: "", value: "", date: "", hr: 0, minute: 0, shipt: "" },
    ]);
  };
  const [isOpenValue, setIsOpenValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (index, value, shift) => {
    const newFields = [...fields];
    newFields[index][shift] = value;
    setFields(newFields);
  };
  console.log("fields", fields);
  return (
    <div className="w-full h-fit addtrainboxshadow mt-10 mx-[2px] flex flex-col gap-3 p-2">
      <div className="flex items-center justify-center">
        <b className="text-[1.5em]">Add Train Details</b>
      </div>
      <div className="flex flex-col">
        {fields?.map((data, i) => (
          <div>
            <div className="w-[280px]">
              <div className="w-full bg-transparent">
                <div className="w-full h-9 border-[1px] bg-white border-[#aaa] rounded-[4px] flex relative">
                  <span className="w-[90%] flex items-center font-medium text-[15px] pl-3">
                    <p>{data.hr > 9 ? data.hr : "0" + data.hr}</p>
                    <p>:</p>
                    <p>{data.minute > 9 ? data.minute : "0" + data.minute}</p>
                    <p className="ml-1">{data.shipt}</p>
                  </span>
                  <button
                    className="text-[20px] font-bold flex justify-center items-center w-[10%] cursor-pointer"
                    onClick={() => {
                      setIsOpenValue(i + 1);
                      setIsOpen(!isOpen);
                    }}
                  >
                    +
                  </button>
                </div>
                {isOpenValue == i + 1 && isOpen && (
                  <div className="h-[320px] w-[180px] addtrainboxshadow border-[1px] bg-white border-[#aaa] absolute p-1 overflow-hidden z-50">
                    <div className="flex overflow-hidden h-full">
                      <div className="w-[33%] h-full  flex justify-center flex-col items-center cursor-pointer overflow-hidden">
                        <div className="overflow-scroll h-fit w-full timepickeroverflow">
                          {new Array(12)?.fill(null).map((items, index) => (
                            <div
                              className={`flex text-[15px] gap-[1px] h-10 w-full justify-center ${
                                index + 1 == data.hr
                                  ? "bg-blue-500"
                                  : "bg-white"
                              } items-center hover:bg-blue-600 text-black font-bold`}
                              onClick={() => {
                                // getTime("hr", index + 1, index);
                                setHrTime(index + 1);
                                handleChange(i, index + 1, "hr");
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
                          {new Array(60)?.fill(null).map((items, index) => (
                            <div
                              className={`flex text-[15px] gap-[1px] h-10 w-full justify-center items-center ${
                                index == data.minute
                                  ? "bg-blue-500"
                                  : "bg-white"
                              } hover:bg-blue-600 text-black font-bold`}
                              onClick={() => {
                                setMinuteTime(index);
                                handleChange(i, index, "minute");
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
                            data.shipt == "AM" ? "bg-blue-500" : "bg-white"
                          }`}
                          onClick={() => {
                            setDayTime("AM");
                            handleChange(i, "AM", "shipt");
                          }}
                        >
                          AM
                        </p>
                        <p
                          className={`h-10 w-full flex justify-center items-center hover:bg-blue-600  text-black font-bold ${
                            data.shipt == "PM" ? "bg-blue-500" : "bg-white"
                          }`}
                          onClick={() => {
                            setDayTime("PM");
                            handleChange(i, "PM", "shipt");
                          }}
                        >
                          PM
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-5">
        <Button
          label={"Add Now"}
          style={
            "bg-red-500 h-10 w-[100px] text-white text-[15px] rounded-[5px] font-medium hover:bg-red-700"
          }
          handleClick={handleAddField}
        />
      </div>
    </div>
  );
};

export default AddTrainDetails;
