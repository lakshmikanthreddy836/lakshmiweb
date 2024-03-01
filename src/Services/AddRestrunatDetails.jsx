import ShowErrorMessages from "../alert-messages/ShowErrorMessages";
import axiosInstance from "../api-config/axiosinstance";

const AddRestaurantDetails = async (payload) => {
  try {
    const resp = await axiosInstance.post("/addAndUpdateResturantDetails", payload,
    {
      headers: {
        'Content-Type': 'multipart/form-data' // Set the Content-Type header to multipart/form-data
      }
    }
    );
    console.log("response is", resp);
    const dataObject = resp.data;
    return dataObject;
  } catch (error) {
    if (error.response) {
      // Handle specific server response errors
      console.log("error is",error.response.data)
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

export { AddRestaurantDetails };
