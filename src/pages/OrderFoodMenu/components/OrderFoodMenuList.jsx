
import React, { useMemo, useState } from "react";
import CustAccordion from "../../../common-components/Accordian";
import VegIcon from "../../../assets/veg.png"
import NonVegIcon from "../../../assets/nonveg.png"
import Minus from "../../../assets/Icons/Minus";
import Plus from "../../../assets/Icons/Plus";

const OrderFoodMenuList = (props) => {

    const { list = [], qsParms = {}, addDelToCartItems, cartItems } = props;
    const { rest_id, train_name, train_no, min_order, doj, del_st_name, del_st_code, boarding_st } = qsParms

    const ContentArrFood = (foodList = []) => {
        return foodList.length ? [...foodList].map((item, index) => {
            return <React.Fragment key={index}>
                <AccordianContent item={item} addDelToCartItems={addDelToCartItems} cartItems={cartItems} />
            </React.Fragment>
        }) : "N/A"
    }

    const MemoisedList = useMemo(() => {
        return [...list].map((item, index) => {
            return <React.Fragment key={index}>
                <div>
                    <CustAccordion
                        title={<AccordianTitle title={item.category_name} />}
                        content={ContentArrFood(item.food)}
                        btnClass="m-3"
                    />
                </div>
            </React.Fragment>
        })
    }, [list, cartItems])


    return (
        <div className="mx-2">
            <div className=" card">
                <div className="text-left bg-gray-100 p-4 flex justify-between">
                    <div>
                        <div>Delivery At: <span className="font-bold"> {del_st_name || "-"} ({del_st_code || "-"})</span></div>
                        <div>Minimum Order: <span className="font-bold"> ₹ {min_order || "-"}</span></div>
                        <div>Order Before: <span className="font-bold">  00:45(static) </span></div>
                    </div>
                    <div>
                        <div>DOJ: <span className="font-bold"> {doj || "-"}</span></div>
                        <div>Train No. : <span className="font-bold"> {train_no || "-"}</span></div>
                        <div>Train Name: <span className="font-bold">{train_name || "-"}</span></div>
                    </div>
                </div>
                <div className="overflow-auto h-[calc(100vh-25vh)]">
                    {MemoisedList}
                </div>
            </div>
        </div>
    );
};

const AccordianTitle = ({ title }) => {
    return <div className="flex justify-between">
        <div>{title || ""}</div>
    </div>
}

const AccordianContent = ({ item, addDelToCartItems, cartItems }) => {
    const { food_name, selling_price, food_discription, food_type, food_menu_id } = item;

    const addedItemCount = cartItems?.[food_menu_id]?.count || 0

    return <div className="flex justify-between border-b">
        <div className="flex justify-between w-[60%]">
            <div className="p-2">
                <div className="">
                    <span className="font-bold flex items-center">{food_name || ""}
                        <img src={food_type.toLowerCase() == "veg" ? VegIcon : NonVegIcon} className="h-[20px]" />
                    </span>
                </div>
                <div className="">
                    <span className="font-bold">₹</span>  {selling_price || 0}
                </div>
                <div className="pt-4 text-xs">
                    {food_discription}
                </div>
            </div>
        </div>
        <div className="w-[20%] flex justify-center items-center">
            {
                addedItemCount ?
                    <div className="bg-white border-red-500 border text-red-500 font-bold py-2 px-4 rounded h-[50px] flex items-center">
                        <span className="cursor-pointer text-black mr-2 text-[12px] flex items-center" onClick={() => { addDelToCartItems(item, addedItemCount - 1) }}>
                            <Minus />
                        </span>
                        <span className="px-2">{addedItemCount || 1}</span>
                        <span className="cursor-pointer text-black ml-2 text-[12px] flex items-center" onClick={() => { addDelToCartItems(item, addedItemCount + 1) }}>
                            <Plus />
                        </span>
                    </div>
                    :
                    <button className="bg-white border-red-500 border text-red-500 font-bold py-2 px-4 rounded h-[50px]" onClick={() => { addDelToCartItems(item, 1) }}>
                        Add
                    </button>
            }
        </div>
    </div>
}

export default OrderFoodMenuList;
