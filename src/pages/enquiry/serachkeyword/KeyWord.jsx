import KeyWordTable from "./KeyWordTable";
const KeyWord = () => {
  return (
    <section>
      <div>
        <h2 className="text-center my-4 mx-auto font-semibold text-2xl">
          Search Keyword
        </h2>
      </div>
      <div className="border border-gray-300 mx-4">
        <KeyWordTable />
      </div>
    </section>
  );
};

export default KeyWord;
