const Today_Order_filter = () => {
  return (
    <div className="flex flex-row justify-between">
      <button className="shrink-0 rounded bg-[#e4e3e8] w-[350px] h-9 font-medium text-[#000000] focus:bg-[#ff0018] hover:text-white focus:outline-none hover:bg-[#ff0018]">
        Today
      </button>

      <button className="shrink-0 rounded bg-[#e4e3e8] w-[350px] h-9 font-medium text-[#000000] focus:bg-[#ff0018] hover:text-white focus:outline-none hover:bg-[#ff0018]">
        Yesterday
      </button>
      <div className="w-[350px] bg-white">
        <input
          type="date"
          className="border-[1px] h-9 w-full bg-gray-300 border-[#aaa] rounded-[4px] text-black"
        />
      </div>
      <button className="bg-red-500 shadow-lg rounded-[5px] px-3 h-12">Date Filter</button>
    </div>
  );
};

export default Today_Order_filter;
