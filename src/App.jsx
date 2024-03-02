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
import Employee from "./pages/Employee/Employee";
import SalaryReport from "./pages/SalaryReport/SalaryReport";
import Expense from "./pages/Expense/Expense";
import Grouporder from "./pages/GroupOrders/Grouporder";
import AddFood from "./pages/FoodMenu/components/AddFood";
import TourOperator from "./pages/TourOperator/TourOperator";
import Add_Tour_Operator_form from "./pages/TourOperator/Components/AddTourOperator";
import Ticket_Agent from "./pages/TicketingAgent/TicketingAgent";
import Add_Ticket_Agent_form from "./pages/TicketingAgent/components/AddTicketAgentForm";
import View_Tour_Operator from "./pages/TourOperator/Components/ViewTourOperator";
import View_ticket_agent from "./pages/TicketingAgent/components/ViewTicketAgent";
import AddStation from "./pages/AddTrain/components/AddStation";
import Add_Restaurant from "./pages/AddRestaurants/AddRestaurant";
import Add_Station from "./pages/AddStation/addStation";
import Review from "./pages/review/Review";
import Setting from "./pages/setting/Setting";
import HomeContent from "./pages/setting/homecontent/HomeContent";
import Category from "./pages/setting/category/Category";
import Enquiry from "./pages/enquiry/Enquiry";
import KeyWord from "./pages/enquiry/serachkeyword/KeyWord";
import VendorList from "./pages/vendorlist/VendorList";
import ProtectedComponent from "./protected/protectedComponent";
import ImportTrain from "./pages/AddTrain/components/ImportTrain";
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
            <Route
              path="/home"
              element={<ProtectedComponent Component={Home} />}
            />
            <Route
              path="/orders"
              element={<ProtectedComponent Component={Orders} />}
            />
            <Route
              path="/complaints"
              element={<ProtectedComponent Component={Complaints} />}
            />
            <Route
              path="/restaurant"
              element={<ProtectedComponent Component={Restaurant} />}
            />
            <Route
              path="/employee"
              element={<ProtectedComponent Component={Employee} />}
            />
            <Route
              path="/expenses"
              element={<ProtectedComponent Component={Expense} />}
            />
            <Route
              path="/salary-report"
              element={<ProtectedComponent Component={SalaryReport} />}
            />
            <Route
              path="/food-menu"
              element={<ProtectedComponent Component={FoodMenu} />}
            />
            <Route
              path="/add-train"
              element={<ProtectedComponent Component={AddTrain} />}
            />
            <Route
              path="/today-orders"
              element={<ProtectedComponent Component={TodayOrders} />}
            />
            <Route
              path="group-orders"
              element={<ProtectedComponent Component={Grouporder} />}
            />
            <Route
              path="/tour-operator"
              element={<ProtectedComponent Component={TourOperator} />}
            />
            <Route
              path="/add-station"
              element={<ProtectedComponent Component={Add_Station} />}
            />
            <Route
              path="/ticketing-agent"
              element={<ProtectedComponent Component={Ticket_Agent} />}
            />
            <Route
              path="/view_ticket_agent"
              element={<ProtectedComponent Component={View_ticket_agent} />}
            />
            <Route
              path="/add-restaurant"
              element={<ProtectedComponent Component={Add_Restaurant} />}
            />
            <Route
              path="/Add_Ticket_Agent_form"
              element={<ProtectedComponent Component={Add_Ticket_Agent_form} />}
            />
            <Route
              path="/view_Tour_Operator"
              element={<ProtectedComponent Component={View_Tour_Operator} />}
            />
            <Route
              path="/Add_Ticket_Agent_form"
              element={<ProtectedComponent Component={Add_Ticket_Agent_form} />}
            />
            <Route
              path="/add-tour-operator"
              element={
                <ProtectedComponent Component={Add_Tour_Operator_form} />
              }
            />
            <Route
              path="/reviews"
              element={<ProtectedComponent Component={Review} />}
            />
            <Route
              path="/settings"
              element={<ProtectedComponent Component={Setting} />}
            />
            <Route
              path="/home-content"
              element={<ProtectedComponent Component={HomeContent} />}
            />
            <Route
              path="/category"
              element={<ProtectedComponent Component={Category} />}
            />
            <Route
              path="/enquiry"
              element={<ProtectedComponent Component={Enquiry} />}
            />
            <Route
              path="/search-keyword"
              element={<ProtectedComponent Component={KeyWord} />}
            />
            <Route
              path="/vendor-app"
              element={<ProtectedComponent Component={VendorList} />}
            />
            <Route
              path="import-train"
              element={<ProtectedComponent Component={ImportTrain} />}
            />
          </Routes>
        </Layout>
      )}
    </div>
  );
}

export default App;
