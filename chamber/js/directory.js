const requestURL = "https://goosa2025.github.io/wdd230/chamber/data/data.json";
const cards = document.querySelector(".cards");

function displayBusiness(business) {
    //HTML Element Creation
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let h3 = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let site = document.createElement('a');
    let est = document.createElement('p');
    let ceo = document.createElement('h3');


    // innerHTML 

    h2.innerHTML = `${business.name}`;
    address.innerHTML = `${business.address} West Jordan UT ${business.postal}`;
    phone.innerHTML = `${business.phone}`;
    site.innerHTML = `${business.website}`;
    ceo.innerHTML = `CEO - ${business.ceo}`
    est.innerHTML = `Est. ${business.established}`;
    h3.innerHTML = `${business.slogan}`;

    // set attributes
    card.setAttribute('class', 'directs');

    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt', `Business card for ${business.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width','380');
    
    site.setAttribute("href","#");

    //Add/Append the section with the h2 element
    card.appendChild(h2);    
    card.appendChild(logo);
    card.appendChild(ceo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(site);
    card.appendChild(est);
    card.appendChild(h3);
    

    //Add/Append existing HTML div with cards
    cards.appendChild(card);
};

fetch(requestURL)
    .then(function (response){
        return response.json();

    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary checking for valid response and data parsing
        const businesses = jsonObject['businesses'];
        businesses.forEach(displayBusiness);
});

function dirButtonToggle() {
    document.getElementById('directButton').classList.toggle('active');
    document.getElementById('directContainer').classList.toggle('active');
  }