// function to convert meter to km and append 'km' to the value
export const convertMeterToKm = (value) => {    
    return (parseFloat(value) / 1000).toFixed(2) + " km";
}