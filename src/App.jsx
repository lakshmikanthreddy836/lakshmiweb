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
            <Route path="/reporting/employee" element={<Employee />} />
            <Route path="/reporting/expense" element={<Expense/>}/>
            <Route path="/reporting/salary" element={<SalaryReport />} />
            <Route path="/food-menu" element={<FoodMenu />} />
            <Route path="/add-train" element={<AddTrain />} />
            <Route path="/today-orders" element={<TodayOrders />} />
          </Routes>
        </Layout>
      )}
    </div>
  );
}

export default App;
