const lastVisit = Date.now();
let currentTime = Date.now();

let storageTime = localStorage.getItem("visited-last");

let timeBetween = currentTime - storageTime;

const dayFactor = 1000 * 60 * 60 * 24;
const hourFactor = 1000 * 60 * 60;
const minFactor = 1000 * 60;  
const secondFactor = 1000;

let daysBetween = Number(timeBetween / dayFactor);
let hoursBetween = Number(timeBetween / hourFactor);
let minsBetween = Number(timeBetween / minFactor);
let secondsBetween = Number(timeBetween / secondFactor);

daysBetween = daysBetween.toFixed(2);
hoursBetween = hoursBetween.toFixed(2);
minsBetween = minsBetween.toFixed(2);
secondsBetween = secondsBetween.toFixed(2);

if (daysBetween >= 1) {
    document.getElementById('days').textContent = "If you come back later I'll tell you how long it's been!";
}   
else if (hoursBetween >= 1) {
    document.getElementById('days').textContent = `It's been ${hoursBetween} hours since you last visited.`;
}
else if (minsBetween >= 1) {
    document.getElementById('days').textContent = `It's been ${minsBetween} minutes since you last visited.`;
}
else {
    document.getElementById('days').textContent = `It's been ${secondsBetween} seconds since you last visited.`;
};


localStorage.setItem("visited-last", lastVisit);