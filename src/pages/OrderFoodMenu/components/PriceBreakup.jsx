
import React, { useMemo, useState } from "react";

const PriceBreakUpList = (props) => {
    const { cartItems } = props;

    const isAddedInCart = useMemo(() => {
        return Object.keys(cartItems)
    }, [cartItems])

    const MemoisedList = useMemo(() => {
        return [...isAddedInCart].map((item, index) => {
            let selectItem = cartItems[item];
            let totalAmnt = (selectItem.selling_price || 0) * (selectItem.count || 1)
            return <React.Fragment key={index}>
                <tr>
                    <td className="py-2 px-4 border">{selectItem.food_name || ""}</td>
                    <td className="py-2 px-4 border">{selectItem.count || 1}</td>
                    <td className="py-2 px-4 border">{selectItem.selling_price || 0}</td>
                    <td className="py-2 px-4 border">{totalAmnt || 0}</td>
                </tr>
            </React.Fragment>
        })
    }, [isAddedInCart])

    const { totalAmnt, gstAmnt, finalAmnt } = useMemo(() => {
        let totalAmnt = 0;
        let gstAmnt = 0;
        let finalAmnt = 0;

        [...isAddedInCart].map((item, index) => {
            let selectItem = cartItems[item];
            let total = (selectItem.selling_price || 0) * (selectItem.count || 1)
            totalAmnt = total + totalAmnt
        })

        gstAmnt = parseFloat((totalAmnt * 0.05)).toFixed(2) ;
        finalAmnt = parseFloat(totalAmnt) + parseFloat(gstAmnt)

        return { totalAmnt, gstAmnt, finalAmnt }
    }, [isAddedInCart])

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
                            {
                                isAddedInCart.length ? <>
                                    {MemoisedList}
                                    <tr>
                                        <td className="py-2 px-4 border-b"></td>
                                        <td className="py-2 px-4 border-b"></td>
                                        <td className="py-2 px-4 border-b">Total</td>
                                        <td className="py-2 px-4 border">{totalAmnt || 0}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b"></td>
                                        <td className="py-2 px-4 border-b"></td>
                                        <td className="py-2 px-4 border-b">GST</td>
                                        <td className="py-2 px-4 border">{gstAmnt || 0}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b"></td>
                                        <td className="py-2 px-4 border-b"></td>
                                        <td className="py-2 px-4 border-b">Total</td>
                                        <td className="py-2 px-4 border">{finalAmnt || 0}</td>
                                    </tr>
                                </>
                                    :
                                    <tr>
                                        <td className="py-2 px-4 border-b"></td>
                                        <td className="py-2 px-4 border-b">Your Cart is Empty!</td>
                                    </tr>
                            }
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