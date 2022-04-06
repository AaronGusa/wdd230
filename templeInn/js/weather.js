///////////////////////////////////////////////////////////////////////////// Variables
const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=West+Jordan,US&units=imperial&appid=80e9f6a193a72fce77857f6efd7b97a5";
const weatherCard = document.querySelector(".weatherCard");

const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?q=West+Jordan,US&units=imperial&appid=7b680b85256ca294699f0d184de7698f";
const forecastCard = document.querySelector(".forecast");

const alertAPI = "https://api.weather.gov/alerts/active?area=UT"//https://api.openweathermap.org/data/2.5/onecall?lat=40.6097&lon=-111.9391&exclude=current,hourly,daily,minutely&appid=b90c905421954814626a43f26b5d9ee9";
const alertBanner = document.querySelector("#weatherAlertBanner");

//////////////////////////////////////////////////////////////////////////// Weather API
function weatherBuild(weather) {
    
    // Parsing
    let currentTemp = weather.main.temp;
    let condition = weather.weather[0].description;
    let humidity = weather.main.humidity;
    let icon = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    
    //console.log(`The current temperature is ${humidity}`);
    
    // HTML Creation
    wContainer = document.createElement("div");
    createTitle = document.createElement("h2");
    createCurrent = document.createElement("h3");
    createCondition = document.createElement("p");
    createHumidity = document.createElement("p");
    createImage = document.createElement("img");

    // Content
    createTitle.innerHTML = "Weather";
    createCurrent.innerHTML = `Current Temp: ${currentTemp}&deg;F`;
    createCondition.innerHTML = `Condition: ${condition}`;
    createHumidity.innerHTML = `Humidity: ${humidity}%`;

    // Attributary
    wContainer.setAttribute('class', "weatherContainer");
    createTitle.setAttribute("class", "weatherTitle");
    createCurrent.setAttribute("class", "weatherTemp");
    createCondition.setAttribute("class", "weatherCondition");
    createHumidity.setAttribute("class", "weatherHumidity");
    
    createImage.setAttribute("class", "weatherIcon");
    createImage.setAttribute("src", icon);
    createImage.setAttribute("alt", `Image of ${condition}`);
    createImage.setAttribute("loading", "lazy");
    

    // Appending
    wContainer.appendChild(createTitle);
    wContainer.appendChild(createCurrent);
    wContainer.appendChild(createImage);
    wContainer.appendChild(createCondition);
    wContainer.appendChild(createHumidity);

    weatherCard.appendChild(wContainer)


}

fetch(weatherAPI)
    .then (function (response){
        return response.json();
    })
    .then (function (jsonObject) {
        console.log("working")
        console.table(jsonObject);
        const weather = jsonObject;
        weatherBuild(weather);
    })

