
import React, { useMemo, useState } from "react";

const PriceBreakUpList = () => {

    const MemoisedList = useMemo(() => {
        return [1, 2, 3, 4].map((item, index) => {
            return <React.Fragment key={index}>
                <tr>
                    <td className="py-2 px-4 border">John Doe</td>
                    <td className="py-2 px-4 border">1</td>
                    <td className="py-2 px-4 border">00</td>
                    <td className="py-2 px-4 border">00</td>
                </tr>
            </React.Fragment>
        })
    }, [])


    return (
        <div className="mx-2">
            <div className=" card">
                <div className="p-4">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border">Items</th>
                                <th className="py-2 px-4 border">Qty</th>
                                <th className="py-2 px-4 border">Price</th>
                                <th className="py-2 px-4 border">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MemoisedList}
                            <tr>
                                <td className="py-2 px-4 border-b"></td>
                                <td className="py-2 px-4 border-b"></td>
                                <td className="py-2 px-4 border-b">Total</td>
                                <td className="py-2 px-4 border">100</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b"></td>
                                <td className="py-2 px-4 border-b"></td>
                                <td className="py-2 px-4 border-b">GST</td>
                                <td className="py-2 px-4 border">100</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border-b"></td>
                                <td className="py-2 px-4 border-b"></td>
                                <td className="py-2 px-4 border-b">Total</td>
                                <td className="py-2 px-4 border">100</td>
                            </tr>
                            "Your Cart is Empty!"
                        </tbody>
                    </table>
                </div>
                <div className="text-left bg-gray-100 p-4 flex justify-between">
                    <div>
                        <div className="font-bold">2 Item in Cart:</div>
                        <div className="font-bold"> 541.8 </div>
                    </div>
                    <div>
                        <button type="submit" className="w-full h-8 text-[15px] text-white bg-red-500 font-semibold px-3 rounded-[5px]">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceBreakUpList