import "./App.css";
import Login from "./Auth/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
