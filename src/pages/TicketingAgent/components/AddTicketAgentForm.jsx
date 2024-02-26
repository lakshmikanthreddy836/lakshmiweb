import { Link } from "react-router-dom";

const Add_Ticket_Agent_form = () => {
  return (
    <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
      <div className="overflow-y-auto p-3 overflow-visible h-fit">
        <div className="bg-white p-2 shadow-md flex justify-between">
          <Link to={"/ticketing-agent"}>
            <div className="bg-[#ff0018] p-2 text-sm rounded text-white">
              <p className="text-sm pl-5 pr-5 ">Ticketing Agent List</p>
            </div>
          </Link>
        </div>

        <div className="bg-white p-2 mt-5 shadow-md">
          <div className=" grid gap-10 grid-flow-col justify-stretch">
            <div>
              <p className="font-bold">Ticketing Agent Details</p>
              <form className="mt-3">
                <div>
                  <label className="text-gray-700 text-sm ">Company Name</label>
                  <input
                    id="username"
                    type="text"
                    className="block w-full -mt-0.5 px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-700 text-sm ">Name</label>
                  <input
                    id="username"
                    type="text"
                    className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-700 text-sm ">Mobile</label>
                  <input
                    id="username"
                    type="text"
                    className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-700 text-sm ">City</label>
                  <input
                    id="username"
                    type="text"
                    className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="block mb-2  text-sm font-medium text-gray-900 ">
                    State
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>--select--</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="text-start">
              <p className="font-bold">Address Details</p>
              <form className="mt-3">
                <div>
                  <label className="text-gray-700 text-sm ">Vill & Post</label>
                  <input
                    id="username"
                    type="text"
                    className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-700 text-sm ">Landmark</label>
                  <input
                    id="username"
                    type="text"
                    className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-700 text-sm ">City</label>
                  <input
                    id="username"
                    type="text"
                    className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    State*
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>--select--</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-700 text-sm ">Pincode</label>
                  <input
                    id="username"
                    type="text"
                    className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="mt-5 grid gap-10 grid-flow-col justify-stretch">
            <div>
              <p className="font-bold">Payment Transfer Details</p>
              <form className="mt-3">
                <div>
                  <label className="text-gray-700 text-sm ">
                    Transfer Mode*
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>--select--</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-700 text-sm ">Bank Name*</label>
                  <input
                    id="username"
                    type="text"
                    className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-700 text-sm ">Branch Name*</label>
                  <input
                    id="username"
                    type="text"
                    className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-700 text-sm ">
                    Account No / UPI ID*
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
              </form>
            </div>
            <div className="text-start"></div>
          </div>
          <div className="grid grid-flow-col justify-stretch gap-4">
            <div>
              <label className="text-gray-700 text-sm ">Coupon Code</label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm ">Max Discount</label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm ">Min Order Value</label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_Ticket_Agent_form;
