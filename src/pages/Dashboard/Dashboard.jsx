import MyChart from "./Graph";
const Dashboard = () => {
  return (
    <>
      <h2 className="my-2 text-3xl mx-4 p-2 w-4/12 font-bold">Dashboard</h2>
      <section className="flex justify-between">
        <div
          className="overflow-x-auto my-2 mx-4 p-2 w-4/12"
          style={{ boxShadow: "0px 2px 5px 5px rgba(0,0,0,0.1)" }}
        >
          <table className="table-auto w-full">
            <thead>
              <th className="px-2 py-2">Todays Order</th>
              <th className="px-2 py-2">7</th>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100 border-b">
                <td className="px-4 py-2 text-blue-600 font-bold">
                  Payment Awaited
                </td>
                <td className="px-4 py-2 font-bold text-black">0/7 (0%)</td>
              </tr>
              <tr className="hover:bg-gray-100 border-b">
                <td className="px-4 py-2 text-blue-600 font-bold">New</td>
                <td className="px-4 py-2 font-bold text-black">0/7 (0%)</td>
              </tr>
              <tr className="hover:bg-gray-100 border-b">
                <td className="px-4 py-2 text-blue-600 font-bold">Delivered</td>
                <td className="px-4 py-2 font-bold text-black">0/7 (0%)</td>
              </tr>
              <tr className="hover:bg-gray-100 border-b">
                <td className="px-4 py-2 text-blue-600 font-bold">Placed</td>
                <td className="px-4 py-2 font-bold text-black">1/7 (14%)</td>
              </tr>
              <tr className="hover:bg-gray-100 border-b">
                <td className="px-4 py-2 text-blue-600 font-bold">Accepted</td>
                <td className="px-4 py-2 font-bold text-black">6/7 (86%)</td>
              </tr>
              <tr className="hover:bg-gray-100 border-b">
                <td className="px-4 py-2 text-blue-600 font-bold">Cancelled</td>
                <td className="px-4 py-2 font-bold text-black">0/7 (0%)</td>
              </tr>
              <tr className="hover:bg-gray-100 border-b">
                <td className="px-4 py-2 text-blue-600 font-bold">
                  Undelivered
                </td>
                <td className="px-4 py-2 font-bold text-black">0/7 (0%)</td>
              </tr>
              <tr className="hover:bg-gray-100 border-b">
                <td className="px-4 py-2 text-blue-600 font-bold">Discount</td>
                <td className="px-4 py-2 font-bold text-black">0/7 (0%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          style={{ boxShadow: "0px 2px 5px 5px rgba(0,0,0,0.1)" }}
          className="my-2 mx-4 p-2 h-3/4"
        >
          <h2 className="mx-4 mt-4 text-black font-bold">BAR GRAPH</h2>
          <hr className="my-4" />
          <p className="my-3 text-center font-bold text-gray-600 text-lg">
            Total Orders
          </p>
          <MyChart />
        </div>
        <div
          style={{ boxShadow: "0px 2px 5px 5px rgba(0,0,0,0.1)" }}
          className="overflow-x-auto  my-2 mx-4 p-2"
        >
          <h2 className="text-center text-black font-bold text-2xl">
            Order Values (In Rupees) 1801.8
          </h2>
          <table className="table-auto w-full border">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Type</th>
                <th className="px-4 py-2 border">Rs.</th>
                <th className="px-4 py-2 border">(%)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100 border-b border-gray-400">
                <td className="px-4 py-2 border border-gray-400">Organic</td>
                <td className="px-4 py-2 border border-gray-400">
                  1,801.00/1801.8
                </td>
                <td className="px-4 py-2 border border-gray-400">99.96%</td>
              </tr>
              <tr className="hover:bg-gray-100 border-b border-gray-400">
                <td className="px-4 py-2 border border-gray-400">
                  Tour Operator
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  0.00/1801.8
                </td>
                <td className="px-4 py-2 border border-gray-400">0.00%</td>
              </tr>
              <tr className="hover:bg-gray-100 border-b border-gray-400">
                <td className="px-4 py-2 border border-gray-400">
                  Ticketing Agent
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  0.00/1801.8
                </td>
                <td className="px-4 py-2 border border-gray-400">0.00%</td>
              </tr>
              <tr className="hover:bg-gray-100 border-b border-gray-400">
                <td className="px-4 py-2 border border-gray-400">Delivered</td>
                <td className="px-4 py-2 border border-gray-400">
                  0.00/1801.8
                </td>
                <td className="px-4 py-2 border border-gray-400">0.00%</td>
              </tr>
              <tr className="hover:bg-gray-100 border-b border-gray-400">
                <td className="px-4 py-2 border border-gray-400">Canceled</td>
                <td className="px-4 py-2 border border-gray-400">
                  0.00/1801.8
                </td>
                <td className="px-4 py-2 border border-gray-400">0.00%</td>
              </tr>
              <tr className="hover:bg-gray-100 border-b border-gray-400">
                <td className="px-4 py-2 border border-gray-400">
                  Undelivered
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  0.00/1801.8
                </td>
                <td className="px-4 py-2 border border-gray-400">0.00%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
