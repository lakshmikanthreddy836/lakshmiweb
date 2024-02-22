import Delete from "../../../assets/Icons/Delete";

const KeywordTable = () => {
  const data = [
    {
      id: 1,
      keyword: "Pnr - 8714575037",
      date: "22-02-2024 01:41:18 PM",
      action: "",
    },
    {
      id: 2,
      keyword: "Pnr - 4462661702",
      date: "22-02-2024 01:29:11 PM",
      action: "",
    },
    {
      id: 3,
      keyword: "Pnr - 2105601720",
      date: "22-02-2024 01:28:21 PM",
      action: "",
    },
    {
      id: 4,
      keyword: "Pnr - 8609918312",
      date: "22-02-2024 01:26:46 PM",
      action: "",
    },
    {
      id: 5,
      keyword: "Pnr - 6130711395",
      date: "22-02-2024 01:26:46 PM",
      action: "",
    },
    {
      id: 6,
      keyword: "Pnr - 8609918312",
      date: "22-02-2024 01:26:45 PM",
      action: "",
    },
    {
      id: 7,
      keyword: "Pnr - 8609918312",
      date: "22-02-2024 01:26:43 PM",
      action: "",
    },
    {
      id: 8,
      keyword: "Pnr - 8609918312",
      date: "22-02-2024 01:26:42 PM",
      action: "",
    },
    {
      id: 9,
      keyword: "Pnr - 2409474366",
      date: "22-02-2024 01:19:01 PM",
      action: "",
    },
    {
      id: 10,
      keyword: "Pnr - 2409474366",
      date: "22-02-2024 01:18:57 PM",
      action: "",
    },
    {
      id: 11,
      keyword: "Pnr - 4508246453",
      date: "22-02-2024 01:16:34 PM",
      action: "",
    },
    {
      id: 12,
      keyword: "Prashanthi Expr 18463",
      date: "22-02-2024 01:08:19 PM",
      action: "",
    },
    {
      id: 13,
      keyword: "ASR CSMT EXPRESS 11058",
      date: "22-02-2024 01:07:50 PM",
      action: "",
    },
    {
      id: 14,
      keyword: "Pnr - 2638603128",
      date: "22-02-2024 01:04:59 PM",
      action: "",
    },
    {
      id: 15,
      keyword: "Pnr - 4713025021",
      date: "22-02-2024 01:02:50 PM",
      action: "",
    },
    {
      id: 16,
      keyword: "Pnr - 2638603128",
      date: "22-02-2024 01:02:45 PM",
      action: "",
    },
    {
      id: 17,
      keyword: "Pnr - 8414159539",
      date: "22-02-2024 12:56:24 PM",
      action: "",
    },
    {
      id: 18,
      keyword: "Pnr - 2638674185",
      date: "22-02-2024 12:48:04 PM",
      action: "",
    },
    {
      id: 19,
      keyword: "Pnr - 6730788730",
      date: "22-02-2024 12:46:04 PM",
      action: "",
    },
    {
      id: 20,
      keyword: "Pnr - 2407777043",
      date: "22-02-2024 12:42:11 PM",
      action: "",
    },
    {
      id: 21,
      keyword: "BBS VSKP SF EXP 22819",
      date: "22-02-2024 12:38:22 PM",
      action: "",
    },
    {
      id: 22,
      keyword: "Pnr - 8511434926",
      date: "22-02-2024 12:34:56 PM",
      action: "",
    },
    {
      id: 23,
      keyword: "Pnr - 8511434926",
      date: "22-02-2024 12:34:54 PM",
      action: "",
    },
    {
      id: 24,
      keyword: "RKSH BME EXP 14887",
      date: "22-02-2024 12:26:44 PM",
      action: "",
    },
    {
      id: 25,
      keyword: "Pnr - 4162638500",
      date: "22-02-2024 12:26:39 PM",
      action: "",
    },
  ];

  return (
    <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
      <div className="overflow-y-auto p-3 overflow-visible h-fit">
        <div className="flex flex-row justify-between items-center px-5">
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
        <div className="overflow-x-auto w-full h-fit mt-4 px-4">
          <div className="flex flex-col w-full h-fit ">
            <div className="flex px-2 w-full justify-between border-b-[1px] border-[#aaa] h-auto">
              <div className="flex flex-row">
                <div className="w-[50px] flex items-center h-9">
                  <p className="font-bold text-[15px] text-black p-2">#</p>
                </div>
                <div className="w-[200px] flex items-center h-auto">
                  <p className="font-bold text-[15px] text-black p-2">Keyword</p>
                </div>
              </div>
              <div className="w-[200px] flex items-center h-auto">
                <p className="font-bold text-[15px] text-black p-2">Date</p>
              </div>
              <div className="w-[100px] flex items-center h-auto">
                <p className="font-bold text-[15px] text-black p-2">Action</p>
              </div>
            </div>
            <div className="flex flex-col">
              {data.map((item, index) => (
                <div
                  className={`flex px-2 w-full justify-between h-auto items-center border-b-[1px] border-[#aaa] ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-100`}
                  key={index}
                >
                  <div className="flex flex-row">
                    <div className="w-[50px] flex items-center h-auto">
                      <p className="text-[15px] text-black p-2">{item.id}</p>
                    </div>
                    <div className="w-[200px] flex items-center h-auto">
                      <p className="text-[15px] text-black p-2">{item.keyword}</p>
                    </div>
                  </div>
                  <div className="w-[200px] flex items-center h-auto">
                    <p className="text-[15px] text-black p-2">{item.date}</p>
                  </div>
                  <div className="w-[100px] flex items-center h-auto">
                    <p className="text-[15px] text-center text-black flex gap-4 p-2">
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

export default KeywordTable;
