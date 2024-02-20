import Delete from "./../../assets/Icons/Delete"; // Assuming Eye and Delete are custom icon components

const MyComponent = () => {
  const myData = [
    {
      id: 1,
      date: "25-09-2023",
      name: "Sanjeev Kumar",
      rating: 4.5,
      review: "Ordered food in train at Ahmedabad Station. The food was good.",
    },
    {
      id: 2,
      date: "20-08-2023",
      name: "Ravi Shankar",
      rating: 4.6,
      review: "Ordered food in train at Rajamundri. The food was good.",
    },
    {
      id: 3,
      date: "20-08-2023",
      name: "Rohit Chauhan",
      rating: 4.5,
      review: "Ordered food at Ambala Cntt. The food was good.",
    },
    {
      id: 4,
      date: "01-08-2023",
      name: "Rakesh Kumar",
      rating: 4.5,
      review: "Ordered food at Kanpur Central, The food was good.",
    },
    {
      id: 5,
      date: "28-06-2023",
      name: "Kamlesh Tiwari",
      rating: 4.7,
      review: "Best quality food delivered on seat. Thanks to Railkafe.",
    },
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
        <div className="overflow-x-auto w-full h-fit mt-4 px-8">
          <div className="flex flex-col w-fit h-fit ">
            <div className="flex w-full border-b-[1px] border-[#aaa] h-[40px]">
              <div className="w-[50px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">#</p>
              </div>
              <div className="w-[130px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Date</p>
              </div>
              <div className="w-[130px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Name</p>
              </div>
              <div className="w-[130px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Rating</p>
              </div>
              <div className="w-[490px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Review</p>
              </div>
              <div className="w-[150px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Action</p>
              </div>
            </div>
            <div className="flex flex-col">
              {myData?.map((data, index) => (
                <div
                  className="flex w-fit  h-[50px] items-center border-b-[1px] border-[#aaa]"
                  key={index}
                >
                  <div className="w-[50px] flex items-center h-9">
                    <p className="text-[15px] text-black">{index + 1}</p>
                  </div>
                  <div className="w-[130px] flex items-center h-9">
                    <p className="text-[15px] text-black">{data.date}</p>
                  </div>
                  <div className="w-[130px] flex items-center h-9">
                    <p className="text-[15px] text-black">{data.name}</p>
                  </div>
                  <div className="w-[130px] flex items-center h-9">
                    <p className="text-[15px] text-black">{data.rating}</p>
                  </div>
                  <div className="w-[490px] flex items-center h-9">
                    <p className="text-[15px] text-black">{data.review}</p>
                  </div>
                  <div className="w-[150px] flex items-center h-9">
                    <p className="text-[15px] text-center text-black flex gap-4">
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

export default MyComponent;
