import React, { useEffect, useMemo, useState } from "react";
import SelectOption from "../../../common-components/SelectOption";
import { TrainInfo, TrainInfoDetails } from "../../../Services/Train"
import { dateTimeFormat } from "../../../utils/commonFunc"

const OrderViaNoCard = (props) => {
    const { setOrderVia } = props;

    const [searchWithNo, setSearchNo] = useState({ dateof_journey: dateTimeFormat(new Date(), "yyyy-mm-dd") })
    const [trainInfo, setTrainInfo] = useState({})
    const [trainStationList, setTrainStationList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (searchWithNo?.train_number?.length === 5) {
            getTrainInfo()
        }
    }, [searchWithNo.train_number])

    const memoTrainStationList = useMemo(() => {
        return [...trainStationList].map((v) => { return { ...v, optionLabel: `${v?.StationsInfo?.station_name} (${v.station_code})` } })
    }, [trainStationList])


    const handleInputNo = (e) => {
        const { name, value } = e.target;
        if (value.length >= 6) return true;
        let updatedVal = value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
        setSearchNo((prev) => ({ ...prev, [name]: updatedVal }))
    }

    const getTrainInfo = () => {
        setIsLoading(true)
        TrainInfo({ train_number: searchWithNo.train_number }).then((res) => {
            setTrainInfo(res?.data?.train)
        }).catch((err) => { })

        TrainInfoDetails({ train_number: searchWithNo.train_number }).then((res) => {
            setTrainStationList(res?.data?.train_details)
        }).catch((err) => { }).finally(() => {
            setIsLoading(false)
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchNo((prev) => ({ ...prev, [name]: value }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setOrderVia(searchWithNo)
    }

    return (
        <div className="card mt-4">
            <div className="card-header text-center bg-gray-100 p-4 font-bold">
                <h6>Order Via Train Number</h6>
            </div>
            <div className="card-body p-4">
                <form method="get" onSubmit={handleSubmit} >

                    <div className="mb-3">
                        <label>Train Number</label>
                        <div className="input-group">
                            <input name="train_number" id="train_number" type="text"
                                onChange={handleInputNo} value={searchWithNo?.train_number || ""}
                                placeholder="Train No.." className="form-control w-full" required
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Date Of Journey</label>
                        <div className="input-group">
                            <input type="date" name="dateof_journey"
                                value={searchWithNo?.dateof_journey || ""}
                                className="form-control w-full"
                                required=""
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    {
                        !(trainStationList.length) || isLoading ? null :
                            <>
                                <div className="mb-3">
                                    <label>Train Name</label>
                                    <div className="input-group">
                                        <input type="text" disabled name="journey_date" className="form-control w-full"
                                            // value={trainInfo?.train_name || ""}
                                            defaultValue={trainInfo?.train_name || ""}
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label>Boarding Station</label>
                                    <SelectOption
                                        label={"Boarding Station"}
                                        showKey="optionLabel"
                                        getKey="station_code"
                                        onChange={handleChange}
                                        name="boarding_station"
                                        options={memoTrainStationList || []}
                                        style="w-full mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Delivery Station</label>
                                    <SelectOption
                                        label={"Delivery Station"}
                                        showKey="optionLabel"
                                        getKey="station_code"
                                        onChange={handleChange}
                                        name="delivery_station"
                                        options={memoTrainStationList || []}
                                        style="w-full mt-1 px-3 py-2 bg-white border shadow-300 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-sky-400 rounded-md sm:text-sm focus:ring-2 max-w-[-webkit-fill-available]"
                                    />
                                </div>
                            </>
                    }

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
