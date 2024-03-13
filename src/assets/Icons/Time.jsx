import React from "react";

const TimeIcon = ({ className = "" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" className={className}>
            <path fill-rule="evenodd" d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2zM9 4a1 1 0 0 1 2 0v5.5a1 1 0 0 1-.293.707l-3 3a1 1 0 0 1-1.414-1.414L9 9.086V4z" clip-rule="evenodd" />
        </svg>

    );
};

export default TimeIcon;
