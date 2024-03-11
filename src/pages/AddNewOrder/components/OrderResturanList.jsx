
import React, { useMemo, useState } from "react";
import CustAccordion from "../../../common-components/Accordian";

const OrderResturantList = () => {

    const MemoisedList = useMemo(() => {
        return [1, 2, 3, 4].map((item, index) => {
            return <React.Fragment key={index}>
                <div>
                    <CustAccordion title={<AccordianTitle />} content={<AccordianContent />} />
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
                <div>
                    {MemoisedList}
                </div>
            </div>
        </div>
    );
};

const AccordianTitle = () => {
    return <div className="flex justify-between">
        <div>Day: 1    First</div>
        <div>New Delhi (NDLS)</div>
    </div>
}

const AccordianContent = () => {
    return <div className="flex justify-between">
        <div className="flex justify-between w-[60%]">
            <div>
                <div className="p-3">
                    <span className="font-bold">SAGAR BARBEQUE; </span>
                    Min-Order :  199
                </div>
                <div className="p-3">
                    4.5  100 + Rating jain food
                </div>
            </div>
            <div>
                <div className="p-3">
                    Open : <span className="font-bold"> 10:30</span>    Close : <span className="font-bold">23:00</span>
                </div>
                <div className="p-3">
                    Order Before Time: <span className="font-bold">00:45</span>
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

export default OrderResturantList;
