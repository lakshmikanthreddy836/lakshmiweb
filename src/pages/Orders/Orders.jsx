// import Layout from "../../Layout";

import Filter_Grid_Table_Order from "./components/filter_grid_table_order";
import Grid_Button_Order from "./components/grid_button_order";
import Grid_Status_Order from "./components/grid_status_order";
const Order = () => {
  return (
    <div className=" h-full w-full bg-white overflow-y-auto">
      <Grid_Button_Order></Grid_Button_Order>
      <Grid_Status_Order></Grid_Status_Order>
      <Filter_Grid_Table_Order></Filter_Grid_Table_Order>
    </div>
  );
};

export default Order;
