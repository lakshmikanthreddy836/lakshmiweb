import Title from "../../common-components/Title";
import Form_Add_Station from "./components/FormAddStation";

const Add_Station = () => {
  return (
    <div className="bg-white pl-4 h-full">
      <div className="p-2 items-center">
        <Title title={"Add Station"}></Title>
      </div>
      <div>
        <Form_Add_Station />
      </div>
    </div>
  );
};

export default Add_Station;
