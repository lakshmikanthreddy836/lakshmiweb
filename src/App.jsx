import "./App.css";
import Login from "./Auth/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Layout from "./Layout";
function App() {
  return (
    <div className="w-full overflow-hidden h-full">
      <Router>
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
