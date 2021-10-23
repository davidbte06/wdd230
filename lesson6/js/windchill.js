let temp = document.querySelector(".temperature").textContent;
let windspeed = document.querySelector(".windspeed").textContent;
let windchill_value = 'N/A';

if ((temp <= 50) && (windspeed > 3)) {
    windchill_value = Math.round(35.74 + (0.6215 * temp ) - (35.75 * Math.pow(windspeed, 0.16)) + ((0.4275 * temp) * Math.pow(windspeed, 0.16)));
} 

document.querySelector(".windchill").textContent = windchill_value;
