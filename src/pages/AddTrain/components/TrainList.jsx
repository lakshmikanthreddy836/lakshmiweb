import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api-config/axiosinstance";
import Paginate from "../../../common-components/Paginate";
import AnimateLoader from "../../../common-components/AnimateLoader";
import Eye from "../../../assets/Icons/Eye";
import Delete from "../../../assets/Icons/Delete";

const TrainList = () => {
  const [trainList, setTrainList] = useState();
  const [totalTrainListCount, setTotalTrainListCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;
  const [loading, setLoading] = useState(true);
  const fetchTrainList = async (pageNumber, name) => {
    const response = await axiosInstance.get(`/getTrain`, {
      params: {
        page: pageNumber - 1,
        limit: itemsPerPage,
        scrapName: name,
      },
    });

    if (response?.data?.success) {
      setLoading(false);
      const trainListArray = response?.data?.data;
      setTrainList(trainListArray?.train);
      setTotalTrainListCount(trainListArray?.totalCount);
    }
  };
  const handlePageChange = (pageNumber) => {
    console.log("pageNumber", pageNumber);
    setCurrentPage(pageNumber);
    fetchTrainList(pageNumber, "");

    // console.log("Page changed to:", pageNumber);
  };
  useEffect(() => {
    fetchTrainList(currentPage, "POORVA");
  }, []);
  const startIndex = (currentPage - 1) * 100;
  const endIndex = startIndex + 100;
  console.log("trainList", trainList);
  const totalPages = Math.ceil(totalTrainListCount / 100);

  return (
    <div className="w-[95%] h-full mt-10">
      <div className=" flex justify-end items-center">
        <p className="text-[14px]">Search: </p>
        <input
          type="text"
          className="border-[1px] bg-white border-[#aaa] ml-2 h-7"
        />
      </div>
      <div className="mt-5 flex flex-col">
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
        <div className="h-fit w-full">
          {loading ? (
            <AnimateLoader count={3} />
          ) : (
            <div>
              {trainList?.map((data, index) => (
                <div
                  key={index}
                  className="flex items-center w-full border-b-[1.5px] border-gray-300 h-12"
                >
                  <div className="w-[10%]">
                    <p className="font-medium text-[15px]">{data?.id}</p>
                  </div>
                  <div className="w-[40%]">
                    <p className="font-medium text-[15px]">
                      {data?.train_name}
                    </p>
                  </div>
                  <div className="w-[30%]">
                    <p className="font-medium text-[15px]">
                      {data?.train_number}
                    </p>
                  </div>
                  <div className="w-[10%] flex">
                    <p className="font-medium text-[15px]">
                      <Eye />
                    </p>
                  </div>
                  <div className="w-[10%] flex justify-center">
                    <p className="font-medium text-[15px]">
                      <Delete />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="h-fit flex justify-between w-full items-center">
        <div className="flex gap-1 items-center">
          <p className="font-semibold text-[15px] text-black">Total Records:</p>
          <p className="text-[15px]">{totalTrainListCount}</p>
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
  );
};

export default TrainList;
