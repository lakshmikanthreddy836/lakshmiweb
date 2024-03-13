
import React from "react";
import StarIcon from "../assets/Icons/star";


const Rating = (props) => {
    const { rating = 1, svgClass = "" } = props
    return (
        <div className="flex items-center p-[0 5px] bg-yellow-500 rounded-md px-2 text-white font-bold">
            {rating}
            <StarIcon className={svgClass || ""} />
        </div>
    );
};

export default Rating;
