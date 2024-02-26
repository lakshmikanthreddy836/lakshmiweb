import Delete from "./../../../assets/Icons/Delete";
import { IoMdCheckmark } from "react-icons/io";
const MyComponent = () => {
  const categoryData = [
    { id: 1, category: "Biryani", action: "" },
    { id: 2, category: "Chinese", action: "" },
    { id: 3, category: "Thali", action: "" },
    { id: 4, category: "Roti", action: "" },
    { id: 5, category: "Rice", action: "" },
    { id: 6, category: "Veg Main Course", action: "" },
    { id: 7, category: "South Indian", action: "" },
    { id: 8, category: "Non-Veg", action: "" },
    { id: 9, category: "Combo", action: "" },
    { id: 10, category: "Curd/ Salad/ Raita/ Papad", action: "" },
    { id: 11, category: "Sweets", action: "" },
    { id: 12, category: "Cakes & Pasteries", action: "" },
    { id: 13, category: "Beverages", action: "" },
    { id: 14, category: "Snacks", action: "" },
    { id: 15, category: "Beverages", action: "" },
    { id: 16, category: "Pizza", action: "" },
    { id: 17, category: "Tandoori", action: "" },
    { id: 18, category: "Jain", action: "" },
  ];

  return (
    <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
      <div className="overflow-y-auto p-3 overflow-visible h-fit">
        <div className="flex flex-row justify-between items-center  px-8">
          <div className="flex items-center gap-2 text-black">
            <p>Show</p>
            <div>
              <select
                id="entries"
                name="entries"
                className="mt-1 ml-2 px-1 h-8 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none rounded-md text-[15px]"
              >
                <option value="10">10</option>
                <option value="25" selected>
                  25
                </option>
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
        <div className="flex flex-col w-full h-fit">
          <div className="flex w-full justify-between border-b-[1px] border-[#aaa] h-[40px]">
            <div className="w-[50px] flex items-center h-9">
              <p className="font-bold text-[15px] text-black">#</p>
            </div>
            <div className="w-[250px] flex items-center h-9">
              <p className="font-bold text-[15px] text-black">Category</p>
            </div>
            <div className="w-[250px] flex items-center h-9">
              <p className="font-bold text-[15px] text-black">Action</p>
            </div>
          </div>
          <div className="flex flex-col">
            {categoryData.map((category, index) => (
              <div
                className="flex w-full justify-between  h-[50px] items-center border-b-[1px] border-[#aaa]"
                key={index}
              >
                <div className="w-[50px] flex items-center h-9">
                  <p className="text-[15px] text-black">{category.id}</p>
                </div>
                <div className="w-3/4 mx-auto flex items-center h-9 ">
                  <input
                    type="text"
                    value={category.category}
                    name=""
                    id=""
                    className=" w-3/4 mx-auto  px-2 py-1 text-base border-2 border-gray-300"
                  />
                </div>
                <div className="w-[250px] flex items-center h-9">
                  <IoMdCheckmark style={{ fontSize: "25px", color: "blue",margin:"10px" }} />
                  <Delete />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
