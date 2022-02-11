// get two input values of temperature and wind speed
const temp = parseInt(document.querySelector('#temperature').innerHTML);
const windy = parseInt(document.querySelector('#windSpeed').innerHTML);

let windyChill = Math.round ((35.74 + (0.6215 * temp)) - (35.75 * (Math.pow(windy, 0.16))) + (0.4275 * (temp * (Math.pow(windy, 0.16)))));

// check for <= 50F and >3.0mph_
if (temp <= 50 && windy > 3.0) {
    // display the values 
    document.getElementById('windChill').innerHTML = `Wind Chill: ${windyChill}&#176;F`;
} else {
    // display the N/A
    document.getElementById('windChill').innerHTML = `Wind Chill: N/A`;
};

