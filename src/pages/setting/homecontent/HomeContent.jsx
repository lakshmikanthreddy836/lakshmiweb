import HomecontentTable from "./HomecontentTable";

const HomeContent = () => {
  return (
    <>
      <section
        style={{ boxShadow: "0px 2px 5px 5px rgba(0,0,0,0.1)" }}
        className="p-4 m-8 "
      >
        <div>
          <h1 className="text-justify font-bold text-2xl mb-3">Testimonials</h1>
          <hr className="mb-4" />
          <form
            action=""
            className="flex justify-start items-end flex-row mb-4"
          >
            <div className="flex flex-col mr-5">
              <label htmlFor="">Content-Type*</label>
              <select
                id="ContentType"
                name="ContentType"
                placeholder="Select Station"
                className=" border border-gray-300 p-1 text-lg"
              >
                <option value="All" selected="">
                  --Select--
                </option>
                <option value="homesliderbanner">Home Slider Banner</option>
                <option value="latestorder">Latest Order</option>
                <option value="grouporder">Group Order</option>
              </select>
            </div>
            <div className="flex flex-col mx-5">
              <label htmlFor="">Alt Attribute*</label>
              <input
                className="border border-gray-300 p-1 text-lg"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col mx-5">
              <label htmlFor="">Image*</label>
              <input
                className="border border-gray-300 p-1 "
                type="file"
                accept="image/*"
                name=""
                id=""
              />
            </div>
            <button className="px-3 py-2 rounded-md text-white  bg-red-600">
              Save
            </button>
          </form>
        </div>
      </section>
      <section
        style={{ boxShadow: "0px 2px 5px 5px rgba(0,0,0,0.1)" }}
        className="p-4 mx-8 mt-6"
      >
        <HomecontentTable />
      </section>
    </>
  );
};

export default HomeContent;
