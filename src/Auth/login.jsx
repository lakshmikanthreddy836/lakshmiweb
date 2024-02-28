import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";
import logo from "../assets/logo.png";
import "./login.css";
import { loginAdmin } from "../Services/User";
import { useState, useEffect } from "react";
import ShowErrorMessages from "../alert-messages/ShowErrorMessages";
import ShowSucessmessages from "../alert-messages/ShowSucessmessages";
import Loader from "../Loader/Loader";
const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    let loginToken = localStorage.getItem("token");
    if (loginToken) {
      navigate("/home");
    }
  }, []);
  const handleLogin = async () => {
    // navigate("/home");x

    // window.history.pushState(null, '', '/home');
    if (credentials.username == "") {
      ShowErrorMessages("Please enter the username", "Error");
    } else if (credentials.password == "") {
      ShowErrorMessages("Please enter the password", "Error");
    } else {
      setLoading(true);
      let response = await loginAdmin(
        credentials.username,
        credentials.password
      );
      console.log("response is", response);
      if (response?.success) {
        setLoading(false);
        const result = response.data;
        console.log("result is", result);
        localStorage.setItem("token", result.token);
        navigate("/home");
        ShowSucessmessages("Successfully logged in");
      }
    }
  };
  console.log("credentials", credentials);

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen w-screen">
      {loading && Loader(loading)}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt=""
          className="w-full h-full object-cover filter blur-sm  brightness-50"
        />
      </div>

      <div className="flex justify-center text-start z-10">
        <div className="p-12 bg-[#d3d3d3] mx-auto rounded-2xl w-100 ">
          <div className="mb-4">
            <img src={logo} alt="Rail Kafe" />
          </div>
          <div className="mb-4">
            <h1 className="text-2xl text-[#000000] font-[500]">
              Login To Account
            </h1>
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                UserName
              </label>
              <input
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded focus:outline-none focus:border-[#ff0018]"
                type="text"
                placeholder="mail@gmail.com"
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    username: e.target.value,
                  });
                }}
              />
            </div>
            <div className="space-y-2">
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded focus:outline-none focus:border-[#ff0018]"
                type={`${showPassword ? "text" : "password"}`}
                placeholder="Enter your password"
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 bg-[#ff0018] focus:ring-[#ff0018] border-gray-300 rounded cursor-pointer"
                  checked={showPassword ? true : false}
                  onChange={() => {
                    setShowPassword(!showPassword);
                  }}
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-800"
                >
                  Show Password
                </label>
              </div>
            </div>
            <div>
              <button
                onClick={handleLogin}
                type="button"
                className="w-full flex justify-center bg-[#ff0018] hover:bg-[#ff0018] text-gray-100 p-3  rounded tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
