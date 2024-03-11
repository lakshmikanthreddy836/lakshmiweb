import React, { useState } from "react";
import "./index.css"
import OrderViaPnrCard from "./components/OrderViaPnr";
import OrderViaNoCard from "./components/OrderViaNo";
import OrderResturantList from "./components/OrderResturanList";

const Add_New_Order = () => {


    return (
        <div className="mt-1 mx-2">
            <h5 className="font-bold">Add New Order</h5>
            <div className="mt-1 grid ">
                <div className="grid-row flex">
                    <div className="grid-col-4 w-[30%]">
                        <OrderViaPnrCard />

                        <OrderViaNoCard />

                    </div>

                    <div className="col-8 flex-1">
                        <OrderResturantList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add_New_Order;