/////////////////////////////////////////////////////////////////////////// Forecast API
function forecastBuild(forecast) {
    // Parsing
    let day1 = forecast.list[0];
    let day2 = forecast.list[1];
    let day3 = forecast.list[2];

    ///////// forecast setup
    fMainContainer = document.createElement("div");
    fMainTitle = document.createElement("h2");
    
    fMainTitle.innerHTML = "3-Day Forecast";
    fMainContainer.appendChild(fMainTitle);



    ////////  DAY1  //////////////////////
    //////// variable
    let temp1 = day1.main.temp;
    let humidity1 = day1.main.humidity;
    let condition1 = day1.weather[0].description;
    let icon1 = `https://openweathermap.org/img/w/${day1.weather[0].icon}.png`

    //////// HTML Creation
    fContainer1 = document.createElement("div");
    fTitle1 = document.createElement("h3");
    fCurrent1 = document.createElement("h3");
    fCondition1 = document.createElement("p");
    fHumidity1 = document.createElement("p");
    fImage1 = document.createElement("img");
    
    //////// Content

    fTitle1.innerHTML = "Tommorow";
    fCurrent1.innerHTML = `${temp1}`;
    fCondition1.innerHTML = `Condition: ${condition1}`;
    fHumidity1.innerHTML = `Humidity: ${humidity1}%`;

    //////// Attributary

    fContainer1.setAttribute("class", "forecastCont");
    fTitle1.setAttribute("class", "forecastTitle");
    fCurrent1.setAttribute("class", "forecastTemp");
    fCondition1.setAttribute("class", "forecastCondition");
    fHumidity1.setAttribute("class", "forecastHumidity");

    fImage1.setAttribute("src", icon1);
    fImage1.setAttribute("alt", `Image of ${condition1}`);
    fImage1.setAttribute("load", "lazy");
    
    //////// Appending
    
    fContainer1.appendChild(fTitle1);
    fContainer1.appendChild(fCurrent1);
    fContainer1.appendChild(fHumidity1);
    fContainer1.appendChild(fImage1);
    fContainer1.appendChild(fCondition1);

    fMainContainer.appendChild(fContainer1);

    ////////  DAY2  //////////////////////
    //////// variable
    let temp2 = day2.main.temp;
    let humidity2 = day2.main.humidity;
    let condition2 = day2.weather[0].description;
    let icon2 = `https://openweathermap.org/img/w/${day2.weather[0].icon}.png`

    //////// HTML Creation
    fContainer2 = document.createElement("div");
    fTitle2 = document.createElement("h3");
    fCurrent2 = document.createElement("h3");
    fCondition2 = document.createElement("p");
    fHumidity2 = document.createElement("p");
    fImage2 = document.createElement("img");
    
    //////// Content

    fTitle2.innerHTML = "Day 2";
    fCurrent2.innerHTML = `${temp2}`;
    fCondition2.innerHTML = `Condition: ${condition2}`;
    fHumidity2.innerHTML = `Humidity: ${humidity2}%`;

    //////// Attributary

    fContainer2.setAttribute("class", "forecastCont");
    fTitle2.setAttribute("class", "forecastTitle");
    fCurrent2.setAttribute("class", "forecastTemp");
    fCondition2.setAttribute("class", "forecastCondition");
    fHumidity2.setAttribute("class", "forecastHumidity");

    fImage2.setAttribute("src", icon2);
    fImage2.setAttribute("alt", `Image of ${condition2}`);
    fImage2.setAttribute("load", "lazy");
    
    //////// Appending
    
    fContainer2.appendChild(fTitle2);
    fContainer2.appendChild(fCurrent2);
    fContainer2.appendChild(fHumidity2);
    fContainer2.appendChild(fImage2);
    fContainer2.appendChild(fCondition2);

    fMainContainer.appendChild(fContainer2);

    ////////  DAY3  //////////////////////
    //////// variable
    let temp3 = day3.main.temp;
    let humidity3 = day3.main.humidity;
    let condition3 = day3.weather[0].description;
    let icon3 = `https://openweathermap.org/img/w/${day3.weather[0].icon}.png`

    //////// HTML Creation
    fContainer3 = document.createElement("div");
    fTitle3 = document.createElement("h3");
    fCurrent3 = document.createElement("h3");
    fCondition3 = document.createElement("p");
    fHumidity3 = document.createElement("p");
    fImage3 = document.createElement("img");
    
    //////// Content

    fTitle3.innerHTML = "Day 3";
    fCurrent3.innerHTML = `${temp3}`;
    fCondition3.innerHTML = `Condition: ${condition3}`;
    fHumidity3.innerHTML = `Humidity: ${humidity3}%`;

    //////// Attributary

    fContainer3.setAttribute("class", "forecastCont");
    fTitle3.setAttribute("class", "forecastTitle");
    fCurrent3.setAttribute("class", "forecastTemp");
    fCondition3.setAttribute("class", "forecastCondition");
    fHumidity3.setAttribute("class", "forecastHumidity");

    fImage3.setAttribute("src", icon3);
    fImage3.setAttribute("alt", `Image of ${condition3}`);
    fImage3.setAttribute("load", "lazy");
    
    //////// Appending
    
    fContainer3.appendChild(fTitle3);
    fContainer3.appendChild(fCurrent3);
    fContainer3.appendChild(fHumidity3);
    fContainer3.appendChild(fImage3);
    fContainer3.appendChild(fCondition3);

    fMainContainer.appendChild(fContainer3);


    // Final Appending
    forecastCard.appendChild(fMainContainer);
}

fetch(forecastAPI)
    .then (function (response){
        return response.json();
    })
    .then (function (jsonObject) {
        console.log("workingtwo")
        console.table(jsonObject);
        const forecast = jsonObject;
        forecastBuild(forecast);
    })

/////////////////////////////////////////////////////////////////////////// Weather Alerts

function alertBuild(alerts) {
    // Parsing
    let eventTitle = alerts.features[0].properties.event;
    let alert = alerts.features[0].properties.description;
    let area = alerts.features[0].properties.areaDesc;
    let severity = alerts.features[0].properties.severity;
    let headline = alerts.features[0].properties.headline;

    // HTML creation
    alertTitle = document.createElement("h3");
    alertp = document.createElement("p");
    alertButt = document.createElement("button");

    // Inner HTML
    alertTitle.innerHTML = `${headline}.`;
    alertp.innerHTML = `${alert}`;
    alertButt.innerHTML = "❎";

    // Attribution
    alertTitle.setAttribute('class', "bannerH");
    alertp.setAttribute("class", "bannerP active");
    alertButt.setAttribute("id", "closeBanner")

    // Appending
    alertBanner.appendChild(alertTitle);
    alertBanner.appendChild(alertp);
    alertBanner.appendChild(alertButt);

}

fetch(alertAPI)
    .then (function (response){
        return response.json();
    })
    .then (function (jsonObject){
        console.log("workingthree");
        console.table(jsonObject);
        const alerts = jsonObject;
        alertBuild(alerts);

    })

/////////////////////////////////////////////////////////////////////////// Banner Close    


function bannerClose() {
    document.querySelector("#weatherAlertBanner").setAttribute("class", "hidden");
};
