import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelect } from "./TabSelect";
import ContactInfo from "./ContactInfo";

const RestaurantFirstCompoents = (props) => {
  const [selectedTab, setSelectedTab] = useTabs([
    "contactInfo",
    "irctData",
    "ratings",
    "notification",
  ]);
  const setData = props?.data;
  console.log("set data", setData);
  return (
    <div>
      <div className="mx-auto flex flex-row ">
        <div className="w-4/12 flex flex-col ">
          <div className=" mt-5 border h-36 mx-4 flex flex-row  rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="w-4/12 mt-5 ml-4">
              <img
                src="https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-food-logo-png-image_5687717.png"
                width={50}
                alt=""
              />
            </div>
            <div className="w-8/12 ">
              <h2 className="text-3xl ml-4 mt-4 ">Kanha Ji Restaurant</h2>
              <h4 className="text-sm ml-4 ">(XYZ RESTAURANT)</h4>
            </div>
          </div>
          <div className="mt-2 border mx-4 flex flex-col  rounded-lg pl-4 pr-4">
            <div className=" border-b pt-4 pb-4">
              <div className="flex items-start space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Net Wallet Balance (Ending Mar 2024)
                  </p>
                </div>
                <div className="inline-flex bg-red-500 rounded-xl  pl-2 pr-2 items-start text-base font-semibold text-gray-900 ">
                  ₹ 0
                </div>
              </div>
            </div>
            <div className=" border-b pt-4 pb-4">
              <div className="flex items-start space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Security Deposite
                  </p>
                </div>
                <div className="inline-flex bg-green-500 rounded-xl  pl-2 pr-2 items-start text-base font-semibold text-gray-900 ">
                  ₹ 0
                </div>
              </div>
            </div>
            <div className=" border-b pt-4 pb-4">
              <div className="flex items-start space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Commission
                  </p>
                </div>
                <div className="inline-flex bg-yellow-500 rounded-xl  pl-2 pr-2 items-start text-base font-semibold text-gray-900 ">
                  ₹ 0
                </div>
              </div>
            </div>
            <div className=" border-b pt-4 pb-4">
              <div className="flex items-start space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Status
                  </p>
                </div>
                <div className="inline-flex bg-gray-900 rounded-xl  pl-2 pr-2 items-start text-base font-semibold text-white ">
                  Active
                </div>
              </div>
            </div>
            <div className=" border-b pt-4 pb-4">
              <div className="flex items-start space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Store Type
                  </p>
                </div>
                <div className="inline-flex bg-green-400 rounded-xl  pl-2 pr-2 items-start text-base font-semibold text-gray-900 ">
                  Vegetarian
                </div>
              </div>
            </div>
            <div className=" border-b pt-4 pb-4">
              <div className="flex items-start space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    IRCTC Status
                  </p>
                </div>
                <div className="inline-flex bg-green-400 rounded-xl  pl-2 pr-2 items-start text-base font-semibold text-gray-900 ">
                  Approved
                </div>
              </div>
            </div>
            <div className=" border-b pt-4 pb-4">
              <div className="flex items-start space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Menu Type
                  </p>
                </div>
                <div className="inline-flex items-start text-base font-semibold text-gray-900 ">
                  OWN Menu
                </div>
              </div>
            </div>
            <div className=" border-b pt-4 pb-4">
              <div className="flex items-start space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Delivery Type
                  </p>
                </div>
                <div className="inline-flex items-start text-base font-semibold text-gray-900 ">
                  Vendor
                </div>
              </div>
            </div>
            <div className=" border-b pt-4 pb-4">
              <div className="flex items-start space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Cus. Delivery Charge
                  </p>
                </div>
                <div className="inline-flex items-start text-base font-semibold text-gray-900 ">
                  ₹ 0
                </div>
              </div>
            </div>
            <div className=" border-b pt-4 pb-4">
              <div className="flex items-start space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Ven. Delivery Charge
                  </p>
                </div>
                <div className="inline-flex items-start text-base font-semibold text-gray-900 ">
                  ₹ 0
                </div>
              </div>
            </div>
            <div className=" border-b pt-4 pb-4">
              <div className="flex items-start space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Created
                  </p>
                </div>
                <div className="inline-flex  bg-blue-500 rounded-xl  pl-2 pr-2 items-start text-base font-semibold text-gray-900 ">
                  02:03:2024 00:00
                </div>
              </div>
            </div>
            <div className=" border-b pt-4 pb-4">
              <div className="flex items-start space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Last Updated
                  </p>
                </div>
                <div className="inline-flex bg-blue-500 rounded-xl  pl-2 pr-2 items-start text-base font-semibold text-gray-900 ">
                  02-03-2024 00:00
                </div>
              </div>
            </div>
            <div className=" border-b pt-4 pb-4">
              <div className="flex items-start space-x-2">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate ">
                    Price Capping
                  </p>
                </div>
                <div className="inline-flex items-start text-base font-semibold text-gray-900 ">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-8 w-full"
          style={{
            boxSizing: "border-box",
            position: "relative",

            paddingRight: 15,
            paddingLeft: 15,
            flex: "0 0 66.6667%",
            maxWidth: "66.6667%",
          }}
        >
          <table
            className="table table-bordered w-full"
            style={{
              boxSizing: "border-box",
              borderCollapse: "collapse",

              marginBottom: "1rem",
              color: "rgb(33, 37, 41)",
              border: "1px solid rgb(222, 226, 230)",
            }}
          >
            <tbody style={{ boxSizing: "border-box" }}>
              <tr style={{ boxSizing: "border-box" }}>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Store Facility
                  <div
                    style={{ color: "rgba(0,0,0,0.01)", width: 0, height: 0 }}
                  >
                    &nbsp;
                    <br />
                  </div>
                  <div
                    style={{ color: "rgba(0,0,0,0.01)", width: 0, height: 0 }}
                  >
                    &nbsp;
                    <br />
                  </div>
                </td>
                <td
                  colSpan={3}
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Food In Train
                  <div
                    style={{ color: "rgba(0,0,0,0.01)", width: 0, height: 0 }}
                  >
                    &nbsp;
                    <br />
                  </div>
                  <div
                    style={{ color: "rgba(0,0,0,0.01)", width: 0, height: 0 }}
                  >
                    &nbsp;
                    <br />
                  </div>
                  <div
                    style={{ color: "rgba(0,0,0,0.01)", width: 0, height: 0 }}
                  >
                    &nbsp;
                    <br />
                  </div>
                  <div
                    style={{ color: "rgba(0,0,0,0.01)", width: 0, height: 0 }}
                  >
                    &nbsp;
                  </div>
                </td>
              </tr>
              <tr
                className="border-b w-full"
                style={{ boxSizing: "border-box" }}
              >
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Store Marking
                </td>
                <td
                  colSpan={3}
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  N/A
                  <div
                    style={{ color: "rgba(0,0,0,0.01)", width: 0, height: 0 }}
                  >
                    &nbsp;
                    <br />
                  </div>
                </td>
              </tr>
              <tr style={{ boxSizing: "border-box" }}>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Order Before Minute
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  <br />
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Station Category
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  <strong
                    className="badge badge-primary"
                    style={{
                      boxSizing: "border-box",
                      fontWeight: 700,
                      display: "inline-block",
                      padding: "0.25em 0.4em",
                      fontSize: 12,
                      lineHeight: 1,
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      verticalAlign: "middle",
                      borderRadius: "0.25rem",
                      transition:
                        "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "rgb(255, 0, 24)",
                    }}
                  >
                    N/A
                  </strong>
                  <span>&nbsp;</span>&nbsp; Zone:<span>&nbsp;</span>
                  <strong
                    style={{ boxSizing: "border-box", fontWeight: "bolder" }}
                  >
                    N/A
                  </strong>
                </td>
              </tr>
              <tr style={{ boxSizing: "border-box" }}>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Minimum Order
                </td>
                <th
                  style={{
                    boxSizing: "border-box",
                    textAlign: "inherit",
                    backgroundColor: "rgb(242, 242, 242)",
                    position: "sticky",
                    top: 0,
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  99
                </th>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Station Name
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Visakhapatnam Junction
                </td>
              </tr>
              <tr style={{ boxSizing: "border-box" }}>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Station Distance
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  100 Miter
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Speciality
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  <br />
                </td>
              </tr>
              <tr style={{ boxSizing: "border-box" }}>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Timing
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  10:00 to 23:00
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Break Time
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  <br />
                </td>
              </tr>
              <tr style={{ boxSizing: "border-box" }}>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Delivery Charge
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  <br />
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Store Category
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  <strong
                    className="badge badge-secondary"
                    style={{
                      boxSizing: "border-box",
                      fontWeight: 700,
                      display: "inline-block",
                      padding: "0.25em 0.4em",
                      fontSize: 12,
                      lineHeight: 1,
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      verticalAlign: "middle",
                      borderRadius: "0.25rem",
                      transition:
                        "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "rgb(68, 92, 200)",
                    }}
                  >
                    Active
                  </strong>
                </td>
              </tr>
              <tr style={{ boxSizing: "border-box" }}>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Group Order Discount
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  0
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Agreement
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  No
                </td>
              </tr>
              <tr style={{ boxSizing: "border-box" }}>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  SignUp Type
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  <br />
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Marketed By
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  <br />
                </td>
              </tr>
              <tr style={{ boxSizing: "border-box" }}>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Closing From
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  <br />
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Closing To
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  <br />
                </td>
              </tr>
              <tr style={{ boxSizing: "border-box" }}>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Inactive Notes
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  <br />
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  Closing Reason
                </td>
                <td
                  style={{
                    boxSizing: "border-box",
                    padding: "0.75rem",
                    border: "1px solid rgb(222, 226, 230)",
                  }}
                >
                  <br />
                </td>
              </tr>
            </tbody>
          </table>
          <div
            className="ms-panel px-2 mb-0 pb-0"
            style={{
              boxSizing: "border-box",
              marginBottom: 20,
              paddingBottom: "0px !important",
              paddingRight: "0.5rem !important",
              paddingLeft: "0.5rem !important",
              background: "rgba(255, 253, 253, 0.698)",
              boxShadow: "rgba(69, 65, 78, 0.25) 0px 3px 14px 0px",
              color: "rgb(33, 37, 41)",
              fontFamily: "Roboto, sans-serif",
              fontSize: 14,
              fontStyle: "normal",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontWeight: 400,
              letterSpacing: "normal",
              orphans: 2,
              textAlign: "left",
              textIndent: 0,
              textTransform: "none",
              widows: 2,
              wordSpacing: 0,
              WebkitTextStrokeWidth: 0,
              whiteSpace: "normal",
              textDecorationThickness: "initial",
              textDecorationStyle: "initial",
              textDecorationColor: "initial",
            }}
          >
            <div
              className="ms-panel-body"
              style={{
                boxSizing: "border-box",
                position: "relative",
                padding: "0.5rem",
              }}
            >
              {/* <ul
                className="nav nav-tabs tabs-bordered d-flex nav-justified mb-4"
                role="tablist"
                style={{
                  boxSizing: "border-box",
                  marginTop: 0,
                  marginBottom: "1.5rem !important",
                  listStyle: "none",
                  padding: 0,
                  display: "flex !important",
                  flexWrap: "wrap",
                  border: 0,
                }}
              >
                <li
                  role="presentation"
                  style={{ boxSizing: "border-box", flex: "1 1 auto" }}
                >
                  <a
                    href="https://www.railkafe.com/admin/view-restaurant?x=MjM5&id=239#tab1"
                    aria-controls="tab1"
                    className="show active"
                    role="tab"
                    data-toggle="tab"
                    aria-selected="true"
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(255, 0, 24)",
                      textDecoration: "none",
                      background: "rgb(255, 255, 255)",
                      transition: "all 0s ease 0s",
                      fontSize: 14,
                      display: "block",
                      padding: "0px 0px 1rem",
                      textAlign: "center",
                      borderBottom: "2px solid rgb(255, 0, 24)",
                    }}
                  >
                    Contact Info.
                  </a>
                </li>
                <li
                  role="presentation"
                  style={{ boxSizing: "border-box", flex: "1 1 auto" }}
                >
                  <a
                    href="https://www.railkafe.com/admin/view-restaurant?x=MjM5&id=239#tab2"
                    aria-controls="tab2"
                    role="tab"
                    data-toggle="tab"
                    className=""
                    aria-selected="false"
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(52, 51, 74)",
                      textDecoration: "none",
                      background: "rgb(255, 255, 255)",
                      transition: "all 0s ease 0s",
                      fontSize: 14,
                      display: "block",
                      padding: "0px 0px 1rem",
                      textAlign: "center",
                      borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    IRCTC Data
                  </a>
                </li>
                <li
                  role="presentation"
                  style={{ boxSizing: "border-box", flex: "1 1 auto" }}
                >
                  <a
                    href="https://www.railkafe.com/admin/view-restaurant?x=MjM5&id=239#tab3"
                    aria-controls="tab3"
                    role="tab"
                    data-toggle="tab"
                    className=""
                    aria-selected="false"
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(52, 51, 74)",
                      textDecoration: "none",
                      background: "rgb(255, 255, 255)",
                      transition: "all 0s ease 0s",
                      fontSize: 14,
                      display: "block",
                      padding: "0px 0px 1rem",
                      textAlign: "center",
                      borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    Ratings
                  </a>
                </li>
                <li
                  role="presentation"
                  style={{ boxSizing: "border-box", flex: "1 1 auto" }}
                >
                  <a
                    href="https://www.railkafe.com/admin/view-restaurant?x=MjM5&id=239#tab4"
                    aria-controls="tab4"
                    role="tab"
                    data-toggle="tab"
                    className=""
                    aria-selected="false"
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(52, 51, 74)",
                      textDecoration: "none",
                      background: "rgb(255, 255, 255)",
                      transition: "all 0s ease 0s",
                      fontSize: 14,
                      display: "block",
                      padding: "0px 0px 1rem",
                      textAlign: "center",
                      borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    Notifications Preference
                  </a>
                </li>
              </ul> */}
              <nav className="flex border-b border-gray-300 w-full">
                <TabSelect
                  isActive={selectedTab === "contactInfo"}
                  onClick={() => setSelectedTab("contactInfo")}
                >
                  Contact Info.
                </TabSelect>
                <TabSelect
                  isActive={selectedTab === "irctData"}
                  onClick={() => setSelectedTab("irctData")}
                >
                  IRCTC Data
                </TabSelect>
                <TabSelect
                  isActive={selectedTab === "ratings"}
                  onClick={() => setSelectedTab("ratings")}
                >
                  Ratings
                </TabSelect>
                <TabSelect
                  isActive={selectedTab === "notification"}
                  onClick={() => setSelectedTab("notification")}
                >
                  Notifications Preference
                </TabSelect>
              </nav>
              <div className="p-2">
                <TabPanel hidden={selectedTab !== "contactInfo"}>
                  <ContactInfo data2={setData?.resturant.userInfo} />
                </TabPanel>
                <TabPanel hidden={selectedTab !== "irctData"}>
                  Wallet Transaction
                </TabPanel>
                <TabPanel hidden={selectedTab !== "ratings"}>
                  Delivery Boys
                </TabPanel>
                <TabPanel hidden={selectedTab !== "notification"}>
                  Store Activities
                </TabPanel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantFirstCompoents;
