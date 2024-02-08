import React from "react";
import GridButton from "./components/GridButton";
import GridTable from "./components/GridTable";
import Title from "../../common-components/Title";
const Complaints = () => {
  return (
    <div className=" h-full w-full bg-white overflow-y-auto">
        <Title title={"Orders"} />
        <GridButton />
        <GridTable />
    </div>
  );
};

export default Complaints;
