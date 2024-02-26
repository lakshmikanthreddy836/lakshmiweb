import GridButton from "./components/GridButton";
import GridTable from "./components/GridTable";
import Title from "../../common-components/Title";
import Delete from "../../assets/Icons/Delete";
const Complaints = () => {
  const dummyData = [
    {
      complanintId: "TJ49493093",
      orderId: "RK3271140",
      resturant_name: "Bhubaneswar",
      status: "cancelled",
      delivery_date: "21/01/23",
      last_update: "23/04/23",
    },
    {
      complanintId: "TJ49434093",
      orderId: "RK3271140",
      resturant_name: "BAZAR INDIA",
      status: "cancelled",
      delivery_date: "21/01/23",
      last_update: "23/04/23",
    },
    {
      complanintId: "TJ492093",
      orderId: "RK3254N40",
      resturant_name: "Spicy India",
      status: "cancelled",
      delivery_date: "21/01/23",
      last_update: "23/04/23",
    },
    {
      complanintId: "TJ492093",
      orderId: "RK3254N40",
      resturant_name: "ROLLS AND WHELLS",
      status: "cancelled",
      delivery_date: "21/01/23",
      last_update: "23/04/23",
    },
    {
      complanintId: "TJ492093",
      orderId: "RK3254N40",
      resturant_name: "Biryani",
      status: "cancelled",
      delivery_date: "21/01/23",
      last_update: "23/04/23",
    },
  ];
  return (
    // <div className=" h-full w-full bg-white overflow-y-auto">
    //   <Title title={"Orders"} />
    //   <GridButton />
    //   <GridTable />
    // </div>
    <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
      <div className="overflow-y-auto p-3 overflow-visible h-fit">
        <h2 className="text-2xl font-bold mb-4 text-black">Complaints</h2>
        <div className=" bg-white addtrainboxshadow p-3 flex flex-col gap-5">
          <div className="flex flex-row w-full justify-between gap-5">
            <div className="bg-red-500 h-fit w-full rounded-[5px]">
              <button className="h-9 w-full flex text-[15px] items-center justify-center">
                New
              </button>
            </div>
            <div className="bg-[#e4e3e8] h-fit w-full rounded-[5px]">
              <button className="h-9 w-full text-[15px] flex justify-center items-center text-black">
                Today
              </button>
            </div>
            <div className="bg-[#e4e3e8] h-fit w-full rounded-[5px]">
              <button className="h-9 w-full text-[15px] flex justify-center items-center text-black">
                Yesterday
              </button>
            </div>
            <div className="bg-[#e4e3e8] h-fit w-full rounded-[5px]">
              <button className="h-9 w-full text-[15px] flex justify-center items-center text-black">
                Last 7 Days
              </button>
            </div>
            <div className="bg-[#e4e3e8] h-fit w-full rounded-[5px]">
              <button className="h-9 w-full text-[15px] flex justify-center items-center text-black">
                This Month
              </button>
            </div>
            <div className="bg-[#e4e3e8] h-fit w-full rounded-[5px]">
              <button className="h-9 w-full text-[15px] flex justify-center items-center text-black">
                Last Month
              </button>
            </div>
            <div className="bg-[#e4e3e8] h-fit w-full rounded-[5px]">
              <button className="h-9 w-full text-[15px] flex justify-center items-center text-black">
                Closed
              </button>
            </div>
          </div>
          <div className="flex flex-row w-full justify-between gap-5">
            <div className="bg-[#e4e3e8] text-black h-fit w-full rounded-[5px]">
              <button className="h-9 w-full flex text-[15px] justify-center items-center">
                Refund Process
              </button>
            </div>
            <div className="bg-[#e4e3e8] text-black h-fit w-full rounded-[5px]">
              <button className="h-9 w-full flex text-[15px] justify-center items-center">
                Refund Given
              </button>
            </div>
            <div className="bg-[#e4e3e8] text-black h-fit w-full rounded-[5px]">
              <button className="h-9 w-full flex text-[15px] justify-center items-center">
                In-Process
              </button>
            </div>
            <div className="h-fit w-full flex justify-between gap-5">
              <button className="bg-red-500 h-10 w-[60%] text-[15px] font-semibold flex justify-center items-center rounded-[5px] shadow-lg overflow-hidden">
                Add New Complaint
              </button>
              <button className="bg-red-500 h-10 w-[40%] font-semibold text-[15px] flex justify-center items-center rounded-[5px] shadow-lg">
                Date Filter
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between gap-10 mt-5 bg-white">
          <div className="w-full bg-[#00d1fa] h-[100px] addtrainboxshadow my-5 flex flex-col  items-center">
            <span className="text-black font-bold text-[20px] mt-2">
              Total Complaints
            </span>
            <span className="text-black  mt-4">0</span>
          </div>
          <div className="w-full bg-[#00ef1f8c] h-[100px] addtrainboxshadow my-5 flex flex-col items-center">
            <span className="text-black font-bold text-[20px] mt-2">
              In-Process
            </span>
            <span className="text-black mt-4">0</span>
          </div>
          <div className="w-full bg-[#c6fa0066] h-[100px] addtrainboxshadow my-5 flex flex-col items-center">
            <span className="text-black font-bold text-[20px] mt-2">
              Resolved
            </span>
            <span className="text-black mt-4">0</span>
          </div>
          <div className="w-full bg-[#fa000075] h-[100px] addtrainboxshadow my-5 flex flex-col items-center">
            <span className="text-black font-bold text-[20px] mt-2">
              Un-Resolved
            </span>
            <span className="text-black mt-4">0</span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mt-4">
          <div className="flex items-center gap-2 text-black">
            <p>Show</p>
            <div>
              <select
                id="pricingType"
                name="pricingType"
                className="mt-1 ml-2 px-1 h-8 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none  rounded-md text-[15px]"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <p>entries</p>
          </div>
          <div className="flex items-center">
            <p className="text-[15px] text-black">Search: </p>
            <input
              type="text"
              className="bg-white text-black pl-2 border-[1px] border-[#aaa] ml-1 h-8 focus:outline-none"
            />
          </div>
        </div>
        <div className="overflow-x-auto  w-full h-fit mt-4">
          <div className="flex flex-col w-fit h-fit ">
            <div className="flex w-fit border-b-[1px] border-[#aaa] h-11">
              <div className="w-[180px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Complaint Id</p>
              </div>
              <div className="w-[180px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Order ID</p>
              </div>
              <div className="w-[270px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">
                  Restaurant Name
                </p>
              </div>
              <div className="w-[180px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Status</p>
              </div>
              <div className="w-[210px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Date</p>
              </div>
              <div className="w-[210px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Last Update</p>
              </div>
              <div className="w-[150px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Action</p>
              </div>
            </div>
            <div className="flex flex-col">
              {dummyData?.map((data, index) => (
                <div className="flex w-fit  h-[60px] items-center border-b-[1px] border-[#aaa]">
                  <div className="w-[180px] flex items-center h-9">
                    <p className="text-[15px] text-black">
                      {data?.complanintId}
                    </p>
                  </div>
                  <div className="w-[180px] flex items-center h-9">
                    <p className="text-[15px] text-black">{data?.orderId}</p>
                  </div>
                  <div className="w-[270px] flex items-center h-9">
                    <p className="text-[15px] text-black">
                      {data?.resturant_name}
                    </p>
                  </div>
                  <div className="w-[180px] flex items-center h-9">
                    <p className="text-[15px] px-[6px] py-[3px] rounded-[5px] text-white bg-red-500">{data?.status}</p>
                  </div>
                  <div className="w-[210px] flex items-center h-9">
                    <p className="text-[15px] text-black">
                      {data?.delivery_date}
                    </p>
                  </div>
                  <div className="w-[210px] flex items-center h-9">
                    <p className="text-[15px] text-black">
                      {data?.last_update}
                    </p>
                  </div>
                  <div className="w-[150px] flex items-center h-fit">
                    <p className="text-[15px] text-black">
                      <Delete />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
