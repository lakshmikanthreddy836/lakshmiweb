import Eye from "../../assets/Icons/Eye";
import Edit from "../../assets/Icons/Edit";
import { Link } from "react-router-dom";

const Ticket_Agent = () => {
  const dummyData = [
    {
      id: "RK1510",
      company_name: "Restornia",
      name: "Anand Raj",
      mobile: "8709941623",
      city: "Deoghar",
      state: "Jharkhand",
      status: "Inactive",
      coupon_code: "RZ8663129",
      ovd: "00",
    },
    {
      id: "RK1510",
      company_name: "Restornia",
      name: "Anand Raj",
      mobile: "8709941623",
      city: "Deoghar",
      state: "Jharkhand",
      status: "Inactive",
      coupon_code: "RZ8663129",
      ovd: "00",
    },
    {
      id: "RK1510",
      company_name: "Restornia",
      name: "Anand Raj",
      mobile: "8709941623",
      city: "Deoghar",
      state: "Jharkhand",
      status: "Inactive",
      coupon_code: "RZ8663129",
      ovd: "00",
    },
    {
      id: "RK1510",
      company_name: "Restornia",
      name: "Anand Raj",
      mobile: "8709941623",
      city: "Deoghar",
      state: "Jharkhand",
      status: "Inactive",
      coupon_code: "RZ8663129",
      ovd: "00",
    },
    {
      id: "RK1510",
      company_name: "Restornia",
      name: "Anand Raj",
      mobile: "8709941623",
      city: "Deoghar",
      state: "Jharkhand",
      status: "Inactive",
      coupon_code: "RZ8663129",
      ovd: "00",
    },
  ];
  return (
    <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
      <div className="overflow-y-auto p-3 overflow-visible h-fit">
        <div className="bg-white p-2 shadow-md flex justify-between">
          <h2 className="text-xl font-bold  text-[#34334a]">Ticketing Agent</h2>
          <Link to={"/Add_Ticket_Agent_form"}>
            <div className="bg-[#34334a] p-2 text-sm text-white">
              Add Ticketing Agent
            </div>
          </Link>
        </div>
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
              <div className="w-[70px] flex items-center h-9">
                <p className="font-bold text-[12px] text-black">ID</p>
              </div>
              <div className="w-[120px] flex items-center h-9">
                <p className="font-bold text-[12px] text-black">Company Name</p>
              </div>
              <div className="w-[130px] flex items-center h-9">
                <p className="font-bold text-[12px] text-black">Name</p>
              </div>
              <div className="w-[100px] flex items-center h-9 ">
                <p className="font-bold text-[12px] text-black">Mobile</p>
              </div>
              <div className="w-[100px] flex items-center h-9">
                <p className="font-bold text-[12px] text-black">City</p>
              </div>
              <div className="w-[100px] flex items-center h-9">
                <p className="font-bold text-[12px] text-black">State</p>
              </div>
              <div className="w-[100px] flex items-center h-9">
                <p className="font-bold text-[12px] text-black">Status</p>
              </div>
              <div className="w-[100px] flex items-center h-9">
                <p className="font-bold text-[12px] text-black">Coupon Code</p>
              </div>
              <div className="w-[100px] flex items-center h-9">
                <p className="font-bold text-[12px] text-black">
                  O.V.D <br /> This Month
                </p>
              </div>
              <div className="w-[150px] flex items-center h-9">
                <p className="font-bold text-[12px] text-black">Action</p>
              </div>
            </div>
            <div className="flex flex-col">
              {dummyData?.map((data, index) => (
                <div
                  key={index}
                  className="flex w-fit  h-[50px] items-center border-b-[1px] border-[#aaa]"
                >
                  <div className="w-[70px] flex items-center h-9">
                    <p className="text-[12px] text-black">{data?.id}</p>
                  </div>
                  <div className="w-[120px] flex items-center h-9">
                    <p className="text-[12px] text-black">
                      {data?.company_name}
                    </p>
                  </div>
                  <div className="w-[130px] flex items-center h-9">
                    <p className="text-[12px] text-black">{data?.name}</p>
                  </div>
                  <div className="w-[100px] flex items-center h-9">
                    <p className="text-[12px] text-black">{data?.mobile}</p>
                  </div>
                  <div className="w-[100px] flex items-center h-9">
                    <p className="text-[12px] px-[6px] py-[3px] rounded-[5px] text-black">
                      {data?.city}
                    </p>
                  </div>
                  <div className="w-[100px] flex items-center h-9">
                    <p className="text-[12px] text-black">{data?.state}</p>
                  </div>
                  <div className="w-[100px] flex items-center h-9">
                    <p className="text-[12px] text-black">{data?.status}</p>
                  </div>
                  <div className="w-[100px] flex items-center h-9">
                    <p className="text-[12px] text-black">
                      {data?.coupon_code}
                    </p>
                  </div>
                  <div className="w-[100px] flex items-center h-9">
                    <p className="text-[12px] text-center text-black">
                      {data?.ovd}
                    </p>
                  </div>
                  <div className="w-[150px] flex items-center h-fit">
                    <p className="text-[12px] text-black flex gap-4">
                      <Link to={"/view_ticket_agent"}>
                        <Eye />
                      </Link>
                      <Edit />
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

export default Ticket_Agent;
