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
import Review from "./pages/review/Review";
import Setting from "./pages/setting/Setting";
import HomeContent from "./pages/setting/homecontent/HomeContent";
import Category from "./pages/setting/category/Category";
import Enquiry from "./pages/enquiry/Enquiry";
import KeyWord from "./pages/enquiry/serachkeyword/KeyWord";
import VendorList from "./pages/vendorlist/VendorList";
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
            <Route path="/group-orders" element={<Grouporder />} />
            <Route path="/reviews" element={<Review />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/homecontent" element={<HomeContent />} />
            <Route path="/category" element={<Category />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/searchkeyword" element={<KeyWord />} />
            <Route path="/vendorlist" element={<VendorList />} />
          </Routes>
        </Layout>
      )}
    </div>
  );
}

export default App;
