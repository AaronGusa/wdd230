const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];

const d = new Date();
const monthName = months[d.getMonth()];
const year = d.getFullYear();

const fulldate = `Last Updated: ${monthName} ${d.getDate()},  ${year}`;
// using getElementById
document.getElementById("currentdate").textContent = fulldate;


try {
  const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
} catch (e) {
  alert('Error with code or your browser does not support Locale');
}
 