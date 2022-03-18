// Public Constants
const requestURL = "https://goosa2025.github.io/wdd230/chamber/data/data.json";
const spotlights = document.querySelector(".SQspot");
const spot1Min = 1;
const spot1Max = 5;
const spot2Max = 10;
const spot3Max = 14;


// Json processing function
function displaySpot(business, spotNumber) {
        
    //HTML Creation
    let spot = document.createElement('div');
    let title = document.createElement('h2');
    let image = document.createElement('img');
    let section = document.createElement('section');
    let slogan = document.createElement('p');
    let phone = document.createElement('p');
    let site = document.createElement('p');
    
    // inner HTML
    title.innerHTML = `${business.name}`;
    slogan.innerHTML = `${business.slogan}`;
    phone.innerHTML = `${business.phone}`;
    site.innerHTML = `${business.website}`;

    //Attributes
    image.setAttribute('src', business.logo);
    image.setAttribute('alt', `Business logo for ${business.name}`);
    image.setAttribute('loading', 'lazy');
    
    site.setAttribute('href', "#");

    //Spot 3 process
    if (spotNumber === 3) {
        spot.setAttribute('id','spot3')
    }

    //build spot
    section.appendChild(slogan);
    section.appendChild(phone);
    section.appendChild(site);

    spot.appendChild(title);
    spot.appendChild(image);
    spot.appendChild(section);

    spotlights.appendChild(spot);
}


// Fetch business json
fetch(requestURL)
    .then(function (response){
        return response.json();

    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary checking for valid response and data parsing
        const businesses = jsonObject['businesses'];
        
        slotNumber1 = Math.floor(Math.random() * (spot1Max-spot1Min)) + spot1Min;
        slotNumber2 = Math.floor(Math.random() * (spot2Max-spot1Max)) + spot1Max;
        slotNumber3 = Math.floor(Math.random() * (spot3Max-spot2Max)) + spot2Max;

        displaySpot(businesses[slotNumber1], 1);
        displaySpot(businesses[slotNumber2], 2);
        displaySpot(businesses[slotNumber3], 3);


        
        //businesses.forEach(displayBusiness);
});
