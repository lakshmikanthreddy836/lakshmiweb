import React, { useEffect, useMemo, useState } from "react";
import "../AddNewOrder/index.css"
import OrderFoodMenuList from "./components/OrderFoodMenuList";
import PriceBreakUpList from "./components/PriceBreakup";
import { useLocation } from "react-router-dom";
import { GetAddNewOrderFood } from "../../Services/AddNewOrder";
import { qsToObject } from "../../utils/commonFunc";

const Order_Food_Menu = () => {
    const location = useLocation();

    const qsParms = useMemo(() => {
        return qsToObject(location.search)
    }, [location.search])

    const { rest_id } = qsParms;

    const [restFoodMenuList, setRestFoodMenuList] = useState();
    const [cartItems, setCartitems] = useState({})

    useEffect(() => {
        if (rest_id?.length) {
            GetAddNewOrderFood({ resturant_id: rest_id })
                .then((res) => {
                    setRestFoodMenuList(res.data.foodMapping)
                })
                .catch((err) => { })
        }
    }, [rest_id])

    const addDelToCartItems = (item, count) => {
        let updatedCartItems = { ...cartItems }
        if (updatedCartItems[item.food_menu_id] && count == "0") {
            delete updatedCartItems[item.food_menu_id]
        }
        else {
            updatedCartItems[item.food_menu_id] = { count: count, ...item }
        }

        setCartitems(updatedCartItems)
    }

    return (
        <div className="mt-1 mx-2">
            <h5 className="font-bold">Order Food Menu</h5>
            <div className="mt-1 grid ">
                <div className="grid-row flex">
                    <div className="grid-col-4 w-[60%]">
                        <OrderFoodMenuList
                            list={restFoodMenuList}
                            qsParms={qsParms}
                            cartItems={cartItems}
                            addDelToCartItems={addDelToCartItems}
                        />
                    </div>

                    <div className="col-8 flex-1">
                        <PriceBreakUpList cartItems={cartItems} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order_Food_Menu;
