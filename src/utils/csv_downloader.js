import ShowErrorMessages from "../alert-messages/ShowErrorMessages";
import ShowSucessmessages from "../alert-messages/ShowSucessmessages";
const csvDownload = async(response)=>{
    try {
      
        const blob = new Blob([response], { type: "text/csv" });
  
        // Create a download link
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `train_${new Date().getTime()}.csv`;
  
        document.body.appendChild(a);
        a.click();
  
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        ShowSucessmessages("Successfully Downloaded Train");
      } catch (error) {
        console.error("Error While downloading Train Csv", error);
        ShowErrorMessages("Something went Wrong");
      }
}

export {csvDownload}

