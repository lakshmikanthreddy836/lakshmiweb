import ShowErrorMessages from "../alert-messages/ShowErrorMessages";
import axiosInstance from "../api-config/axiosinstance";

const RestaurantDetails = async (payload) => {
  try {
    const resp = await axiosInstance.get("/getResturant", {
      params: {
        payload,
      },
    });
    console.log("response is", resp);
    const dataObject = resp;
    return dataObject;
  } catch (error) {
    if (error.response) {
      // Handle specific server response errors
      console.log("error is", error.response.data);
      const errorMessage = !error.response.data.error.message
        ? error.response.data.error?._message
        : error.response.data.error.message;
      //   showSuccessMessage(errorMessage, "error");
      ShowErrorMessages(errorMessage, "Error");
      return error.response.data;
    } else {
      // Handle other types of errors
      showSuccessMessage("Something went wrong", "Error");
    }
    throw error; // Rethrow the error to propagate it to the calling code
  }
};

export { RestaurantDetails };
