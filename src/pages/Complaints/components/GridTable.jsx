const tableData = [
  {
    complaintID: "0263289400",
    orderID: "64-682-5393",
    CustomerName: "Angelita",
    mobile: "aostrich0@google.de",
    restaurantName: "Rhynoodle",
    status: true,
    date: "1/5/2024",
    lastUpdate: "8/24/2023",
    action: "6/19/2023",
  },
  {
    complaintID: "0718701410",
    orderID: "90-870-5069",
    CustomerName: "Inge",
    mobile: "imcconachie1@woothemes.com",
    restaurantName: "Twitterlist",
    status: false,
    date: "10/6/2023",
    lastUpdate: "3/14/2023",
    action: "11/8/2023",
  },
  {
    complaintID: "3226609203",
    orderID: "59-313-2428",
    CustomerName: "Hyacinthie",
    mobile: "hroyl2@chron.com",
    restaurantName: "Kazio",
    status: true,
    date: "10/16/2023",
    lastUpdate: "4/4/2023",
    action: "5/27/2023",
  },
  {
    complaintID: "5261198097",
    orderID: "77-200-1819",
    CustomerName: "Carlen",
    mobile: "cstranger3@sohu.com",
    restaurantName: "Gevee",
    status: true,
    date: "9/14/2023",
    lastUpdate: "2/14/2023",
    action: "2/26/2023",
  },
  {
    complaintID: "1999763270",
    orderID: "89-534-1503",
    CustomerName: "Lawton",
    mobile: "lurian4@qq.com",
    restaurantName: "Yodoo",
    status: false,
    date: "9/27/2023",
    lastUpdate: "1/24/2024",
    action: "10/27/2023",
  },
  {
    complaintID: "2169606440",
    orderID: "19-811-5913",
    CustomerName: "Emlynne",
    mobile: "edash5@histats.com",
    restaurantName: "Kanoodle",
    status: true,
    date: "5/28/2023",
    lastUpdate: "12/26/2023",
    action: "6/12/2023",
  },
  {
    complaintID: "9928575991",
    orderID: "69-364-6738",
    CustomerName: "Franzen",
    mobile: "fwickwarth6@smugmug.com",
    restaurantName: "Meembee",
    status: true,
    date: "5/14/2023",
    lastUpdate: "7/29/2023",
    action: "11/14/2023",
  },
  {
    complaintID: "9823955832",
    orderID: "79-943-9859",
    CustomerName: "Kissiah",
    mobile: "kaddeycott7@mysql.com",
    restaurantName: "Izio",
    status: true,
    date: "12/18/2023",
    lastUpdate: "3/22/2023",
    action: "3/30/2023",
  },
  {
    complaintID: "7344369974",
    orderID: "74-406-1991",
    CustomerName: "Tadd",
    mobile: "tkislingbury8@ft.com",
    restaurantName: "Livetube",
    status: true,
    date: "12/27/2023",
    lastUpdate: "11/17/2023",
    action: "2/19/2023",
  },
  {
    complaintID: "5067031433",
    orderID: "34-079-6546",
    CustomerName: "Florentia",
    mobile: "fgwin9@amazon.com",
    restaurantName: "Zoomcast",
    status: true,
    date: "1/18/2024",
    lastUpdate: "3/11/2023",
    action: "4/21/2023",
  },
];
function GridTable() {
  return (
    <div className="overflow-x-auto px-5 h-fit">
      <table
        id="example"
        className="min-w-full divide-y divide-gray-200 text-black"
      >
        <thead className="bg-gray-200 ">
          <tr>
            <th className="px-4 py-2">Complaint ID</th>
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">CustomerName</th>
            <th className="px-4 py-2">Mobile</th>
            <th className="px-4 py-2">RestaurantName</th>
            <th className="px-4 py-2">status</th>
            <th className="px-4 py-2">date</th>
            <th className="px-4 py-2">Last Update</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => {
            return (
              <tr key={data.complaintID}>
                <td className="border px-4 py-2">{data.complaintID}</td>
                <td className="border px-4 py-2">{data.orderID}</td>
                <td className="border px-4 py-2">{data.CustomerName}</td>
                <td className="border px-4 py-2">{data.mobile}</td>
                <td className="border px-4 py-2">{data.restaurantName}</td>
                <td className="border px-4 py-2">{data.status}</td>
                <td className="border px-4 py-2">{data.date}</td>
                <td className="border px-4 py-2">{data.lastUpdate}</td>
                <td className="border px-4 py-2">
                  <div>
                    <button
                      className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      View
                    </button>
                    <button
                      className="bg-red-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GridTable;
