const Form_Add_Restaurant = () => {
  return (
    <div className="bg-white w-full shadow-lg p-1 mb-20">
      <div className=" p-6 mx-auto bg-white rounded-md shadow-2xl  ">
        <h2 className="text-lg  font-semibold text-gray-700 capitalize dark:text-white">
          Restaurant Details
        </h2>

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Brand Name
              </label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Restaurant Name*
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Restaurant Type
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Min Order Value
              </label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Facilities
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Commission
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Station*
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">City</label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">State*</label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Order Before (Time)
              </label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Accept COD (For Payment)
              </label>
              <div className="flex ">
                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    name="sfg"
                  />
                  <div className="title px-2">Yes</div>
                </label>
                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    name="sfg"
                  />
                  <div className="title px-2">No</div>
                </label>
              </div>
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                API Access
              </label>
              <div className="flex ">
                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    name="sfg"
                  />
                  <div className="title px-2">Enable</div>
                </label>
                <label className="flex radio p-2 cursor-pointer">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    name="sfg"
                  />
                  <div className="title px-2">Disable</div>
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Station Distance
              </label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Sell Price Capping
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Group Order Discount
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="text-gray-900 text-lg mt-10 font-bold">
            Delivery Charges
          </div>
          <div className="grid grid-cols-1 gap-6 mt-2 sm:grid-cols-3">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Delivery Type
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Customer Dlivery Charges
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Vendor Delivery Charges
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="text-gray-900 text-lg mt-10 font-bold">
            Address of Restaurant
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Owner Name*
              </label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Owner Email
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Owner Number
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Owner KYC
              </label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Contact Person Name
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Contact Person No
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Restaurant Email
              </label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">Rating</label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Rating Count
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="text-gray-900 text-lg mt-10 font-bold">
            Bank Details
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Bank Name
              </label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Account No
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                IFSO Code
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Train Name
              </label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Train Number
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Train Number
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Train Name
              </label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Train Number
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Train Number
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="text-center p-5">
            <button className="text-center bg-red-500 text-white">
              Add Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form_Add_Restaurant;
