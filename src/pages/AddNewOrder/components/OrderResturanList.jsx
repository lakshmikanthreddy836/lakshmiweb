
import React, { useMemo, useState } from "react";
import CustAccordion from "../../../common-components/Accordian";
import { useNavigate } from "react-router-dom";

const OrderResturantList = (props) => {
    const { allList = [] } = props;

    const MemoisedResturantList = (resturantInfo) => {
        return resturantInfo.length ? [...resturantInfo].map((item, index) => {
            return <React.Fragment key={index}>
                <AccordianContent item={item} />
            </React.Fragment>
        }) : "N/A"
    }

    const MemoisedList = useMemo(() => {
        return [...allList].map((item, index) => {
            return <React.Fragment key={index}>
                <div>
                    <CustAccordion
                        title={<AccordianTitle
                            day={item.day}
                            arr={item.arr}
                            station_code={item?.StationsInfo?.station_code}
                            station_name={item?.StationsInfo?.station_name}
                        />}
                        content={MemoisedResturantList(item.resturantInfo)}
                    />
                </div>
            </React.Fragment>
        })
    }, [])

    return (
        <div className="mx-2">
            <div className=" card">
                <div className="text-center bg-gray-100 p-4 flex justify-around">
                    <div>
                        <div>Ordering Food In: <span className="font-bold"> Purushottam Exp / 12802</span></div>
                    </div>
                    <div>
                        <div>DOJ: <span className="font-bold"> 11/12/2024</span></div>
                    </div>
                </div>
                <div className="overflow-auto h-[calc(100vh-20vh)]">
                    {MemoisedList}
                </div>
            </div>
        </div>
    );
};

const AccordianTitle = ({ day, arr, station_code, station_name }) => {
    return <div className="flex justify-between">
        <div>Day: {day || ""}    {arr || ""}</div>
        <div>{station_name || ""} ({station_code || ""})</div>
    </div>
}

const AccordianContent = ({ item }) => {
    const navigate = useNavigate()
    const { min_order_value, resturant_name, rating, rating_count, open_before_time, close_time, open_time,
        resturant_id } = item;


    const onClickFoodMenu = () => {
        navigate(`/order-food-menu?rest_id=${resturant_id}`)
    }

    return <div className="flex justify-between border-b">
        <div className="flex justify-between w-[60%]">
            <div>
                <div className="p-3">
                    <span className="font-bold">{resturant_name || "-"}; </span>
                    Min-Order :  {min_order_value || "-"}
                </div>
                <div className="p-3">
                    {rating}  {rating_count} Rating jain food
                </div>
            </div>
            <div>
                <div className="p-3">
                    Open : <span className="font-bold"> {open_time}</span>    Close : <span className="font-bold">{close_time}</span>
                </div>
                <div className="p-3">
                    Order Before Time: <span className="font-bold">{open_before_time}</span>
                </div>
            </div>
        </div>
        <div className="w-[20%] flex justify-center items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-[50px]" onClick={onClickFoodMenu}>
                Food Menu
            </button>
        </div>
    </div>
}

export default OrderResturantList;
