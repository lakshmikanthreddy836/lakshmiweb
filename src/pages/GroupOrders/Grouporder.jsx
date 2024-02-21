import Delete from "../../assets/Icons/Delete";
import Eye from "../../assets/Icons/Eye";

const Grouporder = () => {
  const dummyData = [
    {
      complanintId: "TJ49493093",
      orderId: "RK3271140",
      resturant_name: "Somya",
      email: "somyaacca78@gmail.com",
      phonenumber: "783873833",
      status: "cancelled",
      delivery_date: "21/01/23",
      last_update: "23/04/23",
      person: "7",
    },
    {
      complanintId: "TJ49434093",
      orderId: "RK3271140",
      resturant_name: "Ashis",
      email: "abxndcn89@gmail.com",
      phonenumber: "838737834",
      status: "cancelled",
      delivery_date: "21/01/23",
      last_update: "23/04/23",
      person: "3",
    },
    {
      complanintId: "TJ492093",
      orderId: "RK3254N40",
      resturant_name: "Kaniz",
      email: "cccwd789@gmail.com",
      phonenumber: "474272782",
      status: "cancelled",
      delivery_date: "21/01/23",
      last_update: "23/04/23",
      person: "2",
    },
    {
      complanintId: "TJ492093",
      orderId: "RK3254N40",
      resturant_name: "Anjali",
      email: "cndwjcjb773@gmail.com",
      phonenumber: "3782727832",
      status: "cancelled",
      delivery_date: "21/01/23",
      last_update: "23/04/23",
      person: "10",
    },
    {
      complanintId: "TJ492093",
      orderId: "RK3254N40",
      resturant_name: "Chandra",
      email: "cbshdjs89@gmail.com",
      phonenumber: "373673763",
      status: "cancelled",
      delivery_date: "21/01/23",
      last_update: "23/04/23",
      person: "11",
    },
  ];
  return (
    <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
      <div className="overflow-y-auto p-3 overflow-visible h-fit">
        <h2 className="text-2xl font-bold mb-4 text-black">Group Orders</h2>
        <div className="flex flex-row justify-between items-center mt-8 px-8">
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
        <div className="overflow-x-auto  w-full h-fit mt-4 px-8">
          <div className="flex flex-col w-fit h-fit ">
            <div className="flex w-fit border-b-[1px] border-[#aaa] h-[40px]">
              <div className="w-[50px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">#</p>
              </div>
              <div className="w-[130px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Date</p>
              </div>
              <div className="w-[130px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Order ID</p>
              </div>
              <div className="w-[200px] flex items-center h-9 ">
                <p className="font-bold text-[15px] text-black">
                  Customer Name
                </p>
              </div>
              <div className="w-[280px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Email</p>
              </div>
              <div className="w-[160px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Phone Number</p>
              </div>
              <div className="w-[150px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Status</p>
              </div>
              <div className="w-[150px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">No Of Person</p>
              </div>
              <div className="w-[150px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Action</p>
              </div>
            </div>
            <div className="flex flex-col">
              {dummyData?.map((data, index) => (
                <div className="flex w-fit  h-[50px] items-center border-b-[1px] border-[#aaa]">
                  <div className="w-[50px] flex items-center h-9">
                    <p className="text-[15px] text-black">{index + 1}</p>
                  </div>
                  <div className="w-[130px] flex items-center h-9">
                    <p className="text-[15px] text-black">
                      {data?.delivery_date}
                    </p>
                  </div>
                  <div className="w-[130px] flex items-center h-9">
                    <p className="text-[15px] text-black">{data?.orderId}</p>
                  </div>
                  <div className="w-[200px] flex items-center h-9">
                    <p className="text-[15px] text-black">
                      {data?.resturant_name}
                    </p>
                  </div>
                  <div className="w-[280px] flex items-center h-9">
                    <p className="text-[15px] px-[6px] py-[3px] rounded-[5px] text-white">
                      {data?.email}
                    </p>
                  </div>
                  <div className="w-[160px] flex items-center h-9">
                    <p className="text-[15px] text-black">
                      {data?.phonenumber}
                    </p>
                  </div>
                  <div className="w-[150px] flex items-center h-9">
                    <p className="text-[15px] text-black">{data?.status}</p>
                  </div>
                  <div className="w-[150px] flex items-center h-9">
                    <p className="text-[15px] text-black">{data?.person}</p>
                  </div>
                  <div className="w-[150px] flex items-center h-fit">
                    <p className="text-[15px] text-black flex gap-4">
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

export default Grouporder;
