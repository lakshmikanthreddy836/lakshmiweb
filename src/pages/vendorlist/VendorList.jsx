import VendorTable from "./VendorTable";

const VendorList = () => {
  return (
    <section>
      <div
        style={{ boxShadow: "0px 2px 5px 5px rgba(0,0,0,0.1)" }}
        className="p-1 mx-4 my-4 mb-8"
      >
        <h2 className="text-center my-4 mx-auto font-semibold text-2xl">
          Vendor List
        </h2>
      </div>
      <div className="mx-6">
        <VendorTable />
      </div>
      <div
        style={{ boxShadow: "0px 2px 5px 5px rgba(0,0,0,0.1)" }}
        className="p-2  my-4 mx-4"
      >
        <div className="flex flex-wrap flex-row justify-between items-start">
          <p className="font-bold mx-5 my-2">Total Active : 185</p>
          <p className="font-bold mx-5 my-2">Temporary Close : 0</p>
          <p className="font-bold mx-5 my-2">Account Issused : 0</p>
          <p className="font-bold mx-5 my-2">Veg : 31</p>
        </div>
        <div className="flex flex-wrap flex-row justify-between items-start ">
          <p className="font-bold mx-5 my-2">Total In-Active : 0</p>
          <p className="font-bold mx-5 my-2">Permanently Close : 0</p>
          <p className="font-bold mx-5 my-2">Non-Delivery Issused :0</p>
          <p className="font-bold mx-5 my-2">Non-Veg : 0</p>
        </div>
      </div>
    </section>
  );
};

export default VendorList;
