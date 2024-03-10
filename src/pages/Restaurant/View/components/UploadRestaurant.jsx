import { useState } from "react";
import { csvUploadservice } from "../../services/restaurantservice";
import { useLocation } from "react-router";
import ShowSucessmessages from "../../../../alert-messages/ShowSucessmessages";
import ShowErrorMessages from "../../../../alert-messages/ShowErrorMessages";

const ImportRestaurant = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const rest_id = queryParams.get("res_id");

  const [csvFile, setCsvFile] = useState(null);

  const uploadScrapCsv = async (e) => {

    try {
      const file = e.target.files[0];
      setCsvFile(file);
    } catch (error) {
      console.error("habdle scrap csv", error);
    }
  };
  const csvUploadEvent = async () => {
    try {
      const formData = new FormData();
      const headers = { "content-type": "multipart/form-data" }
      formData.append("import_food", csvFile);
      formData.append("resturant_id", rest_id);
      await csvUploadservice(formData, headers);
      ShowSucessmessages("Successfully logged in");
      setCsvFile(null)
    } catch (error) {
      let errMessage = error?.response?.data?.error?._message || ""
      ShowErrorMessages(errMessage)
    }
  };
  return (
    <div>
      <div>
        <h5 className="text-2xl p-3 font-bold">Import Restaurant</h5>
      </div>
      <div className="border rounded mt-4 p-3 ml-4 w-[95%]">
        <div>
          <p>Select CSV File*</p>
        </div>
        <div className="columns-2">
          <div>
            <input
              type="file"
              name="csv"
              className="border p-2"
              onChange={uploadScrapCsv}
            />
          </div>
          <div>
            <button
              onClick={() => {
                csvUploadEvent();
              }}
              type="button"
              className="bg-[#34334a] mr-1 py-1 px-4 text-white"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportRestaurant;
