// get two input values of temperature and wind speed
const temp = parseInt(document.querySelector('#temperature').innerHTML);
const windy = parseInt(document.querySelector('#windSpeed').innerHTML);

console.log(windy);

let windyChill = Math.round ((35.74 + (0.6215 * temp) - (35.75 * (windy^0.16) + (0.4275 * (temp * (windy^0.16))))));

// check for <= 50F and >3.0mph_
if (temp <= 50 && temp > 3.0) {
    // display the values 
    document.getElementById('windChill').innerHTML = `Wind Chill: ${windyChill}mph`;
} else {
    // display the N/A
    document.getElementById('windChill').innerHTML = `Wind Chill: N/A`;
};

