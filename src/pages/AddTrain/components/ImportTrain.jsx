import {useState} from 'react'
import {csvUploadservice} from "../../../Services/Train"
const ImportTrain = () => {
     const [csvFile, setCsvFile] = useState();
     const uploadScrapCsv = async (e) => {
          console.log("file ", e.target.files[0]);
      
          try {
            const file = e.target.files[0];
            setCsvFile(file);
          } catch (error) {
            console.error("habdle scrap csv", error);
          }
        };
        const csvUploadEvent = async () => {
          console.log("csvUploadEvent working");
          try {
            const formData = new FormData();
            formData.append("import_train", csvFile);
            await csvUploadservice(formData);
          } catch (error) {
            console.error("error message", error);
          }
        };
     return (
          <div>
               <div>
                    <h5 className="text-2xl p-3 font-bold">Import Train</h5>
               </div>
               <div className="border rounded mt-4 p-3 ml-4 w-[95%]">

                    <div>
                         <p>Select CSV File*</p>
                    </div>
                    <div className="columns-2">
                         <div>
                              <input type="file" name="csv" className="border p-2" onChange={uploadScrapCsv}/>
                         </div>
                         <div>
                              <button
                               onClick={() => {
                                   csvUploadEvent();
                                 }}
                                 type="button"
                                   className='bg-[#34334a] mr-1 py-1 px-4 text-white'
                              >
                                   Upload
                              </button>
                         </div>
                    </div>
               </div>
          </div>

     )
}

export default ImportTrain