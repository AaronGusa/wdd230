
const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=Fairbanks,US&units=imperial&appid=b90c905421954814626a43f26b5d9ee9";
const currTemp = document.getElementById("current-temp");
const city = document.getElementById('city');
const icon = document.getElementById('icon-src');
const icon_img = document.getElementById('weathericon');

fetch (apiURL) 
    .then (function (response) {
        return response.json();
    })
    .then (function (jsonObject){
        //console.table(jsonObject);

        const weather = jsonObject;
        
        currTemp.innerHTML = `${parseFloat(weather.main.temp).toFixed(1)} &deg;F`;
        city.innerHTML = weather.name;
        
        let iconPath = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
        let iconDescription = weather.weather[0].description;
        let descriptionDisplay = iconDescription.toUpperCase();

        document.getElementById('icon-src').textContent = iconPath;
        document.getElementById('weathericon').setAttribute('src', iconPath);
        document.getElementById('weathericon').setAttribute('alt', iconDescription);
        document.getElementById('caption').innerHTML = descriptionDisplay;

    });
