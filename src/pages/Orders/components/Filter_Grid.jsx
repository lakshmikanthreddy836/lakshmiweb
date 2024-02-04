import Datatable from "./Datatable";

const Filter_Grid_Table = () => {
  return (
    <div>
      <div className="mt-8 ">
        <h2 className="text-2xl font-bold mb-4">Order List</h2>
      </div>
      <form className="flex flex-col md:flex-row gap-8 px-4 mt-8 sm:grid-cols-4 sm:px-8">
        <div className="">
          <input
            type="text"
            placeholder="Search for the tool you like"
            className="w-full  px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
          />
        </div>
        <select
          id="pricingType"
          name="pricingType"
          className=" border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
        >
          <option value="All" selected="">
            All
          </option>
          <option value="Freemium">Freemium</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
        <div className="">
          <input
            type="text"
            placeholder="Search for the tool you like"
            className="w-full  px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Search for the tool you like"
            className="w-full  px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Search for the tool you like"
            className="w-full  px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Search for the tool you like"
            className="w-full  px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Search for the tool you like"
            className="w-full  px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
          />
        </div>
      </form>

      <div className="mt-8">
        <Datatable />
      </div>
    </div>
  );
};

export default Filter_Grid_Table;
