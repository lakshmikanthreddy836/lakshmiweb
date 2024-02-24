import { Link } from "react-router-dom";
import Ticket_agent_Details from "./TicketAgentDetails";

const View_ticket_agent = () => {
  return (
    <div className="h-full w-full bg-white flex flex-col justify-start overflow-hidden">
      <div className="overflow-y-auto p-3 overflow-visible h-fit">
        <div className="bg-white p-2 shadow-md flex justify-between">
          <Link to={"/ticketing-agent"}>
            <div className="bg-[#ff0018] p-2 text-sm rounded text-white">
              <p className="text-sm pl-5 pr-5 ">Ticket Agent List</p>
            </div>
          </Link>
          <Link to={"/Add_Ticket_Agent_form"}>
            <div className="bg-[#34334a] p-2 text-sm text-white">
              Add Ticket Agent
            </div>
          </Link>
        </div>
        <Ticket_agent_Details />
      </div>
    </div>
  );
};

export default View_ticket_agent;
