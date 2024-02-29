import React, { useEffect, useState } from "react";
import axiosInstance from "../../../api-config/axiosinstance";
import Paginate from "../../../common-components/Paginate";
import AnimateLoader from "../../../common-components/AnimateLoader";
import Eye from "../../../assets/Icons/Eye";
import Delete from "../../../assets/Icons/Delete";
import Button from "../../../common-components/Button";
import { FaEdit } from "react-icons/fa";
import SelectOption from "../../../common-components/SelectOption";

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
    console.log('response',response)

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

  //Delete train Functionality
  const handleDeleteTrain = () => {
    const ShowPopup = document.getElementById('DeleteTrainModle');
    ShowPopup.style.display = 'block';
  }

  const handleClickCloseDeleteModule = () => {
    const HidePopup = document.getElementById('DeleteTrainModle');
    HidePopup.style.display = 'none';
  }

  const handleClickConfirmDeleteModule = () => {
    const HidePopup = document.getElementById('DeleteTrainModle');
    HidePopup.style.display = 'none';
  }
  // Train Edit Functionality
  const handleEditTrain = () => {
    const ShowEditModle = document.getElementById('UpdateTrainModle')
    ShowEditModle.style.display = 'display';
  }

  const handleClickUpdateTrainModule = () => {
    console.log('check');
  }

  const handleClickCloseUpdateModule = () => {
    console.log('checking')
  }

  //Train Status Dropdown
  const SelectTrainStatus = [
    { id: 1, label: 'Active', value: 'Active' },

    { id: 2, label: 'Inactive', value: 'Inactive' },
  ];

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
          <div className="w-[10%]">
            <p className="font-bold text-[15px]">Delete Train</p>
          </div>
        </div>
        <div className="h-fit w-full">
          {loading ? (
            <AnimateLoader count={3} />
          ) : (
            <div>
              {trainList?.map((data, index) => (
                <div key={index} className="flex items-center w-full border-b-[1.5px] border-gray-300 h-12">
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
                      <Button
                      label={<FaEdit/>}
                      handleClick={handleEditTrain}
                      />                      
                    </p>
                  </div>
                  <div className="w-[10%] flex justify-center">
                    <p className="font-medium text-[15px]">
                      <Button
                      label={<Delete/>}
                      handleClick={handleDeleteTrain}
                      />                      
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
      {/* Start Delete Modle */}
      <div id="DeleteTrainModle" className='hidden fixed overflow-auto w-full h-full top-0 left-0'>
        <div id="DeleteTrainContent" className="bg-[#fefefe] w-[40%] h-[40%] border-2 rounded p-8 m-auto mt-9 text-center">
          <div>
            <p>Are You Sure?</p>
            <p> You want to delete the train?</p>
          </div>
          <div>
            <Button 
            label={'Confirm'}
            style='bg-[#4fca76] mr-1 py-1 px-4 text-white'
            handleClick={handleClickConfirmDeleteModule}
            />
            <Button
            label={'Cancel'}
            style='bg-[#e52222] py-1 px-4 text-white'
            handleClick={handleClickCloseDeleteModule}
            />
          </div>
        </div>
      </div>
      {/* End Delete Modle */}

      {/* Start Edit Modle */}
      <div id="UpdateTrainModle" className='hidden fixed overflow-auto w-full h-full top-0 left-0'>
        <div id="UpdateTrainContent" className="bg-[#fefefe] w-[40%] h-[40%] border-2 rounded p-8 m-auto mt-9 text-center">
          <div className="columns-2">
            <div>
              <input type="text" name="train_name" value={'train name'}/>
            </div>
            <div>
              <input type="text" name="train_number" value={'train number'}/>
            </div>            
          </div>
          <div className="columns-1">
            <div>
              <SelectOption
              label={'Train Status'}
              options={SelectTrainStatus}
              // value={}
              // onChange={}
              style="w-60 mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"
              />
            </div>
          </div>
          <div>
            <Button 
            label={'Update'}
            style='bg-[#4fca76] mr-1 py-1 px-4 text-white'
            handleClick={handleClickUpdateTrainModule}
            />
            <Button
            label={'Cancel'}
            style='bg-[#e52222] py-1 px-4 text-white'
            handleClick={handleClickCloseUpdateModule}
            />
          </div>
        </div>
      </div>
      {/* End Edit Modle */}
    </div>
  );
};

export default TrainList;
