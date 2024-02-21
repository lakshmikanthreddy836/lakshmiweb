const Add_Tour_Operator_form = () => {
  return (
    <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
      <div className="overflow-y-auto p-3 overflow-visible h-fit">
        <div className="bg-white p-2 shadow-md flex justify-between">
          <div className="bg-[#ff0018] p-2 text-sm rounded text-white">
            <p className="text-sm pl-5 pr-5 ">Tour Operator List</p>
          </div>
        </div>

        <div className="bg-white p-2 mt-10 shadow-md grid grid-flow-col justify-stretch">
          <div>
            <p>Tour Operator Details</p>
            <form className="mt-10"></form>
          </div>
          <div className="text-start">
            <p>Address Details</p>
            <form className="mt-10"></form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_Tour_Operator_form;
