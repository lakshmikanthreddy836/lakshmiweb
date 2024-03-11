import React, { useState } from "react";


const OrderViaPnrCard = () => {


    const [searchWithPnr, setSearchPnr] = useState("")


    const handleInputPnr = (e) => {
        const { name, value } = e.target;
        if (value.length == 10) return false;
        let updatedVal = value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
        setSearchPnr(updatedVal)
    }

    return (
        <div className="card">
            <div className="card-header text-center bg-gray-100 p-4 font-bold">
                <h6>Order Via PNR</h6>
            </div>
            <div className="card-body p-4">
                <form method="" onSubmit={() => { }}>
                    <div className="">
                        <input className="form-control w-full" name="pnr_number" id="mobile" type="text"
                            required
                            value={searchWithPnr || ""}
                            onChange={handleInputPnr}
                            onkeyup="check(); return false;"
                            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                            onkeypress="if(this.value.length==10) return false;"
                            placeholder="Enter 10 digit PNR Number"
                        />
                    </div>
                    <div className="py-4">
                        <button type="submit" className="w-full h-8 text-[15px] text-white bg-red-500 font-semibold px-3 rounded-[5px]">
                            Search Food
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderViaPnrCard;
