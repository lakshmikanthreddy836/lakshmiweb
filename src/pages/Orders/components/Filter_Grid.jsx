import Datatable from "./Datatable";

const Filter_Grid_Table = () => {
  return (
    <div>
      <div className="flex items-center mt-5 ml-10 mr-10">
        <div className="border-t-2 border-b-2 h-2 border-gray-300 flex-grow"></div>
        <div className="border-t-2 border-b-2 h-2 border-gray-300 flex-grow"></div>
      </div>
      <div className="mt-8 ml-10">
        <h2 className="text-2xl font-bold mb-4">Order List</h2>
      </div>
      <form className="flex flex-col md:flex-row gap-8 px-4 mt-8 sm:grid-cols-4 sm:px-8">
        <div className="">
          <input
            type="text"
            placeholder="id"
            className="w-full  px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Partner Order"
            className="w-full  px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Train No"
            className="w-full  px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Mobile"
            className="w-full  px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
          />
        </div>
        <select
          id="pricingType"
          name="pricingType"
          placeholder="Select Station"
          className=" border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
        >
          <option value="All" selected="">
            Select Order Stat
          </option>
          <option value="Freemium">Freemium</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
        <select
          id="pricingType"
          name="pricingType"
          placeholder="Select Order Status"
          className=" border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
        >
          <option value="All" selected="">
            Select Station
          </option>
          <option value="Freemium">Freemium</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>

        <select
          id="pricingType"
          name="pricingType"
          placeholder="Time Within"
          className=" border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
        >
          <option value="All" selected="">
            Select Station
          </option>
          <option value="Freemium">Freemium</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
        <button className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </span>
          <span className="hidden md:inline-block">Edit</span>
        </button>
        <button className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border-y border-slate-200 font-medium px-4 py-2 inline-flex space-x-1 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          <span className="hidden md:inline-block">View</span>
        </button>
      </form>

      <div className="mt-8">
        <Datatable />
      </div>
    </div>
  );
};

export default Filter_Grid_Table;
