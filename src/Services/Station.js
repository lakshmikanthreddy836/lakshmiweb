import axiosInstance from "../api-config/axiosinstance";

async function StationListGet() {
     try {
          const repons = await axiosInstance.get(`/getStation`);
          console.log(repons.data.data)
          return repons;
     } catch (error) {
          console.log(error)
     }
}
export { StationListGet };