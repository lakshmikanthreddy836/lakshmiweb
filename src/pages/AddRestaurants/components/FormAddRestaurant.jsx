import { useState, useEffect } from "react";
import { AddRestaurant } from "../../../Services/AddResturant";
import ShowSucessmessages from "../../../alert-messages/ShowSucessmessages";
import { AddRestaurantDetails } from "../../../Services/AddRestrunatDetails";
import axiosInstance from "../../../api-config/axiosinstance";
import CustomSelect from "../../../common-components/select/CustomSelect";
import { getStationDetails } from "../../../Services/getStationList";
import { getStateDetails } from "../../../Services/getStateList";
const Form_Add_Restaurant = () => {
  const [secondStep, setSecondStep] = useState("");
  const [addRestaurantData, setAddRestaurantData] = useState({
    owner_first_name: "",
    owner_middle_name: "",
    owner_last_name: "",
    owner_email: "",
    owner_password: "",
    owner_number: "",
  });
  const [baneDetailsData, setBankDetailsData] = useState({
    bank_name: "",
    account_number: "",
    ifsc_code: "",
    branch_name: "",
    account_holder_name: "",
  });
  const [deliverChargesData, setDeliveryChargesData] = useState({
    delivery_type: "",
    customer_delivery_charges: "",
    vendor_delivery_charges: "",
    // restaurant_email: "",
    // restaurant_rating: "",
    // restaurant_rating_count: "",
  });
  const [restaurantDetailsData, setRestaurantDetailsData] = useState({
    brand_name: "",
    restaurant_name: "",
    restaurant_type: "",
    min_order_value: 0,
    facilities: "",
    commission: 0,
    station_code: "",
    city: "",
    state_code: "",
    open_before_time: "",
    cod_payment: "",
    api_access: "",
    station_distance: 0,
    sale_price_capping: 0,
    group_discount: 0,
    resturant_email: "",
    rating: 0,
    rating_count: "",
    contact_person_name: "",
    contact_person_phone_number: "",
    fssai_number: "",
    gst_number: "",
    open_time: "",
    close_time: "",
    activeStatus: "",
    security_deposit:""
  });

  const [useId, setUserId] = useState("");
  const submitFirstForm = async () => {
    const payloadData = {
      email: addRestaurantData.owner_email,
      first_name: addRestaurantData.owner_first_name,
      last_name: addRestaurantData.owner_last_name,
      sir_name: addRestaurantData.owner_middle_name,
      password: addRestaurantData.owner_password,
      dial_code: "+91",
      phone: addRestaurantData.owner_number,
    };
    let response = await AddRestaurant(payloadData);
    if (response?.success) {
      const result = response?.data?.user_id;
      setUserId(result);
      ShowSucessmessages("Details added successfully");
      setSecondStep("secondstep");
    }
    // setAddRestaurantData({});
  };
  const [gstphoto, setGstPhoto] = useState(null);
  const [kitechenphoto, setKItchenPhoto] = useState(null);
  const [counterphoto, setCounterPhoto] = useState(null);
  const [fassaiphoto, setFassaiPhoto] = useState(null);
  const [hoadingBoard, sehoadingBoardPhoto] = useState(null);
  const [foodMenuPhoto, setFoodMenuPhoto] = useState(null);
  const [stations, setStations] = useState([]);
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    StationOne: {
      value: "",
      error: "",
    },
  });
  const [stationCode, setStationCode] = useState("");

  const handleImageChange = async (e, handleImageChange) => {
    if (handleImageChange == "gstphoto") {
      const file = e.target.files[0];
      setGstPhoto(file);
    } else if (handleImageChange == "kitchenphoto") {
      const file = e.target.files[0];
      setKItchenPhoto(file);
    } else if (handleImageChange == "counterphoto") {
      const file = e.target.files[0];
      setCounterPhoto(file);
    } else if (handleImageChange == "fassiphoto") {
      const file = e.target.files[0];
      setFassaiPhoto(file);
    } else if (handleImageChange == "hoadingphoto") {
      const file = e.target.files[0];
      sehoadingBoardPhoto(file);
    } else if (handleImageChange == "foodmenuphoto") {
      const file = e.target.files[0];
      setFoodMenuPhoto(file);
    }

    // setImage(file);
  };
  useEffect(() => {
    fetchData();
    fetchDataForState();
  }, []);
  const fetchData = async () => {
    try {
      const response = await getStationDetails();
      if (response?.data?.success) {
        const station_details = response?.data?.data;
        setStations(station_details?.stations);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchDataForState = async () => {
    try {
      const response = await getStateDetails();
      if (response?.data?.success) {
        const state_details = response?.data?.data;
        setState(state_details?.states);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const submitSecondForm = async () => {
    const payloadData = {
      gst_pic: gstphoto,
      kitchen_pic: kitechenphoto,
      counter_pic: counterphoto,
      board_pic: hoadingBoard,
      fssai_image: fassaiphoto,
      menu_pdf: foodMenuPhoto,
      user_id: useId,
      account_number: baneDetailsData?.account_number,
      api_access: restaurantDetailsData?.api_access,
      bank_name: baneDetailsData?.bank_name,
      branch_name: baneDetailsData?.branch_name,
      city: restaurantDetailsData?.city,
      close_time: restaurantDetailsData?.close_time,
      cod_payment: restaurantDetailsData?.cod_payment,
      commission: restaurantDetailsData?.commission,
      contact_person_dialCode: "+91",
      contact_person_name: restaurantDetailsData?.contact_person_name,
      contact_person_phone_number:
        restaurantDetailsData?.contact_person_phone_number,
      customer_charge: deliverChargesData?.customer_delivery_charges,
      deliver_type: deliverChargesData?.delivery_type,
      facilities: restaurantDetailsData?.facilities,
      food_type: restaurantDetailsData?.restaurant_type,
      group_discount: restaurantDetailsData?.group_discount,
      gst_number: restaurantDetailsData?.gst_number,
      holder_name: baneDetailsData?.account_holder_name,
      account_holder_name: baneDetailsData?.account_holder_name,
      ifsc_code: baneDetailsData?.ifsc_code,
      min_order_value: restaurantDetailsData?.min_order_value,
      open_before_time: restaurantDetailsData?.open_before_time,
      open_time: restaurantDetailsData?.open_time,
      rating: restaurantDetailsData?.rating,
      rating_count: restaurantDetailsData?.rating_count,
      resturant_email: restaurantDetailsData?.resturant_email,
      resturant_name: restaurantDetailsData?.restaurant_name,
      resturant_status: restaurantDetailsData?.activeStatus,
      sale_price_capping: restaurantDetailsData?.sale_price_capping,
      security_deposit: restaurantDetailsData?.security_deposit,
      state_code: restaurantDetailsData?.state_code,
      station_code: restaurantDetailsData?.station_code,
      station_distance: restaurantDetailsData?.station_distance,
      vendor_charge: deliverChargesData?.vendor_delivery_charges,
      fssai_number: restaurantDetailsData?.fssai_number,
      brand_name: restaurantDetailsData?.brand_name,
    };
    let response = await AddRestaurantDetails(payloadData);
    if (response?.success) {
      const result = response.data;
      ShowSucessmessages("Restaurant details added successfully");
      // window.location.reload()
      // setSecondStep("secondstep");
    }
  };
  return (
    <div className="bg-white w-full shadow-lg p-1 mb-20">
      <div className="p-6 mx-auto bg-white rounded-md shadow-2xl  ">
        <form>
          {secondStep == "" && (
            <div>
              <div className="text-gray-900 text-lg font-bold">
                Address of Restaurant
              </div>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                <div>
                  <label className="text-gray-700 ">Owner First Name</label>
                  <input
                    required
                    id="username"
                    type="text"
                    className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    onChange={(e) => {
                      setAddRestaurantData({
                        ...addRestaurantData,
                        owner_first_name: e.target.value,
                      });
                    }}
                    value={addRestaurantData.owner_first_name}
                  />
                </div>

                <div>
                  <label className="text-gray-700 ">Owner Middle Name</label>
                  <input
                    id="emailAddress"
                    type="text"
                    className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    onChange={(e) => {
                      setAddRestaurantData({
                        ...addRestaurantData,
                        owner_middle_name: e.target.value,
                      });
                    }}
                  />
                </div>
                <div>
                  <label className="text-gray-700 ">Owner Last Name</label>
                  <input
                    id="emailAddress"
                    type="text"
                    className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    onChange={(e) => {
                      setAddRestaurantData({
                        ...addRestaurantData,
                        owner_last_name: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                <div>
                  <label className="text-gray-700 ">Owner Email</label>
                  <input
                    id="emailAddress"
                    type="email"
                    className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    onChange={(e) => {
                      setAddRestaurantData({
                        ...addRestaurantData,
                        owner_email: e.target.value,
                      });
                    }}
                  />
                </div>
                <div>
                  <label className="text-gray-700 ">Owner Password</label>
                  <input
                    id="emailAddress"
                    type="password"
                    className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    onChange={(e) => {
                      setAddRestaurantData({
                        ...addRestaurantData,
                        owner_password: e.target.value,
                      });
                    }}
                  />
                </div>
                <div>
                  <label className="text-gray-700 ">Owner Number</label>
                  <input
                    id="emailAddress"
                    type="tel"
                    className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    onChange={(e) => {
                      setAddRestaurantData({
                        ...addRestaurantData,
                        owner_number: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="text-center mt-4">
                <button
                  className="text-center bg-red-500 text-white h-9 text-[15px] px-5 rounded-md hover:bg-red-700"
                  type="button"
                  onClick={() => {
                    submitFirstForm();
                  }}
                >
                  Save & Next
                </button>
              </div>
            </div>
          )}

          {secondStep == "secondstep" && (
            <div className="flex flex-col">
              {/* Restaurant Details */}
              <div className="mt-4">
                <div>
                  <h2 className="text-lg  font-semibold text-gray-700 capitalize ">
                    Restaurant Details
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                  <div>
                    <label className="text-gray-700 ">Brand Name</label>
                    <input
                      id="brandname"
                      type="text"
                      value={restaurantDetailsData?.brand_name}
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          brand_name: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 ">Restaurant Name*</label>
                    <input
                      id="emailAddress"
                      type="restaurant_name"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          restaurant_name: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Restaurant Type
                    </label>
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          restaurant_type: e.target.value,
                        });
                      }}
                    >
                      <option selected>- -Select- -</option>
                      <option value="veg">Vegetarian</option>
                      <option value="non-veg">Non-Vegetarian</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                  <div>
                    <label className="text-gray-700 ">Min Order Value</label>
                    <input
                      id="min_order_value"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          min_order_value: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 ">Facilities</label>
                    <input
                      id="facilities"
                      type="email"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          facilities: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">Commission</label>
                    <input
                      id="emailAddress"
                      type="email"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          commission: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                  <div>
                    <label className="text-gray-700 ">Station*</label>

                    <select
                      id="station"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          station_code: e.target.value,
                        });
                      }}
                    >
                      <option selected>- -Select- -</option>
                      {stations?.map((data, index) => (
                        <option key = {index} value={data?.station_code}>
                          {data?.station_name} - {data?.station_code}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-gray-700 ">City</label>
                    <input
                      id="city"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          city: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">State*</label>
                    <select
                      id="state"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          state_code: e.target.value,
                        });
                      }}
                    >
                      <option selected>- -Select- -</option>
                      {state?.map((data, index) => (
                        <option key = {index} value={data?.state_code}>
                          {data?.state_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                  <div>
                    <label className="text-gray-700 ">
                      Order Before (Time)
                    </label>
                    <input
                      id="order_before_time"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          open_before_time: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 ">
                      Accept COD (For Payment)
                    </label>
                    <div className="flex ">
                      <label className="flex radio p-2 cursor-pointer">
                        <input
                          className="my-auto transform scale-125"
                          type="radio"
                          name="cod"
                          onChange={() => {
                            setRestaurantDetailsData({
                              ...restaurantDetailsData,
                              cod_payment: "yes",
                            });
                          }}
                        />
                        <div className="title px-2">Yes</div>
                      </label>
                      <label className="flex radio p-2 cursor-pointer">
                        <input
                          className="my-auto transform scale-125"
                          type="radio"
                          name="cod"
                          onChange={() => {
                            setRestaurantDetailsData({
                              ...restaurantDetailsData,
                              cod_payment: "no",
                            });
                          }}
                        />
                        <div className="title px-2">No</div>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-700 ">API Access</label>
                    <div className="flex ">
                      <label className="flex radio p-2 cursor-pointer">
                        <input
                          className="my-auto transform scale-125"
                          type="radio"
                          name="api_access"
                          onChange={() => {
                            setRestaurantDetailsData({
                              ...restaurantDetailsData,
                              api_access: "yes",
                            });
                          }}
                        />
                        <div className="title px-2">Enable</div>
                      </label>
                      <label className="flex radio p-2 cursor-pointer">
                        <input
                          className="my-auto transform scale-125"
                          type="radio"
                          name="api_access"
                          onChange={() => {
                            setRestaurantDetailsData({
                              ...restaurantDetailsData,
                              api_access: "no",
                            });
                          }}
                        />
                        <div className="title px-2">Disable</div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                  <div>
                    <label className="text-gray-700  ">Station Distance</label>
                    <input
                      id="station_distance"
                      type="text"
                      className="block w-full px-4 py-1   text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          station_distance: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 ">Sell Price Capping</label>
                    <input
                      id="sell_price_capping"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          sale_price_capping: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">
                      Group Order Discount
                    </label>
                    <input
                      id="group_order_discount"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          group_discount: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                  <div>
                    <label className="text-gray-700 ">Restaurant Email</label>
                    <input
                      id="resturant_email"
                      type="email"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          resturant_email: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 ">Rating</label>
                    <input
                      id="rating"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          rating: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">Rating Count</label>
                    <input
                      id="rating_count"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          rating_count: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                  {/* <div>
                    <label className="text-gray-700 ">Owner KYC</label>
                    <input
                      id="owner_key"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setAddRestaurantData({
                          ...addRestaurantData,
                          owner_kyc: e.target.value,
                        });
                      }}
                    />
                  </div> */}

                  <div>
                    <label className="text-gray-700 ">
                      Contact Person Name
                    </label>
                    <input
                      id="contact_person_name"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          contact_person_name: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">Contact Person No</label>
                    <input
                      id="contact_person_number"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          contact_person_phone_number: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">Open Time</label>
                    <input
                      id="order_before_time"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          open_time: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                  <div>
                    <label className="text-gray-700 ">Close Time</label>
                    <input
                      id="order_before_time"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          close_time: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">Restaurant Status</label>
                    <div className="flex ">
                      <label className="flex radio p-2 cursor-pointer">
                        <input
                          className="my-auto transform scale-125"
                          type="radio"
                          name="active"
                          onChange={() => {
                            setRestaurantDetailsData({
                              ...restaurantDetailsData,
                              activeStatus: "Active",
                            });
                          }}
                        />
                        <div className="title px-2">Active</div>
                      </label>
                      <label className="flex radio p-2 cursor-pointer">
                        <input
                          className="my-auto transform scale-125"
                          type="radio"
                          name="active"
                          onChange={() => {
                            setRestaurantDetailsData({
                              ...restaurantDetailsData,
                              activeStatus: "InActive",
                            });
                          }}
                        />
                        <div className="title px-2">In Active</div>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-700 ">Security Deposit</label>
                    <input
                      id="order_before_time"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          security_deposit: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* Delivery Charges */}
              <div>
                <div className="text-gray-900 text-lg mt-4 font-bold">
                  Delivery Charges
                </div>
                <div className="grid grid-cols-1 gap-6 mt-2 sm:grid-cols-3">
                  <div>
                    <label className="text-gray-700 ">Delivery Type</label>
                    <select
                      id="delivery_type"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => {
                        setDeliveryChargesData({
                          ...deliverChargesData,
                          delivery_type: e.target.value,
                        });
                      }}
                    >
                      <option selected>Choose a delivery type</option>
                      <option value="company">Company</option>
                      <option value="vendor">Vendor</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-700 ">
                      Customer Dlivery Charges
                    </label>
                    <input
                      id="customer_delivery_charges"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setDeliveryChargesData({
                          ...deliverChargesData,
                          customer_delivery_charges: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">
                      Vendor Delivery Charges
                    </label>
                    <input
                      id="vendor_delivery_charges"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setDeliveryChargesData({
                          ...deliverChargesData,
                          vendor_delivery_charges: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* Bank Details */}
              <div>
                <div className="text-gray-900 text-lg mt-4 font-bold">
                  Bank Details
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                  <div>
                    <label className="text-gray-700 ">Bank Name</label>
                    <input
                      id="bankname"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setBankDetailsData({
                          ...baneDetailsData,
                          bank_name: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">Account No</label>
                    <input
                      id="accountnumber"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setBankDetailsData({
                          ...baneDetailsData,
                          account_number: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">IFSC Code</label>
                    <input
                      id="ifsccode"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setBankDetailsData({
                          ...baneDetailsData,
                          ifsc_code: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                  <div>
                    <label className="text-gray-700 ">Branch Name</label>
                    <input
                      id="branchname"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setBankDetailsData({
                          ...baneDetailsData,
                          branch_name: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">
                      Account Holder Name
                    </label>
                    <input
                      id="accountholdername"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setBankDetailsData({
                          ...baneDetailsData,
                          account_holder_name: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* Documents */}
              <div>
                <div className="text-gray-900 text-lg mt-4 font-bold">
                  Documents
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                  <div>
                    <label className="text-gray-700 ">Gst Photo</label>
                    <input
                      type="file"
                      onChange={(e) => {
                        handleImageChange(e, "gstphoto");
                      }}
                      className="block w-full px-4 h-10 py-[5px]  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring text-[14px] justify-center items-center"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">Kitchen Area Photo</label>
                    <input
                      type="file"
                      onChange={(e) => {
                        handleImageChange(e, "kitchenphoto");
                      }}
                      className="block w-full px-4 h-10 py-[5px]  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring text-[14px] justify-center items-center"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">Counter Photo</label>
                    <input
                      type="file"
                      onChange={(e) => {
                        handleImageChange(e, "counterphoto");
                      }}
                      className="block w-full px-4 h-10 py-[5px]  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring text-[14px] justify-center items-center"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                  <div>
                    <label className="text-gray-700 ">FSSAI Photo</label>
                    <input
                      type="file"
                      onChange={(e) => {
                        handleImageChange(e, "fassiphoto");
                      }}
                      className="block w-full px-4 h-10 py-[5px]  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring text-[14px] justify-center items-center"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">
                      Hoading/Board Photo
                    </label>
                    <input
                      type="file"
                      onChange={(e) => {
                        handleImageChange(e, "hoadingphoto");
                      }}
                      className="block w-full px-4 h-10 py-[5px]  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring text-[14px] justify-center items-center"
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">Food Menu PDF</label>
                    <input
                      type="file"
                      onChange={(e) => {
                        handleImageChange(e, "foodmenuphoto");
                      }}
                      className="block w-full px-4 h-10 py-[5px]  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring text-[14px] justify-center items-center"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-2 sm:grid-cols-3">
                  <div>
                    <label className="text-gray-700 ">FSSAI Number</label>
                    <input
                      id="fssai_number"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          fssai_number: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-gray-700 ">GST Number</label>
                    <input
                      id="gst_number"
                      type="text"
                      className="block w-full px-4 py-1  text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => {
                        setRestaurantDetailsData({
                          ...restaurantDetailsData,
                          gst_number: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <button
                  className="text-center bg-red-500 text-white h-9 text-[15px] px-5 rounded-md hover:bg-red-700"
                  type="button"
                  onClick={() => {
                    // submitFirstForm();
                    submitSecondForm();
                  }}
                >
                  Save & Next
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form_Add_Restaurant;
