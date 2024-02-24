import Form_Add_Restaurant from "./components/FormAddRestaurant";

const Add_Restaurant = () => {
  return (
    <div className="bg-white pl-4 h-full overflow-y-auto">
      <div className="items-center text-center font-bold bg-white shadow-lg p-2">
        Register New Restaurant
      </div>
      <div>
        <Form_Add_Restaurant />
      </div>
    </div>
  );
};

export default Add_Restaurant;
