import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";
import logo from "../assets/logo.png";
import "./login.css";
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <div className="bg-gray-100 flex mx-auto items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt=""
          className="w-full h-full object-cover filter blur-sm  brightness-50"
        />
      </div>

      <div className="flex justify-center text-start  z-10">
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
                type=""
                placeholder="mail@gmail.com"
              />
            </div>
            <div className="space-y-2">
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded focus:outline-none focus:border-[#ff0018]"
                type=""
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 bg-[#ff0018] focus:ring-[#ff0018] border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-800"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <button
                onClick={handleLogin}
                type="submit"
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
