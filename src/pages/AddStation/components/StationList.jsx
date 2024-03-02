// import React from 'react'

import { useEffect, useState } from "react"
// import { StationListGet } from "../../../Services/Station";
import axiosInstance from "../../../api-config/axiosinstance";
import Paginate from "../../../common-components/Paginate";
import Button from "../../../common-components/Button";
import { FaEdit } from "react-icons/fa";
import Delete from "../../../assets/Icons/Delete";

const StationList = () => {
     const [totalTrainListCount, setTotalTrainListCount] = useState(0);
     const [currentPage, setCurrentPage] = useState(1);
     // const [loading, setLoading] = useState(true);
     const [stationList, setStationList] = useState();

     const itemsPerPage = 100;

     const fetchStationList = async (pageNumber, name) => {
          const response = await axiosInstance.get(`/getStation`, {
               params: {
                    page: pageNumber - 1,
                    limit: itemsPerPage,
                    filter: name,
               },
          });

          if (response?.data?.success) {
               //  setLoading(false);
               const stationListArray = response?.data?.data;
               console.log(stationListArray)
               setStationList(stationListArray?.stations);
               setTotalTrainListCount(stationListArray?.totalCount);
          }
     };
     const handlePageChange = (pageNumber) => {
          console.log("pageNumber", pageNumber);
          setCurrentPage(pageNumber);
          fetchStationList(pageNumber, "");

          // console.log("Page changed to:", pageNumber);
     };
     useEffect(() => {
          fetchStationList(currentPage, "A");
     }, []);

     const startIndex = (currentPage - 1) * 100;
     const endIndex = startIndex + 100;
     console.log("trainList", stationList);
     const totalPages = Math.ceil(totalTrainListCount / 100);

     return (
          <div className="w-[95%] h-full mt-10">
               <div className=" flex justify-end items-center">
                    <p className="text-[14px]">Search: </p>
                    <input
                         type="text"
                         className="border-[1px] bg-white border-[#aaa] ml-2 h-7"
                    // onChange={(e) => setSearchEvent(e)}
                    />
               </div>
               <div className="mt-5 flex flex-col">
                    <div className="flex w-full border-b-[1px] border-[#aaa] h-8">
                         <div className="w-[10%]">
                              <p className="font-bold text-[15px]">#</p>
                         </div>
                         <div className="w-[40%]">
                              <p className="font-bold text-[15px]">Station Name</p>
                         </div>
                         <div className="w-[30%]">
                              <p className="font-bold text-[15px]">Station Code</p>
                         </div>
                         <div className="w-[30%]">
                              <p className="font-bold text-[15px]">State</p>
                         </div>
                         <div className="w-[30%]">
                              <p className="font-bold text-[15px]">Status</p>
                         </div>
                         <div className="w-[10%]">
                              <p className="font-bold text-[15px]">Action</p>
                         </div>
                    </div>
                    <div className="h-fit w-full">
                         <div>
                              {stationList?.map((data, index) => (
                                   <div key={index} className="flex items-center w-full border-b-[1.5px] border-gray-300 h-12">
                                        <div className="w-[8%]">
                                             <p className="font-medium text-[15px]">{data?.id}</p>
                                        </div>
                                        <div className="w-[20%] text-center">
                                             <p className="font-medium text-[15px]">
                                                  {data?.station_name}
                                             </p>
                                        </div>
                                        <div className="w-[18%] text-center">
                                             <p className="font-medium text-[15px]">
                                                  {data?.station_code}
                                             </p>
                                        </div>
                                        <div className="w-[20%] text-center">
                                             <p className="font-medium text-[15px]">
                                                  {data?.states.state_name}
                                             </p>
                                        </div>
                                        <div className="w-[15%] text-center">
                                             <p className="font-medium text-[15px]">
                                                  {data?.status}
                                             </p>
                                        </div>
                                        <div className="w-[23%] text-center">
                                             <Button
                                                  label={<FaEdit />}
                                             //     handleClick={() => handleEditTrain(data?.train_number)}
                                             />
                                             <Button
                                                  label={<Delete />}
                                             //     handleClick={() => handleDeleteTrain(data?.id)}
                                             />
                                        </div>
                                   </div>
                              ))}
                         </div>
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
     )
}

export default StationList