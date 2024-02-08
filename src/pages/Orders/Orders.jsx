import Filter_Grid_Table from "./components/Filter_Grid";
import Grid_Button from "./components/grid-button";
import Grid_Status from "./components/grid_status";

const Orders = () => {
  return (
    <div className="bg-white">
      <Grid_Button />
      <Grid_Status />
      <Filter_Grid_Table />
    </div>
  );
};

export default Orders;
