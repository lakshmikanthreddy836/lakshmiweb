import React from "react";
import Title from "../../common-components/Title";
import GridTable from "./components/GridTable";
import Button from "../../common-components/Button";

function Restaurant() {
  return (
    <div className="bg-white pl-4">
      <Title title={"Restaurant List"}>
        <Button className="bg-red-600 text-white px-2 py-1.5 rounded-md">
          Active Station 115
        </Button>
      </Title>
      <GridTable />
    </div>
  );
}

export default Restaurant;
