export const debounce = (func, delay) => {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
};

export const dateTimeFormat = (dateTime, format) => {
    const dateString = dateTime;
    const date = new Date(dateString);
    // Get day, month, and year components
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear().toString();
    // Format the date as DD/MM/YYYY
    let formattedDate = ""
    if (format == "yyyy-mm-dd") {
        formattedDate = `${year}-${month}-${day}`;
    } else {
        formattedDate = `${day}/${month}/${year}`;
    }
    return formattedDate;
};

export function objectToQS(obj) {
    const params = new URLSearchParams();

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            params.append(key, obj[key]);
        }
    }

    return params.toString();
}

export function qsToObject(queryString) {
    const params = new URLSearchParams(queryString);
    const obj = {};

    for (const [key, value] of params.entries()) {
        obj[key] = value;
    }

    return obj;
}