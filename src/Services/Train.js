import ShowErrorMessages from "../alert-messages/ShowErrorMessages";
import axiosInstance from "../api-config/axiosinstance";

async function Train(trainNumber) {
     try {
          const repons = await axiosInstance.get(`/getTrainInfo?train_number=${trainNumber}`);
          return repons;
     } catch (error) {
          console.log(error)
     }
}

async function DeleteTrain(trainID) {
     try {
          const repons = await axiosInstance.post(`/deleteTrainInfo`, trainID);
          return repons;
     } catch (error) {
          console.log(error)
     }
}

async function TrainInfoUpdate(trainDetails) {
     try {
          const respons = await axiosInstance.post(`/saveAndUpdateTrain`, trainDetails);
          return respons;
     } catch (error) {
          console.log(error);
     }
}

async function DownloadTrainCsv() {
     try {
          const respons = await axiosInstance.get(`/downloadTrainCsv`);
          return respons;
     } catch (error) {
          console.log(error);
     }
}
async function csvUploadservice(formData) {
     try {

          const response = await axiosInstance.post(`/importTrain`, formData);

          return response
     } catch (error) {
          console.error("Error fetching data:", error);
     }
}

const TrainInfo = (payload) => {
     return new Promise((resolve, reject) => {
          axiosInstance.get("/getTrainInfo", {
               params: { ...payload }
          })
               .then((res) => resolve(res.data))
               .catch((err) => {
                    if (err.response) {
                         const errorMessage = !err.response.data.error.message
                              ? err.response.data.error?._message
                              : err.response.data.error.message;
                         ShowErrorMessages(errorMessage, "Error");
                    }
                    reject(err)
               })
     })
}


const TrainInfoDetails = (payload) => {
     return new Promise((resolve, reject) => {
          axiosInstance.get("/getTrainDetails", {
               params: { ...payload }
          })
               .then((res) => resolve(res.data))
               .catch((err) => {
                    if (err.response) {
                         const errorMessage = !err.response.data.error.message
                              ? err.response.data.error?._message
                              : err.response.data.error.message;
                         ShowErrorMessages(errorMessage, "Error");
                    }
                    reject(err)
               })
     })
}

export { Train, DeleteTrain, TrainInfoUpdate, DownloadTrainCsv, csvUploadservice, TrainInfo, TrainInfoDetails };