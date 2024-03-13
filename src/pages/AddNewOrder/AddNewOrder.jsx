import React, { useEffect, useState } from "react";
import "./index.css"
import OrderViaPnrCard from "./components/OrderViaPnr";
import OrderViaNoCard from "./components/OrderViaNo";
import OrderResturantList from "./components/OrderResturanList";
import { GetAllResturantList } from "../../Services/AddNewOrder";
import ShowErrorMessages from "../../alert-messages/ShowErrorMessages";

const Add_New_Order = () => {

    const [orderVia, setOrderVia] = useState({})
    const [allResturantList, setAllResturantList] = useState([])
    const [trainDetails, setTrainDetails] = useState({})

    useEffect(() => {
        if ((orderVia?.train_number) || (orderVia?.pnr)) {
            getAllResturantOrderList(orderVia)
        }
    }, [orderVia])

    const getAllResturantOrderList = (payload) => {
        GetAllResturantList({ ...payload })
            .then((res) => {
                if (!res.data?.resp?.length) {
                    return ShowErrorMessages("No Record Found!.")
                }
                setAllResturantList(res.data?.resp)
                setTrainDetails(res.data?.trainInfo)
            })
            .catch((err) => { })
    }

    return (
        <div className="mt-1 mx-2">
            <h5 className="font-bold">Add New Order</h5>
            <div className="mt-1 grid ">
                <div className="grid-row flex">
                    <div className="grid-col-4 w-[30%]">
                        <OrderViaPnrCard setOrderVia={setOrderVia} />

                        <OrderViaNoCard setOrderVia={setOrderVia} />
                    </div>

                    <div className="col-8 flex-1">
                        {allResturantList.length ? <OrderResturantList
                            allList={allResturantList}
                            trainDetails={trainDetails}
                        />
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add_New_Order;
