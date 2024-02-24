import Layout from "../../Layout";
import ShowSucessmessages from "../../alert-messages/ShowSucessmessages";
import AnimateLoader from "../../common-components/AnimateLoader";

const Home = () => {
  return (
    <div className="bg-white text-red-500 overflow-y-auto flex flex-col h-screen w-screen pb-10">
      Home Page
      <AnimateLoader count={2}/>
    </div>
  );
};

export default Home;
