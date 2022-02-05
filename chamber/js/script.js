let modifiedlast = document.lastModified
const fulldate = `Last Updated: ${modifiedlast}`;
// using getElementById
document.getElementById("modifydate").textContent = fulldate;

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


const datefield = document.querySelector("#today");
const now = new Date();
const today = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
datefield.innerHTML = today;

// get the day
dayOfWeek = now.getDay(); //returns day number 0-6

// if the day is Mon or Tues place banner
if (dayOfWeek === 1) {
    document.getElementsByClassName("banner")[0].classList.toggle("bannershow");
} else if (dayOfWeek === 2) {
    document.getElementsByClassName("banner")[0].classList.toggle("bannershow");
}