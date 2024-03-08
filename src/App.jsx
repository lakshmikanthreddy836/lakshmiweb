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
import ViewResturant from "./pages/Restaurant/View/ViewResturant";
import ImportRestaurant from "./pages/Restaurant/View/components/UploadRestaurant";
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
            <Route path="/view-resturant" element={<ViewResturant />} />
            <Route path="/food-menu" element={<FoodMenu />} />
            <Route path="/importRestaurant" element={<ImportRestaurant />} />
            <Route path="/add-train" element={<AddTrain />} />
            <Route path="/today-orders" element={<TodayOrders />} />
            <Route path="group-orders" element={<Grouporder />} />
            <Route path="/tour-operator" element={<TourOperator />} />
            <Route path="/add-station" element={<Add_Station />} />
            <Route path="/ticketing-agent" element={<Ticket_Agent />} />
            <Route path="/view_ticket_agent" element={<View_ticket_agent />} />
            <Route path="/add-restaurant" element={<Add_Restaurant />} />
            <Route
              path="/Add_Ticket_Agent_form"
              element={<Add_Ticket_Agent_form />}
            />
            <Route
              path="/view_Tour_Operator"
              element={<View_Tour_Operator />}
            />
            <Route
              path="/Add_Ticket_Agent_form"
              element={<Add_Ticket_Agent_form />}
            />
            <Route
              path="/add-tour-operator"
              element={<Add_Tour_Operator_form />}
            />
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
