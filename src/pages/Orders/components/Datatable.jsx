const Datatable = () => {
  return (
    <div className="overflow-x-auto  h-fit mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-1  px-4 py-3 mt-12 bg-white border-t border-gray-200 shadow-md sm:px-6">
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div
            className="relative z-0 flex justify-between w-full -space-x-px rounded-md"
            aria-label="Pagination"
          >
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
            <input
              type="text"
              placeholder="Search for the tool you like"
              className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
            />
          </div>
        </div>
      </div>
      <table id="example" className="table-auto w-full">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px-4 py-2">@</th>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Customer Name</th>
            <th className="px-4 py-2">Mobile</th>
            <th className="px-4 py-2">Station Name</th>
            <th className="px-4 py-2">Train No</th>
            <th className="px-4 py-2">Pay Mode</th>
            <th className="px-4 py-2">Restaurant Name (State)</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">DOD</th>
            <th className="px-4 py-2">Booking Date</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border px-4 py-2">
              <input type="checkbox" className=" " id="checkbox-1" checked />
            </td>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">RK6133131</td>
            <td className="border px-4 py-2">Anjana Ahluwalia</td>
            <td className="border px-4 py-2">9310108157</td>
            <td className="border px-4 py-2">Kota Junction (KOTA)</td>
            <td className="border px-4 py-2">12283</td>
            <td className="border px-4 py-2">
              <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                COD
              </p>
            </td>
            <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
            <td className="border px-4 py-2">246.7</td>
            <td className="border px-4 py-2">
              <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                Cancelled
              </p>
            </td>
            <td className="border px-4 py-2">2011/04/25</td>
            <td className="border px-4 py-2">07-12-202304:54:00AM</td>
            <td className="border px-4 py-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">
              <input type="checkbox" className=" " id="checkbox-1" checked />
            </td>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">RK6133131</td>
            <td className="border px-4 py-2">Anjana Ahluwalia</td>
            <td className="border px-4 py-2">9310108157</td>
            <td className="border px-4 py-2">Kota Junction (KOTA)</td>
            <td className="border px-4 py-2">12283</td>
            <td className="border px-4 py-2">
              <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                COD
              </p>
            </td>
            <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
            <td className="border px-4 py-2">246.7</td>
            <td className="border px-4 py-2">
              <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                Cancelled
              </p>
            </td>
            <td className="border px-4 py-2">2011/04/25</td>
            <td className="border px-4 py-2">07-12-202304:54:00AM</td>
            <td className="border px-4 py-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">
              <input type="checkbox" className=" " id="checkbox-1" checked />
            </td>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">RK6133131</td>
            <td className="border px-4 py-2">Anjana Ahluwalia</td>
            <td className="border px-4 py-2">9310108157</td>
            <td className="border px-4 py-2">Kota Junction (KOTA)</td>
            <td className="border px-4 py-2">12283</td>
            <td className="border px-4 py-2">
              <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                COD
              </p>
            </td>
            <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
            <td className="border px-4 py-2">246.7</td>
            <td className="border px-4 py-2">
              <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                Cancelled
              </p>
            </td>
            <td className="border px-4 py-2">2011/04/25</td>
            <td className="border px-4 py-2">07-12-202304:54:00AM</td>
            <td className="border px-4 py-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">
              <input type="checkbox" className=" " id="checkbox-1" checked />
            </td>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">RK6133131</td>
            <td className="border px-4 py-2">Anjana Ahluwalia</td>
            <td className="border px-4 py-2">9310108157</td>
            <td className="border px-4 py-2">Kota Junction (KOTA)</td>
            <td className="border px-4 py-2">12283</td>
            <td className="border px-4 py-2">
              <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                COD
              </p>
            </td>
            <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
            <td className="border px-4 py-2">246.7</td>
            <td className="border px-4 py-2">
              <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                Cancelled
              </p>
            </td>
            <td className="border px-4 py-2">2011/04/25</td>
            <td className="border px-4 py-2">07-12-202304:54:00AM</td>
            <td className="border px-4 py-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">
              <input type="checkbox" className=" " id="checkbox-1" checked />
            </td>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">RK6133131</td>
            <td className="border px-4 py-2">Anjana Ahluwalia</td>
            <td className="border px-4 py-2">9310108157</td>
            <td className="border px-4 py-2">Kota Junction (KOTA)</td>
            <td className="border px-4 py-2">12283</td>
            <td className="border px-4 py-2">
              <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                COD
              </p>
            </td>
            <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
            <td className="border px-4 py-2">246.7</td>
            <td className="border px-4 py-2">
              <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                Cancelled
              </p>
            </td>
            <td className="border px-4 py-2">2011/04/25</td>
            <td className="border px-4 py-2">07-12-202304:54:00AM</td>
            <td className="border px-4 py-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">
              <input type="checkbox" className=" " id="checkbox-1" checked />
            </td>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">RK6133131</td>
            <td className="border px-4 py-2">Anjana Ahluwalia</td>
            <td className="border px-4 py-2">9310108157</td>
            <td className="border px-4 py-2">Kota Junction (KOTA)</td>
            <td className="border px-4 py-2">12283</td>
            <td className="border px-4 py-2">
              <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                COD
              </p>
            </td>
            <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
            <td className="border px-4 py-2">246.7</td>
            <td className="border px-4 py-2">
              <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                Cancelled
              </p>
            </td>
            <td className="border px-4 py-2">2011/04/25</td>
            <td className="border px-4 py-2">07-12-202304:54:00AM</td>
            <td className="border px-4 py-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">
              <input type="checkbox" className=" " id="checkbox-1" checked />
            </td>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">RK6133131</td>
            <td className="border px-4 py-2">Anjana Ahluwalia</td>
            <td className="border px-4 py-2">9310108157</td>
            <td className="border px-4 py-2">Kota Junction (KOTA)</td>
            <td className="border px-4 py-2">12283</td>
            <td className="border px-4 py-2">
              <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                COD
              </p>
            </td>
            <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
            <td className="border px-4 py-2">246.7</td>
            <td className="border px-4 py-2">
              <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                Cancelled
              </p>
            </td>
            <td className="border px-4 py-2">2011/04/25</td>
            <td className="border px-4 py-2">07-12-202304:54:00AM</td>
            <td className="border px-4 py-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">
              <input type="checkbox" className=" " id="checkbox-1" checked />
            </td>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">RK6133131</td>
            <td className="border px-4 py-2">Anjana Ahluwalia</td>
            <td className="border px-4 py-2">9310108157</td>
            <td className="border px-4 py-2">Kota Junction (KOTA)</td>
            <td className="border px-4 py-2">12283</td>
            <td className="border px-4 py-2">
              <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                COD
              </p>
            </td>
            <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
            <td className="border px-4 py-2">246.7</td>
            <td className="border px-4 py-2">
              <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                Cancelled
              </p>
            </td>
            <td className="border px-4 py-2">2011/04/25</td>
            <td className="border px-4 py-2">07-12-202304:54:00AM</td>
            <td className="border px-4 py-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">
              <input type="checkbox" className=" " id="checkbox-1" checked />
            </td>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">RK6133131</td>
            <td className="border px-4 py-2">Anjana Ahluwalia</td>
            <td className="border px-4 py-2">9310108157</td>
            <td className="border px-4 py-2">Kota Junction (KOTA)</td>
            <td className="border px-4 py-2">12283</td>
            <td className="border px-4 py-2">
              <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                COD
              </p>
            </td>
            <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
            <td className="border px-4 py-2">246.7</td>
            <td className="border px-4 py-2">
              <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                Cancelled
              </p>
            </td>
            <td className="border px-4 py-2">2011/04/25</td>
            <td className="border px-4 py-2">07-12-202304:54:00AM</td>
            <td className="border px-4 py-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </td>
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">
              <input type="checkbox" className=" " id="checkbox-1" checked />
            </td>
            <td className="border px-4 py-2">1</td>
            <td className="border px-4 py-2">RK6133131</td>
            <td className="border px-4 py-2">Anjana Ahluwalia</td>
            <td className="border px-4 py-2">9310108157</td>
            <td className="border px-4 py-2">Kota Junction (KOTA)</td>
            <td className="border px-4 py-2">12283</td>
            <td className="border px-4 py-2">
              <p className="bg-yellow-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                COD
              </p>
            </td>
            <td className="border px-4 py-2">Khana.com(Rajasthan)</td>
            <td className="border px-4 py-2">246.7</td>
            <td className="border px-4 py-2">
              <p className="bg-red-500 px-2 py-0.5 font-semibold text-sm rounded-full text-white">
                Cancelled
              </p>
            </td>
            <td className="border px-4 py-2">2011/04/25</td>
            <td className="border px-4 py-2">07-12-202304:54:00AM</td>
            <td className="border px-4 py-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Datatable;
