import { useState } from "react";
import Title from "../../common-components/Title";
// import Button from "../../common-components/Button";
import { FaPlus } from "react-icons/fa";
import TrainList from "./components/TrainList";
import AddTrainForm from "./components/AddTrainForm";
import AddStation from "./components/AddStation";
import AddTrainDetails from "./components/AddTrainDetails";
import { DownloadTrainCsv } from "../../Services/Train";
import { CSVLink } from "react-csv";

const AddTrain = () => {
  const [showAddTrainMenu, setShowAddTrainMenu] = useState("trainlist");
  const [csvData, setCsvData] = useState('');

  //CSV DOWNLOAD FUNCTIONALITY  
  const handleDownloadCsv = async () => {
    console.log('clicked')
    let response = await DownloadTrainCsv () ; 
    console.log(response.data);
    setCsvData(response.data);   
  }

  var headers = [
    { label: "Train Status", key: "status" },
    { label: "Train Name", key: "train_name" },
    { label: "Train Number", key: "train_number" },
  ];
  const csvLink = {
    filename:"file.csv",
    headers:headers,
    data:csvData
  };
  return (
    <div className="h-full w-full bg-white overflow-hidden flex flex-col text-black">
      <div className="overflow-y-auto px-3 overflow-visible h-fit">
        <div className="p-2 items-center h-auto">
          <Title title={"Train"}></Title>
          <div>
          <CSVLink {...csvLink} 
          className="bg-[#84dd84] float-right h-9 w-[170px] text-black text-[15px] rounded-[5px] font-medium flex items-center justify-center gap-1"
          onClick={handleDownloadCsv}
          >Download Csv</CSVLink>
        </div>
        </div>        
        <div className="bg-white h-14 addtrainboxshadow flex items-center justify-between px-5">
          <div className="flex gap-8">
            <div>
              <button
                className="bg-red-500 h-9 w-[180px] text-white text-[15px] rounded-[5px] font-medium"
                onClick={() => {
                  setShowAddTrainMenu("trainlist");
                }}
              >
                Train List
              </button>
            </div>
            <div>
              <button
                className="bg-gray-300 h-9 w-[170px] text-black text-[15px] rounded-[5px] font-medium flex items-center justify-center gap-1"
                type="button"
                onClick={() => {
                  setShowAddTrainMenu("addtrain");
                }}
              >
                <FaPlus />
                <p>Add Train</p>
              </button>
            </div>
            <div>
              <button
                className="bg-gray-300 h-9 w-[170px] text-black text-[15px] rounded-[5px] font-medium flex items-center justify-center gap-1"
                type="button"
                onClick={() => {
                  setShowAddTrainMenu("addtraindetails");
                }}
              >
                <FaPlus />
                <p>Add Train Details</p>
              </button>
            </div>
            <div>
              <button className="bg-gray-300 h-9 w-[170px] text-black text-[15px] rounded-[5px] font-medium flex items-center justify-center gap-1">
                <FaPlus />
                <p>Import Train</p>
              </button>
            </div>
          </div>
          <div className="flex gap-8">
            <div>
              <button
                className=" bg-gray-300 h-9 w-[180px] text-black text-[15px] rounded-[5px] font-medium"
                onClick={() => {
                  setShowAddTrainMenu("Station List");
                }}
              >
                Station List
              </button>
            </div>
            <div>
              <button
                className="bg-gray-300 h-9 w-[170px] text-black text-[15px] rounded-[5px] font-medium flex items-center justify-center gap-1"
                type="button"
                onClick={() => {
                  setShowAddTrainMenu("addstation");
                }}
              >
                <FaPlus />
                <p>Add Station</p>
              </button>
            </div>
          </div>
        </div>
        <div className="h-fit flex justify-center">
          {showAddTrainMenu == "trainlist" ? (
            <TrainList />
          ) : showAddTrainMenu == "addtrain" ? (
            <AddTrainForm />
          ) : showAddTrainMenu == "addstation" ? (
            <AddStation />
          ) : showAddTrainMenu == "addtraindetails" ? (
            <AddTrainDetails />
          ) : (
            ""
          )}
        </div>
        {/* Table */}

        {/* <GridTable /> */}
      </div>
    </div>
  );
};

export default AddTrain;
