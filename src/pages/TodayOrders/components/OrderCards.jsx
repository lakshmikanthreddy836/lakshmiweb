const OrdersCard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className=" px-10  mx-auto">
        {/* <div className="flex flex-wrap w-full mb-8">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">
              Statistic
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div> */}
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
            <div className="bg-indigo-500 rounded-lg p-2 xl:p-6">
              <h2 className="title-font font-medium sm:text-2xl text-xl text-white">
                Total
              </h2>
              <p className="leading-relaxed mt-5 text-gray-100 font-bold">0</p>
            </div>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <div className="bg-indigo-500 rounded-lg p-2 xl:p-6">
              <h2 className="title-font font-medium sm:text-2xl text-xl text-white">
                New
              </h2>
              <p className="leading-relaxed mt-5 text-gray-100 font-bold">0</p>
            </div>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <div className="bg-indigo-500 rounded-lg p-2 xl:p-6">
              <h2 className="title-font font-medium sm:text-2xl text-xl text-white">
                Delivered
              </h2>
              <p className="leading-relaxed mt-5 text-gray-100 font-bold">0</p>
            </div>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <div className="bg-indigo-500 rounded-lg p-2 xl:p-6">
              <h2 className="title-font font-medium sm:text-2xl text-xl text-white">
                Cancelled
              </h2>
              <p className="leading-relaxed mt-5 text-gray-100 font-bold">0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrdersCard;
