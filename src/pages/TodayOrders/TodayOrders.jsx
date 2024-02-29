import OrdersCard from "./components/OrderCards";
import Today_Order_filter from "./components/TodayFilter";
import Delete from "../../assets/Icons/Delete";
import Eye from "../../assets/Icons/Eye";

const TodayOrders = () => {
  const dummyData = [
    {
      orderId: "RK3271140",
      name: "Somya",
      mobile: "9358848943",
      station_name: "Bhubaneswar",
      train_no: "788344",
      restruant_no: "4894849223",
      price: "474",
      status: "cancelled",
      delivery_date: "21/01/23",
      booking_date: "23/04/23",
    },
    {
      orderId: "HDB47383",
      name: "Ashis",
      mobile: "9358848943",
      station_name: "Cuttack",
      train_no: "788344",
      restruant_no: "47473723",
      price: "214",
      status: "cancelled",
      delivery_date: "21/01/23",
      booking_date: "23/04/23",
    },
    {
      orderId: "RK3271140",
      name: "Somya SAHOO",
      mobile: "9358848943",
      station_name: "Bhubaneswar",
      train_no: "788344",
      restruant_no: "4894849223",
      price: "474",
      status: "delivered",
      delivery_date: "21/01/23",
      booking_date: "23/04/23",
    },
    {
      orderId: "HDB47383",
      name: "Ashis KUMAR",
      mobile: "9358848943",
      station_name: "Cuttack",
      train_no: "788344",
      restruant_no: "47473723",
      price: "214",
      status: "cancelled",
      delivery_date: "21/01/23",
      booking_date: "23/04/23",
    },
    {
      orderId: "RK3271140",
      name: "Kaniz",
      mobile: "9358848943",
      station_name: "Bhubaneswar",
      train_no: "788344",
      restruant_no: "4894849223",
      price: "474",
      status: "delivered",
      delivery_date: "21/01/23",
      booking_date: "23/04/23",
    },
  ];
  return (
    <div className="h-full w-full  bg-white flex flex-col overflow-hidden">
      <div className="overflow-y-auto p-3 overflow-visible h-full">
        <h2 className="text-2xl font-bold mb-4 text-black">Today Order</h2>

        <div className="flex flex-row w-full justify-between gap-10 bg-white addtrainboxshadow p-3">
          <div className="bg-red-500 h-fit w-full rounded-[5px]">
            <button className="h-9 w-full flex text-[15px] justify-center items-center">
              Today
            </button>
          </div>
          <div className="bg-[#e4e3e8] h-fit w-full rounded-[5px]">
            <button className="h-9 w-full text-[15px] flex justify-center items-center text-black">
              Yesterday
            </button>
          </div>
          <div className="w-full h-fit bg-white rounded-[5px]">
            <input
              type="date"
              className="border-[1px] pl-3 text-[15px] h-9 w-full bg-[#e4e3e8] border-[#aaa] rounded-[4px] text-black"
            />
          </div>
          <div className="w-[300px]">
            <button className="bg-red-500 h-12 w-full flex justify-center items-center rounded-[5px] shadow-lg">
              Date Filter
            </button>
          </div>
        </div>

        <div className="flex flex-row w-full justify-between gap-10 mt-5 bg-white">
          <div className="w-full bg-[#00d1fa] h-[100px] addtrainboxshadow my-5 flex flex-col justify-center items-center gap-8">
            <span className="text-black font-bold text-[20px]">Total</span>
            <span className="text-black">12</span>
          </div>
          <div className="w-full bg-[#00ef1f8c] h-[100px] addtrainboxshadow my-5 flex flex-col justify-center items-center gap-8">
            <span className="text-black font-bold text-[20px]">Total</span>
            <span className="text-black">12</span>
          </div>
          <div className="w-full bg-[#c6fa0066] h-[100px] addtrainboxshadow my-5 flex flex-col justify-center items-center gap-8">
            <span className="text-black font-bold text-[20px]">Total</span>
            <span className="text-black">12</span>
          </div>
          <div className="w-full bg-[#fa000075] h-[100px] addtrainboxshadow my-5 flex flex-col justify-center items-center gap-8">
            <span className="text-black font-bold text-[20px]">Total</span>
            <span className="text-black">12</span>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-4">
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
        <div className="overflow-x-auto  w-full h-full mt-4">
          <div className="flex flex-col w-fit h-fit ">
            <div className="flex w-fit border-b-[1px] border-[#aaa] h-12">
              <div className="w-[120px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Order Id</p>
              </div>
              <div className="w-[200px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">
                  Customer Name
                </p>
              </div>
              <div className="w-[130px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Mobile</p>
              </div>
              <div className="w-[200px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Station Name</p>
              </div>
              <div className="w-[160px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Train No</p>
              </div>
              <div className="w-[210px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">
                  Restaurant Name
                </p>
              </div>
              <div className="w-[150px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Total Price</p>
              </div>
              <div className="w-[140px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Status</p>
              </div>
              <div className="w-[200px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">
                  Delivery Date
                </p>
              </div>
              <div className="w-[200px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Booking Date</p>
              </div>
              <div className="w-[150px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Action</p>
              </div>
            </div>
            <div className="flex flex-col">
              {dummyData?.map((data, index) => (
                <div className="flex w-full  h-[60px] items-center border-b-[1px] border-[#aaa]">
                  <div className="w-[120px] flex items-center h-9">
                    <p className="text-[15px] text-black">{data?.orderId}</p>
                  </div>
                  <div className="w-[200px] flex items-center h-9">
                    <p className="text-[15px] text-black">{data?.name}</p>
                  </div>
                  <div className="w-[130px] flex items-center h-9">
                    <p className="text-[15px] text-black">{data?.mobile}</p>
                  </div>
                  <div className="w-[200px] flex items-center h-9">
                    <p className="text-[15px] text-black">
                      {data?.station_name}
                    </p>
                  </div>
                  <div className="w-[160px] flex items-center h-9">
                    <p className="text-[15px] text-black">{data?.train_no}</p>
                  </div>
                  <div className="w-[210px] flex items-center h-9">
                    <p className="text-[15px] text-black">
                      {data?.restruant_no}
                    </p>
                  </div>
                  <div className="w-[150px] flex items-center h-9">
                    <p className="text-[15px] text-black">{data?.price}</p>
                  </div>
                  <div className="w-[140px] flex items-center h-9">
                    <p
                      className={`text-[15px] px-[6px] py-[3px] rounded-[5px] text-white ${
                        data?.status == "cancelled"
                          ? "bg-red-500"
                          : "bg-green-600"
                      }`}
                    >
                      {data?.status}
                    </p>
                  </div>
                  <div className="w-[200px] flex items-center h-9">
                    <p className="text-[15px] text-black">
                      {data?.delivery_date}
                    </p>
                  </div>
                  <div className="w-[200px] flex items-center h-9">
                    <p className="text-[15px] text-black">
                      {data?.booking_date}
                    </p>
                  </div>
                  <div className="w-[150px] flex items-center h-fit">
                    <p className="text-[15px] text-black">
                      <Eye />
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

export default TodayOrders;
