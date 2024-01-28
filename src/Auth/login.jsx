const Login = () => {
  return (
    <div class="bg-gray-100  flex items-center justify-center">
      <div class="absolute inset-0 z-0">
        <img
          src="https://i.ibb.co/J2BzKJr/vecteezy-food-background-food-menu-backround-14533873.jpg"
          alt=""
          class="w-full h-full object-cover filter  brightness-50"
        />
      </div>

      <div class="flex justify-center text-start  z-10">
        <div class="p-12 bg-white mx-auto rounded-2xl w-100 ">
          <div class="mb-4">
            <h3 class="font-semibold text-2xl  text-gray-800">Rail Kafe</h3>
          </div>
          <div class="space-y-5">
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700 tracking-wide">
                Email
              </label>
              <input
                class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-[#ff0018]"
                type=""
                placeholder="mail@gmail.com"
              />
            </div>
            <div class="space-y-2">
              <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input
                class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-[#ff0018]"
                type=""
                placeholder="Enter your password"
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  class="h-4 w-4 bg-[#ff0018] focus:ring-[#ff0018] border-gray-300 rounded"
                />
                <label
                  for="remember_me"
                  class="ml-2 block text-sm text-gray-800"
                >
                  Remember me
                </label>
              </div>
              <div class="text-sm">
                <a href="#" class="text-[#ff0018] hover:text-[#ff0018]">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="w-full flex justify-center bg-[#ff0018] hover:bg-[#ff0018] text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
              >
                Sign in
              </button>
            </div>
          </div>
          <div class="pt-5 text-center text-gray-400 text-xs">
            <span>
              Copyright © 2024
              <a
                rel=""
                target="_blank"
                class="text-green hover:text-[#ff0018] "
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
