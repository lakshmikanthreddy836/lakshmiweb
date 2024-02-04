const Today_Order_filter = () => {
  return (
    <div className="my-10 sm:mx-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 bg-white shadow-md p-5">
      <button className="shrink-0 rounded bg-[#e4e3e8] p-[10px] font-medium text-[#000000] focus:bg-[#ff0018] hover:text-white focus:outline-none hover:bg-[#ff0018]">
        Today
      </button>

      <button className="shrink-0 rounded bg-[#e4e3e8] p-[10px] font-medium text-[#000000] focus:bg-[#ff0018] hover:text-white focus:outline-none hover:bg-[#ff0018]">
        Yesterday
      </button>

      <button className="shrink-0 rounded bg-[#e4e3e8] p-[10px] font-medium text-[#000000] focus:bg-[#ff0018] hover:text-white focus:outline-none hover:bg-[#ff0018]">
        Last 7 Days
      </button>

      <button className="shrink-0 rounded bg-[#e4e3e8] p-[10px] font-medium text-[#000000] focus:bg-[#ff0018] hover:text-white focus:outline-none hover:bg-[#ff0018]">
        This Month
      </button>

      <button className="shrink-0 rounded bg-[#e4e3e8] p-[10px] font-medium text-[#000000] focus:bg-[#ff0018] hover:text-white focus:outline-none hover:bg-[#ff0018]">
        Last Month
      </button>

      <button className="shrink-0 rounded bg-[#e4e3e8] p-[10px] font-medium text-[#000000] hover:text-white focus:bg-[#ff0018] focus:outline-none hover:bg-[#ff0018]">
        Till Now
      </button>
    </div>
  );
};

export default Today_Order_filter;
