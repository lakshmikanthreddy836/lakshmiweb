
import React, { useMemo, useState } from "react";
import CustAccordion from "../../../common-components/Accordian";
import { useNavigate } from "react-router-dom";
import VegIcon from "../../../assets/veg.png"
import NonVegIcon from "../../../assets/nonveg.png"
import Rating from "../../../common-components/Rating";
import TimeIcon from "../../../assets/Icons/Time";
import { objectToQS } from "../../../utils/commonFunc";


const OrderResturantList = (props) => {
    const { allList = [], trainDetails = {} } = props;

    const MemoisedResturantList = (resturantInfo, stationsInfo) => {
        return resturantInfo.length ? [...resturantInfo].map((item, index) => {
            return <React.Fragment key={index}>
                <AccordianContent item={item} trainDetails={trainDetails} stationsInfo={stationsInfo} />
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
                        content={MemoisedResturantList(item.resturantInfo, item?.StationsInfo)}
                    />
                </div>
            </React.Fragment>
        })
    }, [allList])

    return (
        <div className="mx-2">
            <div className=" card">
                <div className="text-center bg-gray-100 p-4 flex justify-around">
                    <div>
                        <div>Ordering Food In: <span className="font-bold"> {trainDetails?.train_name || ""} / {trainDetails?.train_number || ""}</span></div>
                    </div>
                    <div>
                        <div>DOJ: <span className="font-bold"> {trainDetails?.dateof_journey || ""}</span></div>
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
        <div className="flex items-center">
            <div>
                Day:  {day || ""}
            </div>
            <div className="flex items-center pl-2">
                <TimeIcon className="h-[20px] pr-1" /> {arr || ""}
            </div>
        </div>
        <div>{station_name || ""} ({station_code || ""})</div>
    </div>
}

const AccordianContent = ({ item, trainDetails = {}, stationsInfo = {} }) => {
    const navigate = useNavigate()
    const { min_order_value, resturant_name, rating, rating_count, open_before_time, close_time, open_time,
        resturant_id, food_type } = item;


    const onClickFoodMenu = () => {
        let obj = {
            rest_id: resturant_id || "",
            train_name: trainDetails.train_name || "",
            train_no: trainDetails.train_number || "",
            doj: trainDetails.dateof_journey || "",
            del_st_code: stationsInfo?.station_code || "",
            del_st_name: stationsInfo?.station_name || "",
            boarding_st: "",
            min_order: min_order_value || ""
        }

        let parmsString = objectToQS(obj)
        navigate(`/order-food-menu?${parmsString}`)
    }

    return <div className="flex justify-between border-b">
        <div className="flex justify-between w-[60%]">
            <div>
                <div className="p-3">
                    <span className="font-bold">{resturant_name || "-"}; </span>
                    Min-Order :  {min_order_value || "-"}
                </div>
                <div className="p-3 flex items-center">
                    <Rating rating={rating} />  {rating_count}  Rating <img src={food_type == "veg" ? VegIcon : NonVegIcon} className="h-[20px]" /> jain food
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
