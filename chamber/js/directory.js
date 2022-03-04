const requestURL = "https://goosa2025.github.io/wdd230/chamber/data/data.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function (response){
        return response.json();

    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary checking for valid response and data parsing
        const businesses = jsonObject['businesses'];
        businesses.forEach(displayProphets);
});