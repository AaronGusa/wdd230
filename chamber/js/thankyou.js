// --------------------- join.html / thankyou.html --------------------------------
let formNow = new Date();
let dateText = formNow.toLocaleDateString();
let timeText = formNow.toLocaleTimeString();

let formDate = document.getElementById("formDate");
let requestRecieved = document.getElementById("request");

requestRecieved.innerHTML = requestRecieved.innerHTML + " " + dateText + " at " + timeText;

