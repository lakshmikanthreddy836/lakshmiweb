import EnquiryTable from "./EnquiryTable";

const Enquiry = () => {
  return (
    <section>
      <div>
        <h2 className="text-center my-4 mx-auto font-semibold text-2xl">
          Contact Enquiry
        </h2>
      </div>
      <div className="border border-gray-300 mx-4">
        <EnquiryTable />
      </div>
    </section>
  );
};

export default Enquiry;
