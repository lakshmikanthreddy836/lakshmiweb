
import React, { useMemo, useState } from "react";
import CustAccordion from "../../../common-components/Accordian";

const OrderFoodMenuList = (props) => {

    const { list = [] } = props;

    const ContentArrFood = (foodList = []) => {
        return foodList.length ? [...foodList].map((item, index) => {
            return <React.Fragment key={index}>
                <AccordianContent item={item} />
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
    }, [list])


    return (
        <div className="mx-2">
            <div className=" card">
                <div className="text-left bg-gray-100 p-4 flex justify-between">
                    <div>
                        <div>Delivery At: <span className="font-bold"> Purushottam Exp / 12802</span></div>
                        <div>Minimum Order: <span className="font-bold"> 199</span></div>
                        <div>Order Before: <span className="font-bold">  00:45</span></div>
                    </div>
                    <div>
                        <div>DOJ: <span className="font-bold"> 11/12/2024</span></div>
                        <div>Train No. : <span className="font-bold"> 12802</span></div>
                        <div>Train Name: <span className="font-bold">Purushottam Exp</span></div>
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

const AccordianContent = ({ item }) => {
    const { food_name, selling_price, food_discription } = item;

    return <div className="flex justify-between border-b">
        <div className="flex justify-between w-[60%]">
            <div className="p-2">
                <div className="">
                    <span className="font-bold">{food_name || ""} </span>
                </div>
                <div className="">
                    {selling_price || 0}
                </div>
                <div className="pt-4 text-xs">
                    {food_discription}
                </div>
            </div>
        </div>
        <div className="w-[20%] flex justify-center items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-[50px]">
                Food Menu
            </button>
        </div>
    </div>
}

export default OrderFoodMenuList;
