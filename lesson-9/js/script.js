
////////////////////////////////////////////////////////////////////////////////////////////
// Funcrtions 
function irstOrWorst(prophet) {
    if (prophet.order >= 4)  {
        return "th";
    } else if (prophet.order === 3) {
        return "rd";
    } else if (prophet.order === 2) {
        return "nd"
    } else if (prophet.order === 1) {
        return "st"
    }
}

function displayProphets(prophet) {
    //HTML Element Creation
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let h3 = document.createElement('h3');
    let pBody = document.createElement('p');
    let st2Th = irstOrWorst(prophet);
    //change the textContext property of the h2 to contain the prophet's full name
    h2.innerHTML = `${prophet.name} ${prophet.lastname}`;

    // p innerHTML 
    pBody.innerHTML = `Date of Birth: ${prophet.birthdate} <br> Place of Birth: ${prophet.birthplace}`

    // set image attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${st2Th} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width','200')

    // set figCap
    h3.innerHTML = `${prophet.order}${st2Th} Latter-day President`;


    //Add/Append the section with the h2 element
    card.appendChild(h2);
    card.appendChild(h3)
    card.appendChild(pBody);
    card.appendChild(portrait);
    

    //Add/Append existing HTML div with cards
    cards.appendChild(card);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Variables

const requestURL = "https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json";
const cards = document.querySelector('.cards');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Fetcher

fetch(requestURL)
    .then(function (response){
        return response.json();

    })
    .then(function (jsonObject) {
        //console.table(jsonObject); //temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
});

