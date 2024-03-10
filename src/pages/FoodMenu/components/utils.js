
export const FoodType = [
    { id: 1, label: "veg", value: "veg" },

    { id: 2, label: "non-veg", value: "non-veg" },
];

export const calculatePercentage = (costPrice, sellingPrice) => {
    return ((parseInt(sellingPrice) - parseInt(costPrice)) / parseInt(costPrice)) * 100;
};