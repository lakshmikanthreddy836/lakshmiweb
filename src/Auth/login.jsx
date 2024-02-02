const Login = () => {
  return (
    <div className="bg-gray-100  flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.ibb.co/J2BzKJr/vecteezy-food-background-food-menu-backround-14533873.jpg"
          alt=""
          className="w-full h-full object-cover filter  brightness-50"
        />
      </div>

      <div className="flex justify-center text-start  z-10">
        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
          <div className="mb-4">
            <h3 className="font-semibold text-2xl  text-gray-800">Rail Kafe</h3>
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Email
              </label>
              <input
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-[#ff0018]"
                type=""
                placeholder="mail@gmail.com"
              />
            </div>
            <div className="space-y-2">
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-[#ff0018]"
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
              <div className="text-sm">
                <a href="#" className="text-[#ff0018] hover:text-[#ff0018]">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center bg-[#ff0018] hover:bg-[#ff0018] text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
              >
                Sign in
              </button>
            </div>
          </div>
          <div className="pt-5 text-center text-gray-400 text-xs">
            <span>
              Copyright © 2024
              <a
                rel=""
                target="_blank"
                className="text-green hover:text-[#ff0018] "
              >
                RailKafe
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
