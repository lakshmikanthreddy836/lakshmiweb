import ShowErrorMessages from "../alert-messages/ShowErrorMessages";
import axiosInstance from "../api-config/axiosinstance";


const GetAllResturantList = (payload) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get("/getAllResturantInAddNewOrder", {
            params: { ...payload }
        })
            .then((res) => resolve(res.data))
            .catch((err) => {
                console.log(err, ">>>>><<<<<<");
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


const GetAddNewOrderFood = (payload) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get("/getAddNewOrderFood", {
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
export { GetAllResturantList, GetAddNewOrderFood };
