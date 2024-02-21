import Delete from "./../../assets/Icons/Delete";
import Eye from "./../../assets/Icons/Eye";
const MyComponent = () => {
  const userData = [
    {
      name: "Abhishek Jha",
      email: "Jhaa23810@gmail.com",
      phone: "6204961542",
      password: "987654321",
      joinDate: "19-01-2024",
    },
    {
      name: "Anant Raj",
      email: "rajanant4245@gmail.com",
      phone: "6200761386",
      password: "Anant1235V",
      joinDate: "28-04-2023",
    },
    {
      name: "Ashutosh",
      email: "ashutoshupadhyay805@gmail.com",
      phone: "7033069799",
      password: "Ashutosh11",
      joinDate: "21-09-2023",
    },
    {
      name: "Karan Kumar",
      email: "karan595kumar@gmail.com",
      phone: "8271556935",
      password: "987654321",
      joinDate: "27-01-2024",
    },
    {
      name: "Lucky",
      email: "anand853904353@gmail.com",
      phone: "8539043531",
      password: "Anand15987",
      joinDate: "17-05-2023",
    },
    {
      name: "Mukesh Barnwal accounts",
      email: "mukesh21barnwal93@gmail.com",
      phone: "7488714381",
      password: "123456789",
      joinDate: "05-01-2024",
    },
    {
      name: "Neha Mishra",
      email: "nehamishra161999@gmail.com",
      phone: "9693293437",
      password: "123456",
      joinDate: "27-11-2023",
    },
    {
      name: "Pankaj Kumar",
      email: "pk6993193@gmail.com",
      phone: "9508931742",
      password: "987654321",
      joinDate: "30-01-2024",
    },
    {
      name: "Partho Das",
      email: "partho",
      phone: "8084986417",
      password: "Partho@83",
      joinDate: "28-06-2023",
    },
    {
      name: "Prem Kumar Jha",
      email: "premkumarjha930484@gmail.com",
      phone: "9304842856",
      password: "123456",
      joinDate: "27-11-2023",
    },
    {
      name: "Punam",
      email: "Punam123@gmail.com",
      phone: "1234567890",
      password: "punam@83",
      joinDate: "13-12-2023",
    },
    {
      name: "Rishav Kumar Singh",
      email: "Rishavkumarsingh475@gmail.com",
      phone: "9006825450",
      password: "987654321",
      joinDate: "30-01-2024",
    },
    {
      name: "Sachin Kumar",
      email: "kumar.sachin6464@gmail.com",
      phone: "6202545213",
      password: "9876543210",
      joinDate: "15-02-2024",
    },
    {
      name: "Shubham Kumar",
      email: "shubho3867@gmail.com",
      phone: "8434830480",
      password: "987654321",
      joinDate: "30-01-2024",
    },
    {
      name: "Test Id",
      email: "Anantraj4241@gmail.com",
      phone: "6200761386",
      password: "Test_2020",
      joinDate: "27-11-2023",
    },
  ];

  return (
    <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
      <div className="overflow-y-auto p-3 overflow-visible h-fit">
        <div className="flex flex-row justify-between items-center  px-8">
          <div className="flex items-center gap-2 text-black">
            <p>Show</p>
            <div>
              <select
                id="entries"
                name="entries"
                className="mt-1 ml-2 px-1 h-8 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none rounded-md text-[15px]"
              >
                <option value="10">10</option>
                <option value="25" selected>
                  25
                </option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <p>entries</p>
          </div>
          <div className="flex items-center">
            <p className="text-[15px] text-black">Search: </p>
            <input
              type="text"
              className="bg-white text-black pl-2 border-[1px] border-[#aaa] ml-1 h-8 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col w-full  h-fit">
          <div className="flex w-full justify-between border-b-[1px] border-[#aaa] h-[40px]">
            <div className="w-[130px] flex items-center h-9">
              <p className="font-bold text-[15px] text-black">Name</p>
            </div>
            <div className="w-[220px] flex items-center h-9">
              <p className="font-bold text-[15px] text-black">Email</p>
            </div>
            <div className="w-[160px] flex items-center h-9">
              <p className="font-bold text-[15px] text-black">Phone</p>
            </div>
            <div className="w-[130px] flex items-center h-9">
              <p className="font-bold text-[15px] text-black">Password</p>
            </div>
            <div className="w-[130px] flex items-center h-9">
              <p className="font-bold text-[15px] text-black">Join Date</p>
            </div>
            <div className="w-[150px] flex items-center h-9">
              <p className="font-bold text-[15px] text-black">Action</p>
            </div>
          </div>
          <div className="flex flex-col">
            {userData.map((user, index) => (
              <div
                className="flex w-full justify-between  h-[50px] items-center border-b-[1px] border-[#aaa]"
                key={index}
              >
                <div className="w-[130px] flex items-center h-9">
                  <p className="text-[15px] text-black">{user.name}</p>
                </div>
                <div className="w-[220px] flex items-center h-9">
                  <p className="text-[15px] text-black">{user.email}</p>
                </div>
                <div className="w-[160px] flex items-center h-9">
                  <p className="text-[15px] text-black">{user.phone}</p>
                </div>
                <div className="w-[130px] flex items-center h-9">
                  <p className="text-[15px] text-black">{user.password}</p>
                </div>
                <div className="w-[130px] flex items-center h-9">
                  <p className="text-[15px] text-black">{user.joinDate}</p>
                </div>
                <div className="w-[150px] flex items-center h-9">
                  <p className="text-[15px] text-black flex gap-4">
                    <Eye />
                    <Delete />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
