import Image1 from "./../../../assets/Images/image1.jpg";
import Image2 from "./../../../assets/Images/image (1).png";
import Image3 from "./../../../assets/Images/image (1).webp";
import Image4 from "./../../../assets/Images/image (2).webp";
import Image5 from "./../../../assets/Images/image (3).webp";
import Image6 from "./../../../assets/Images/image (4).webp";
import Image7 from "./../../../assets/Images/image (5).webp";
import Image8 from "./../../../assets/Images/image (6).webp";
import Delete from "./../../../assets/Icons/Delete";
import { LiaEdit } from "react-icons/lia";
const MyComponent = () => {
  const offerData = [
    {
      id: 1,
      type: "Latest Offer",
      title: "50 rupees discount on food delivery in train",
      image: Image1,
      action: "",
    },
    {
      id: 2,
      type: "Latest Offer",
      title: "100 rupees discount on ordering food in train",
      image: Image2,
      action: "",
    },
    {
      id: 3,
      type: "Latest Offer",
      title: "Offer of 10% discount on group food order in train",
      image: Image3,
      action: "",
    },
    {
      id: 4,
      type: "Latest Offer",
      title: "Offer on fast food delivery in train",
      image: Image4,
      action: "",
    },
    {
      id: 5,
      type: "Latest Offer",
      title: "Offer of 30 rupees discount on food order in train",
      image: Image5,
      action: "",
    },
    { id: 6, type: "Latest Offer", title: "", image: Image6, action: "" },
    { id: 7, type: "Latest Offer", title: "", image: Image7, action: "" },
    {
      id: 8,
      type: "Slider Banner",
      title: "Image of a banner advertising popular dishes from",
      image: Image8,
      action: "",
    },
  ];

  return (
    <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
      <div className="overflow-y-auto p-3 overflow-visible h-fit">
        <div className="overflow-x-auto w-full h-fit mt-4 px-8">
          <div className="flex flex-col w-full h-fit">
            <div className="flex w-full justify-between border-b-[1px] border-[#aaa] h-[40px]">
              <div className="w-[50px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">#</p>
              </div>
              <div className="w-[150px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Type</p>
              </div>
              <div className="w-[250px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Title</p>
              </div>
              <div className="w-[150px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Image</p>
              </div>
              <div className="w-[150px] flex items-center h-9">
                <p className="font-bold text-[15px] text-black">Action</p>
              </div>
            </div>
            <div className="flex flex-col">
              {offerData.map((offer, index) => (
                <div
                  className="flex w-full justify-between  h-[100px] items-center border-b-[1px] border-[#aaa]"
                  key={index}
                >
                  <div className="w-[50px] flex items-center h-9">
                    <p className="text-[15px] text-black">{offer.id}</p>
                  </div>
                  <div className="w-[150px] flex items-center h-9">
                    <p className="text-[15px] text-black">{offer.type}</p>
                  </div>
                  <div className="w-[250px] flex items-center h-9">
                    <p className="text-[15px] text-black">{offer.title}</p>
                  </div>
                  <div className="w-[150px] flex items-center h-50">
                    <img src={offer.image} className="w-11/12" />
                  </div>
                  <div className="w-[150px] flex items-center h-9">
                    <LiaEdit
                      style={{ fontSize:"25px", color: "blue" }}
                    />
                    <Delete />
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

export default MyComponent;
