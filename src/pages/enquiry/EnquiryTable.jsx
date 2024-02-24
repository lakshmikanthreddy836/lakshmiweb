import Delete from "../../assets/Icons/Delete";

const EnquiryTable = () => {
  const data = [
    {
      id: 1,
      name: "RobertHom",
      email: "lucido.leinteract@gmail.com",
      phone: "8788487785",
      message: "Salut, ech wollt Äre Präis wëssen.",
      date: "18-02-2024 08:08:45 PM",
      action: "",
    },
    {
      id: 2,
      name: "Vanita gautam",
      email: "ms595694@gmail.com",
      phone: "7992070970",
      message:
        "I have not received my order yet and please contact me on this number 77065718018",
      date: "18-02-2024 05:47:27 AM",
      action: "",
    },
    {
      id: 3,
      name: "RobertHom",
      email: "lucido.leinteract@gmail.com",
      phone: "8687645318",
      message: "Sawubona, bengifuna ukwazi intengo yakho.",
      date: "16-02-2024 10:12:40 PM",
      action: "",
    },
    {
      id: 4,
      name: "Dr Prashant Das",
      email: "drprashantdas9@gmail.com",
      phone: "9998293204",
      message: "Can you supply food vegetarian in Train number 16734.",
      date: "07-02-2024 06:21:48 PM",
      action: "",
    },
    {
      id: 5,
      name: "Aafaque Shaikh",
      email: "aafaque.shaikh92@gmail.com",
      phone: "7507802469",
      message:
        "I run a restaurant in bhusawal Jn. near railway station by the name TAJ HOTEL. I want to become your partner to deliver food in train. Please share your list of documents and process to start business with you.",
      date: "05-02-2024 12:39:48 PM",
      action: "",
    },
    {
      id: 6,
      name: "Heersa",
      email: "heersa04@gmail.com",
      phone: "6362550443",
      message: "Cancel my food order for vadodara jn",
      date: "03-02-2024 08:39:54 PM",
      action: "",
    },
    {
      id: 7,
      name: "Irshad Ansari",
      email: "ansariirshadd786@gmail.com",
      phone: "9758452308",
      message: "Hi",
      date: "02-02-2024 09:54:03 AM",
      action: "",
    },
    {
      id: 8,
      name: "Manoj mudgal",
      email: "mmudgal@outlook.com",
      phone: "9810419508",
      message:
        "Dear madam please send whatapop food details thanks manoj Delhi 09810419508",
      date: "27-01-2024 05:23:25 PM",
      action: "",
    },
    {
      id: 9,
      name: "Simran Bharti",
      email: "simranbharti581@gmail.com",
      phone: "7004317228",
      message: "I want to cancel my order",
      date: "26-01-2024 07:33:35 PM",
      action: "",
    },
    {
      id: 10,
      name: "Kuniprava roul",
      email: "kuniprava007@gmail.com",
      phone: "9692328555",
      message: "Please cancel mushroom and add dal fry",
      date: "26-01-2024 01:33:28 PM",
      action: "",
    },
    {
      id: 11,
      name: "V k mittal",
      email: "mittalvkm@rediffmail.com",
      phone: "9318758313",
      message:
        "Can I get veg food in train 20665, Vande Bharat . Travelling from Egmore, chennai to Madurai on 12 th feb",
      date: "25-01-2024 04:49:50 PM",
      action: "",
    },
    {
      id: 12,
      name: "Sayed Sajid Kasim",
      email: "maidahcuisineandbakers@gmail.com",
      phone: "9226878600",
      message:
        "Wanted to join your company as aggregator for supply of online food at bhusawal railway station",
      date: "25-01-2024 03:30:53 PM",
      action: "",
    },
    {
      id: 13,
      name: "Naveen kumar",
      email: "bhardwajnaveen899@gmail.com",
      phone: "8607050338",
      message: "Provide me food on my train sheet",
      date: "23-01-2024 11:10:44 AM",
      action: "",
    },
    {
      id: 14,
      name: "Akash Kumar",
      email: "akash2015mantar@gmail.com",
      phone: "7633831092",
      message:
        "I have booked one veg dilux thali as on 22 Jan 24 in train no 12142 delivery station is satna ..my booking ID is RK1822121...but status of my booking order is not showing....will food be deliver or not ....at my delivery station..",
      date: "22-01-2024 05:18:17 PM",
      action: "",
    },
    {
      id: 15,
      name: "Manish saxena",
      email: "vikas.saxena94@gmail.com",
      phone: "9897232839",
      message:
        "I am not getting my order your service is very bad plz refund my amount ASAP",
      date: "14-01-2024 11:30:16 PM",
      action: "",
    },
    {
      id: 16,
      name: "Hemant Zemse",
      email: "hdzems23@gmail.com",
      phone: "9322339833",
      message:
        "We are happy to join as a vendor at panvel junction Maharashtra..",
      date: "13-01-2024 11:25:48 AM",
      action: "",
    },
    {
      id: 17,
      name: "Swati",
      email: "Jaanish27@gmail.com",
      phone: "9897511727",
      message:
        "I have order food for myself at katni murwara... M about to reach there but it's showing the destination station timing today at 10.30 pm... Wanna cancle my order",
      date: "13-01-2024 10:36:56 AM",
      action: "",
    },
    {
      id: 18,
      name: "Parth shah",
      email: "kanharestaurant1220@gmail.com",
      phone: "8866225979",
      message: "I`m vendor in Dahod authorised in IRCTC please contact me",
      date: "12-01-2024 07:09:52 PM",
      action: "",
    },
    {
      id: 19,
      name: "7319322007",
      email: "kkasinathmaji@gmail.com",
      phone: "7319322007",
      message: "Hi",
      date: "12-01-2024 06:06:33 PM",
      action: "",
    },
    {
      id: 20,
      name: "Shree Nala Vilas",
      email: "shreenalavilas@gmail.com",
      phone: "9566653337",
      message: "Tie up with rail kafe for food delivery in madurai junction",
      date: "03-01-2024 02:04:26 PM",
      action: "",
    },
    {
      id: 21,
      name: "Ravi Shankar",
      email: "shrenalavilas@gmail.com",
      phone: "9566653337",
      message:
        "Tie up for food delivery in madurai junction, we have delivered food with rail restro earlier",
      date: "03-01-2024 01:52:40 PM",
      action: "",
    },
    {
      id: 22,
      name: "Ram Raj Patel",
      email: "ramrajruchi1983@gmail.com",
      phone: "9839585311",
      message: "2veg biriyani",
      date: "30-12-2023 05:38:43 PM",
      action: "",
    },
    {
      id: 23,
      name: "Sanjay kumar",
      email: "sanjaypandarakpatna@gmail.com",
      phone: "9852890175",
      message: "Kindly confirm the order ID RK 1183090",
      date: "30-12-2023 12:46:41 PM",
      action: "",
    },
    {
      id: 24,
      name: "Sanjay kumar",
      email: "sanjaypandarakpatna@gmail.com",
      phone: "9852890175",
      message: "Kindly confirm the order ID RK 1183090",
      date: "30-12-2023 12:46:11 PM",
      action: "",
    },
    {
      id: 25,
      name: "IRCTC TEST",
      email: "irctc@ecarring.gov.in",
      phone: "9999788888",
      message: "checking",
      date: "23-12-2023 08:37:42 AM",
      action: "",
    },
  ];

  return (
    <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
      <div className="overflow-y-auto p-3 overflow-visible h-fit">
        <div className="flex flex-row justify-between items-center px-5">
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
        <div className="overflow-x-auto w-full h-fit mt-4 px-4">
          <div className="flex flex-col w-fit h-fit ">
            <div className="flex px-2 w-full justify-between border-b-[1px] border-[#aaa] h-[40px]">
              <div className="w-[50px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">#</p>
              </div>
              <div className="w-[130px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Name</p>
              </div>
              <div className="w-[200px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Email</p>
              </div>
              <div className="w-[130px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Phone</p>
              </div>
              <div className="w-[490px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Message</p>
              </div>
              <div className="w-[150px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Date</p>
              </div>
              <div className="w-[100px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Action</p>
              </div>
            </div>
            <div className="flex flex-col">
              {data.map((item, index) => (
                <div
                  className={`flex px-2 w-full justify-between h-auto items-center border-b-[1px] border-[#aaa] ${
                    index % 2 === 0 ? "bg-gray-100" : "bh-white"
                  } hover:bg-gray-100`}
                  key={index}
                >
                  <div className="w-[50px] flex items-center h-auto">
                    <p className="text-[15px] text-black">{item.id}</p>
                  </div>
                  <div className="w-[130px] flex items-center h-auto">
                    <p className="text-[15px] text-black">{item.name}</p>
                  </div>
                  <div className="w-[200px] flex items-center h-auto">
                    <p className="text-[15px] text-black">{item.email}</p>
                  </div>
                  <div className="w-[130px] flex items-center h-auto">
                    <p className="text-[15px] text-black">{item.phone}</p>
                  </div>
                  <div className="w-[490px] flex items-center h-auto">
                    <p className="text-[15px] text-black">{item.message}</p>
                  </div>
                  <div className="w-[150px] flex items-center h-auto">
                    <p className="text-[15px] text-black">{item.date}</p>
                  </div>
                  <div className="w-[100px] flex items-center h-auto">
                    <p className="text-[15px] text-center text-black flex gap-4">
                      <Delete />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryTable;
