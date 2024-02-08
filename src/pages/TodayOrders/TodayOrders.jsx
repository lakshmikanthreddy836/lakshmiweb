import OrdersCard from "./components/OrderCards";
import Today_Order_filter from "./components/TodayFilter";

const TodayOrders = () => {
  return (
    <div className="bg-white h-full">
      <h2 className="text-2xl font-bold mb-4">Today Order</h2>
      <Today_Order_filter />
      <OrdersCard />
    </div>
  );
};

export default TodayOrders;
