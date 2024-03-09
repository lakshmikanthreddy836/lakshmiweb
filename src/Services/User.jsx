import ShowErrorMessages from "../alert-messages/ShowErrorMessages";
import axiosInstance from "../api-config/axiosinstance";

const loginAdmin = async (email, password) => {
  const payload = {
    userIdentifier: email,
    password: password,
  };
  try {
    const resp = await axiosInstance.post("/login", payload);
    const dataObject = resp.data;
    return dataObject;
  } catch (error) {
    if (error.response) {
      // Handle specific server response errors

      const errorMessage = !error.response.data.error.message
        ? error.response.data.error?._message
        : error.response.data.error.message;
      //   showSuccessMessage(errorMessage, "error");
      ShowErrorMessages(errorMessage, "Error");
      return error.response.data;
    } else {
      // Handle other types of errors
      ShowErrorMessages("Something went wrong", "Error");
    }
    throw error; // Rethrow the error to propagate it to the calling code
  }
};

export { loginAdmin };
