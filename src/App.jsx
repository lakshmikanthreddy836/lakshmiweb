import "./App.css";
import Login from "./Auth/login";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/home";
import Layout from "./Layout";
import Orders from "./pages/Orders/Orders";
import Complaints from "./pages/Complaints/Complaints";
import Restaurant from "./pages/Restaurant/Restaurant";
import FoodMenu from "./pages/FoodMenu/FoodMenu";
import AddTrain from "./pages/AddTrain/AddTrain";
import TodayOrders from "./pages/TodayOrders/TodayOrders";
import Grouporder from "./pages/GroupOrders/Grouporder";
import TourOperator from "./pages/TourOperator/TourOperator";
import Add_Tour_Operator_form from "./pages/TourOperator/Components/AddTourOperator";
import Ticket_Agent from "./pages/TicketingAgent/TicketingAgent";
import Add_Ticket_Agent_form from "./pages/TicketingAgent/components/AddTicketAgentForm";
function App() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="w-full overflow-hidden h-full">
      {pathname == "/" ? (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/food-menu" element={<FoodMenu />} />
            <Route path="/add-train" element={<AddTrain />} />
            <Route path="/today-orders" element={<TodayOrders />} />
            <Route path="group-orders" element={<Grouporder />} />
            <Route path="/tour-operator" element={<TourOperator />} />
            <Route path="/ticketing-agent" element={<Ticket_Agent />} />
            <Route
              path="/Add_Ticket_Agent_form"
              element={<Add_Ticket_Agent_form />}
            />
            <Route
              path="/add-tour-operator"
              element={<Add_Tour_Operator_form />}
            />
          </Routes>
        </Layout>
      )}
    </div>
  );
}

export default App;
