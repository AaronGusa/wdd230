let modifiedlast = document.lastModified
const fulldate = `Last Updated: ${modifiedlast}`;

// using getElementById
document.getElementsByClassName("modifyDate").innerHTML = fulldate;

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
};


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
};

// --------------------- join.html / thankyou.html --------------------------------
//formDate = document.getElementById("formDate");
//requestRecieved = document.getElementById("requestRecieved");

//document.getElementById("formDate").addEventListener("click", () =>{ 
  //  formTime = now;
   // document.getElementById("formDate").setAttribute("value",formtime);
//});

//requestRecieved.innerHTML = requestRecieved.innerHTML + " " + formTime;

//document.getElementById("recReq").textContent = "Here it is";