import { Link } from "react-router-dom";
import Tour_Operator_Details from "./TourOperatorDetails";

const View_Tour_Operator = () => {
  return (
    <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
      <div className="overflow-y-auto p-3 overflow-visible h-fit">
        <div className="bg-white p-2 shadow-md flex justify-between">
          <Link to={"/tour-operator"}>
            <div className="bg-[#ff0018] p-2 text-sm rounded text-white">
              <p className="text-sm pl-5 pr-5 ">Tour Operator List</p>
            </div>
          </Link>
          <Link to={"/add-tour-operator"}>
            <div className="bg-[#34334a] p-2 text-sm text-white">
              Add Tour Operator
            </div>
          </Link>
        </div>
        <Tour_Operator_Details />
      </div>
    </div>
  );
};

export default View_Tour_Operator;
