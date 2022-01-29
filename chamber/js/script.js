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
