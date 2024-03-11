import React, { useState } from "react";
import SelectOption from "../../../common-components/SelectOption";


const OrderViaNoCard = () => {


    const [searchWithPnr, setSearchPnr] = useState("")


    const handleInputPnr = (e) => {
        const { name, value } = e.target;
        if (value.length == 10) return false;
        let updatedVal = value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
        setSearchPnr(updatedVal)
    }

    return (
        <div className="card mt-4">
            <div className="card-header text-center bg-gray-100 p-4 font-bold">
                <h6>Order Via Train Number</h6>
            </div>
            <div className="card-body p-4">
                <form method="get">

                    <div className="mb-3">
                        <label>Train Number</label>
                        <div className="input-group">
                            <input name="train_no" id="train_no" type="text"
                                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                                onkeypress="if(this.value.length==5) return false;"
                                placeholder="Train No.." className="form-control w-full" required
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Date Of Journey</label>
                        <div className="input-group">
                            <input type="date" name="journey_date" value="2024-03-11" className="form-control w-full"
                                required=""
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Train Name</label>
                        <div className="input-group">
                            <input type="text" disabled name="journey_date" className="form-control w-full" />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Boarding Station</label>
                        <SelectOption
                            label={"Boarding Station"}
                            options={[]}
                            // value={valueOrder}
                            // onChange={handleChangeOrder}
                            style="w-full mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"
                        />
                    </div>

                    <div className="mb-3">
                        <label>Delivery Station</label>
                        <SelectOption
                            label={"Delivery Station"}
                            options={[]}
                            // value={valueOrder}
                            // onChange={handleChangeOrder}
                            style="w-full mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"
                        />
                    </div>

                    <div className="" id="train_details"></div>

                    <div className="mb-2">
                        <button type="submit" className="w-full h-8 text-[15px] text-white bg-red-500 font-semibold px-3 rounded-[5px]">
                            Search Restaurant
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderViaNoCard;
