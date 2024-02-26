import Table from "./../review/Table";
const Review = () => {
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
              <label htmlFor="">Name*</label>
              <input
                className="border border-gray-300 p-1 text-lg"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col mx-5">
              <label htmlFor="">Rating*</label>
              <input
                className="border border-gray-300 p-1 text-lg"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col mx-5">
              <label htmlFor="">Review*</label>
              <input
                className="border border-gray-300 p-1 text-lg"
                type="text"
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
        <Table />
      </section>
    </>
  );
};

export default Review;
