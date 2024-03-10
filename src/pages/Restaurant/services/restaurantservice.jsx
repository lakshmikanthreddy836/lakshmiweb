import axiosInstance from "../../../api-config/axiosinstance";

const getResturantInfoService = async (restaurantId) => {
  try {
    const resp = await axiosInstance.get(
      `/getResturantInfo?resturant_id=${restaurantId}`
    );
    console.log("response is", resp);
    const dataObject = resp.data;
    return dataObject;
  } catch (error) {
    if (error.response) {
      // Handle specific server response errors
      console.log("error is", error.response.data);

      return error.response.data;
    } else {
      // Handle other types of errors
    }
    throw error; // Rethrow the error to propagate it to the calling code
  }
};

const getResturantFoodMenuService = async (restaurantId) => {
  try {
    const resp = await axiosInstance.get(
      `/getFoodMenu?resturant_id=${restaurantId}`
    );
    console.log("response is", resp);
    const dataObject = resp.data;
    return dataObject;
  } catch (error) {
    if (error.response) {
      // Handle specific server response errors
      console.log("error is", error.response.data);

      return error.response.data;
    } else {
      // Handle other types of errors
    }
    throw error; // Rethrow the error to propagate it to the calling code
  }
};

async function csvUploadservice(formData, header) {
  try {
    const response = await axiosInstance.post(`/importFoodMenu`, formData, header);

    return response;
  } catch (error) {
    throw error
  }
}

async function categoryService() {
  try {
    const response = await axiosInstance.get(`/getCategory`);
    return response;
  } catch (error) {
    throw error
  }
}

async function upDateFood(formData) {
  try {
    const response = await axiosInstance.post(`/addAndUpdateFood`, formData);
    return response;
  } catch (error) {
    throw error
  }
}

export {
  upDateFood,
  categoryService,
  getResturantInfoService,
  getResturantFoodMenuService,
  csvUploadservice,
};
