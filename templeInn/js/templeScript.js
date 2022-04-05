const requestURL = "https://goosa2025.github.io/wdd230/templeInn/data/json/temples.json";
const cards = document.querySelector(".templeCards");
let i = -1
function ordinanceMaker(ordinanceCont) {
    let ordinance = document.createElement('p')
    ordinance.innerHTML = 
    ordinanceCont.appendChild(ordinance)
}

function sessionMaker(sessionCont) {
    let ordinance = document.createElement('p')
    ordinanceCont.appendChild(ordinance)
}

function closedMaker(sessionCont) {
    let ordinance = document.createElement('p')
    ordinanceCont.appendChild(ordinance)
}

function cardCreator(temple, index) {
//JSON Keys - [] indicate arrays
// templeName address dedicated imageUrl location phone 
// schedClosures[] schedOrd[] schedSess[] services[]
i += 1
//Array Load
    //let temple = JSON.parse(templearray)
    let ordinances = temple.schedOrd;
    let sessions = temple.schedSess;
    let closures = temple.schedClosures;
    
    //console.log();
// HTML Creation
    let card = document.createElement('section');
    let container = document.createElement('div');
    let name = document.createElement('h2');
    let dedicated = document.createElement('h3');
    let image = document.createElement("img")
    let city = document.createElement('h3');
    let address = document.createElement('p');
    let hours = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let ordList = document.createElement('ul');
    let sessList = document.createElement('ul');
    let closeList = document.createElement('ul');
    let ordListItem = document.createElement('li');
    let sessListItem = document.createElement('li');
    let closeListItem = document.createElement('li');



    //ordinace schedule
    let ordinanceCont = document.createElement('div');
    //session schedule
    let sessionCont = document.createElement('div');
    //closures schedule
    let closedCont = document.createElement('div');
    

// INNER HTML
    name.innerHTML = `${temple.templeName}`;
    dedicated.innerHTML = `${temple.dedicated}`;
    city.innerHTML = `${temple.location}`;
    phone.innerHTML = `${temple.phone}`;
    email.innerHTML = `${temple.email}`;
    address.innerHTML = `${temple.address}`;

// 
    
    for (i in ordinances.length) {
        ordListItem = ordinances[i];
        ordList.append(ordListItem);
    };
    
    
    for (i in sessions.length) {
        sessListItem = sessions[i];
        sessList.append(sessListItem);
    };

    
    for (i in ordinances.length) {
        closeListItem = ordinances[i];
        closeList.append(closeListItem);
    };


    //let ord = document.createElement('p'); 
    //ord.innerHTML = ordinances;
    //ordinanceCont.appendChild(ord);
    
    
    

    //console.log(ordinanceCont);
    
    //sessions.forEach(function() {let sess = document.createElement('p'); sessionCont.appendChild(sess)})
    //temple.schedSess.forEach(sessionMaker)

    //temple.schedClosures.forEach(closedMaker)

// Set Attributes
    card.setAttribute("class", "templeCards");
    container.setAttribute("class","templeContainer");
    name.setAttribute("class", "templeName"); 
    dedicated.setAttribute("class", "dedication");
    image.setAttribute("class", "templeImg");
    image.setAttribute("src", `${temple.imageUrl}`); 
    image.setAttribute("alt", `Image of ${temple.name}`);
    city.setAttribute("class", "templeCity") ;
    address.setAttribute("class", "templeAddress"); 
    //hours 
    phone.setAttribute("class", "templePhone"); 
    email.setAttribute("class", "templeEmail"); 
    ordList.setAttribute('class', "ordList");
    sessList.setAttribute('class', "sessList");
    closeList.setAttribute('class', "closeList");




// APPENDING
    ordinanceCont.appendChild(ordList);
    sessionCont.appendChild(sessList);
    closedCont.appendChild(closeList);

    container.appendChild(image);
    container.appendChild(name);
    container.appendChild(dedicated);
    
    container.appendChild(city);
    container.appendChild(address);
    container.appendChild(phone);
    container.appendChild(email);
    
    container.appendChild(ordinanceCont);
    container.appendChild(sessionCont);
    container.appendChild(closedCont);
    cards.appendChild(container);


}

fetch(requestURL)
    .then(function (response){
        return response.json();        
    })
    .then(function (jsonObject) {
        console.table(jsonObject)
        const temples = jsonObject["templeArray"];
        temples.forEach(cardCreator) //function to build cards

    })