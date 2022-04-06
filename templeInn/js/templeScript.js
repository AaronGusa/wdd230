const requestURL = "https://api.jsonstorage.net/v1/json/87a13e64-aadc-4b08-8adb-118b447a73fd/9a8c6fea-a4a9-4c38-ae0d-5f5626f511a0";
const cards = document.querySelector(".templeCards");



function cardCreator(temple) {
//JSON Keys - [] indicate arrays
// templeName address dedicated imageUrl location phone 
// schedClosures[] schedOrd[] schedSess[] services[]


//Array Load
    //let temple = JSON.parse(templearray)
    let ordinances = temple.schedOrd;
    let sessions = temple.schedSess;
    let closures = temple.schedClosures;
    let milestones = temple.milestones;
    
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
    
    //ordinace schedule
    let ordinanceCont = document.createElement('div');
    let ordList = document.createElement('ul');
    //session schedule
    let sessionCont = document.createElement('div');
    let sessList = document.createElement('ul');
    //closures schedule
    let closedCont = document.createElement('div');
    let closeList = document.createElement('ul');
    //milestone list
    let milesCont = document.createElement('div');
    let milesList = document.createElement('ul');
    
// INNER HTML
    name.innerHTML = `${temple.templeName}`;
    dedicated.innerHTML = `${temple.dedicated}`;
    city.innerHTML = `${temple.location}`;
    phone.innerHTML = `${temple.phone}`;
    email.innerHTML = `${temple.email}@churchofjesuschrist.com`;
    address.innerHTML = `${temple.address}`;
    ordList.innerHTML = `Ordinace Schedule`;
    closeList.innerHTML = `Upcoming Closures`;
    sessList.innerHTML = `Session Schedule`;
    milesList.innerHTML = `Milestones`;

// JSON Array Handling
    
    for (let o = 0; o < ordinances.length; o++) {
        let ordListItem = document.createElement('li')
        ordListItem.innerHTML = ordinances[o];
        ordList.appendChild(ordListItem);
    };
    
    for (let s = 0; s < sessions.length; s++) {
        let sessListItem = document.createElement('li');
        sessListItem.innerHTML = sessions[s];
        sessList.appendChild(sessListItem);
        s++;
    };

    for (let c = 0; c < closures.length; c++) {
        let closeListItem = document.createElement('li');
        closeListItem.innerHTML = closures[c];
        closeList.appendChild(closeListItem);
    };

    for (let m = 0; m < milestones.length; m++) {
        let milesListItem = document.createElement('li');
        milesListItem.innerHTML = milestones[m];
        milesList.appendChild(milesListItem);
    }


// Set Attributes
    card.setAttribute("class", "templeCards");
    container.setAttribute("class","templeContainer");
    name.setAttribute("class", "templeName"); 
    dedicated.setAttribute("class", "dedication");
    
    image.setAttribute("class", "templeImg");
    image.setAttribute("src", `${temple.imageUrl}`); 
    image.setAttribute("alt", `Image of ${temple.name}`);
    image.setAttribute("loading", "lazy");
    
    city.setAttribute("class", "templeCity");
    address.setAttribute("class", "templeAddress"); 
    phone.setAttribute("class", "templePhone"); 
    email.setAttribute("class", "templeEmail"); 
    ordList.setAttribute("class", "ordList");
    sessList.setAttribute("class", "sessList");
    closeList.setAttribute("class", "closeList");
    
    ordinanceCont.setAttribute("class", "ordCont");
    sessionCont.setAttribute("class", "sessCont");
    closedCont.setAttribute("class", "closeCont");




// APPENDING
    ordinanceCont.appendChild(ordList);
    sessionCont.appendChild(sessList);
    closedCont.appendChild(closeList);
    milesCont.appendChild(milesList);

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
    container.appendChild(milesCont);

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