import axiosInstance from "../api-config/axiosinstance";

async function Train (trainNumber) {
          try{
          const repons = await axiosInstance.get(`/getTrainInfo?train_number=${trainNumber}`);
          return repons;
     }catch(error){
          console.log(error)
     }
}

async function DeleteTrain (trainID){
     try{
          const repons = await axiosInstance.post(`/deleteTrainInfo`,trainID);
          return repons;
     }catch(error){
          console.log(error)
     }
}

async function TrainInfoUpdate (trainDetails){
     try {
          const respons = await axiosInstance.post(`/saveAndUpdateTrain`,trainDetails);
          return respons;
     } catch (error) {
          console.log(error);
     }
}

async function DownloadTrainCsv (){
     try {
          const respons = await axiosInstance.get(`/downloadTrainCsv`);
          return respons; 
     } catch (error) {
          console.log(error);
     }
}

export {Train,DeleteTrain,TrainInfoUpdate,DownloadTrainCsv};