import React, { useEffect, useState } from "react";
import "../AddNewOrder/index.css"
import OrderFoodMenuList from "./components/OrderFoodMenuList";
import PriceBreakUpList from "./components/PriceBreakup";
import { useLocation } from "react-router-dom";
import { GetAddNewOrderFood } from "../../Services/AddNewOrder";

const Order_Food_Menu = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const rest_id = queryParams.get('rest_id');

    const [restFoodMenuList, setRestFoodMenuList] = useState()

    useEffect(() => {
        if (rest_id?.length) {
            GetAddNewOrderFood({ resturant_id: rest_id })
                .then((res) => {
                    setRestFoodMenuList(res.data.foodMapping)
                })
                .catch((err) => { })
        }
    }, [rest_id])

    return (
        <div className="mt-1 mx-2">
            <h5 className="font-bold">Order Food Menu</h5>
            <div className="mt-1 grid ">
                <div className="grid-row flex">
                    <div className="grid-col-4 w-[60%]">
                        <OrderFoodMenuList list={restFoodMenuList} />
                    </div>

                    <div className="col-8 flex-1">
                        <PriceBreakUpList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order_Food_Menu;
