// import Ticket_Agent_Orders from "./TicketAgentOrders";

const Ticket_agent_Details = () => {
  return (
    <>
      <div className="bg-white p-2 mt-5 shadow-md">
        <div className=" grid gap-10 grid-flow-col justify-stretch">
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1">
              <div className="text-[#212529] font-bold">
                Ticketing Agent ID:
              </div>
              <div className="text-[#333333]">RK1510</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
              <div className="text-[#212529] font-bold">Company Name:</div>
              <div className="text-[#333333]">Restornia</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
              <div className="text-[#212529] font-bold">Name:</div>
              <div className="text-[#333333]">Anand Raj</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
              <div className="text-[#212529] font-bold">Contact No:</div>
              <div className="text-[#333333]">8709941623</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
              <div className="text-[#212529] font-bold">City:</div>
              <div className="text-[#333333]">Deoghar</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
              <div className="text-[#212529] font-bold">State:</div>
              <div className="text-[#333333]">Jharkhand</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
              <div className="text-[#212529] font-bold">Coupon Code:</div>
              <div className="text-[#333333]">RZ8663129</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
              <div className="text-[#212529] font-bold">Status:</div>
              <div className="text-[#ff0018]">Inactive</div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1">
              <div className="text-[#212529] font-bold">
                Date of Incorporation :
              </div>
              <div className="text-[#333333]">24 Apr 2023</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
              <div className="text-[#212529] font-bold">Incorporated By :</div>
              <div className="text-[#333333]">....</div>
            </div>
            <div className="p-2 border border-[#212529]">
              <div className="p-2 border border-[#212529]">
                <div className="text-lg text-[#212529] font-bold">
                  Payment Method
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
                <div className="text-[#212529] font-bold">Pay Mode : UPI</div>
                <div className="text-[#333333] font-bold">
                  A/c / UPI ID : 123123456
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
                <div className="text-[#212529] font-bold">Bank Name : abc</div>
                <div className="text-[#333333]"></div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
                <div className="text-[#212529] font-bold">
                  Branch Name : xyz
                </div>
                <div className="text-[#333333]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <Ticket_Agent_Orders />
      </div> */}
    </>
  );
};

export default Ticket_agent_Details;
