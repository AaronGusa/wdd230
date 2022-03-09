// get two input values of temperature and wind speed
const temp = document.querySelector('#temperature');
const wind = document.querySelector('#windSpeed');
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=West+Jordan,US&units=imperial&appid=e80bd8761b944b267a252593dcfb4a36";

const city = document.getElementById('city');
const icon = document.getElementById('icon-src');
const icon_img = document.getElementById('weatherIcon');
const descript = document.getElementById('description');


fetch(apiURL) 
    .then (function (response) {
        return response.json();
    })
    .then (function (jsonObject) {
        //console.table(jsonObject);

        // Variables
        let weather = jsonObject;
        let degrees = parseFloat(weather.main.temp).toFixed(1);
        let windspeed = parseFloat(weather.wind.speed).toFixed(1);
        let weatherImage = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
        let description = weather.weather[0].description;

        // InnerHTML for temp and windspeed
        temp.innerHTML = `${degrees} &deg;F`;
        wind.innerHTML = `${windspeed} mph`

        // Windchill Calculation
        let windyChill = Math.round ((35.74 + (0.6215 * degrees)) - (35.75 * (Math.pow(windspeed, 0.16))) + (0.4275 * (degrees * (Math.pow(windspeed, 0.16)))));
        windChill(degrees, windyChill);

        // Set Image and description 
        icon_img.setAttribute('src', weatherImage);
        descript.textContent = description.toUpperCase();

    });


// Wind chill function
// check for <= 50F and >3.0mph_
function windChill(temp, wind) { 
    if (temp <= 50 && wind > 3.0) {
        // display the values 
        document.getElementById('windChill').innerHTML = `Wind Chill: ${wind}&#176;F`;
    } else {
        // display the N/A
        document.getElementById('windChill').innerHTML = `Wind Chill: N/A`;
    };
}