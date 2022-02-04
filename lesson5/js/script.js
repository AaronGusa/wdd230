// variables
const input = document.querySelector('#favchap');
const clickerButton = document.querySelector('button');
const list = document.querySelector('#chapter_ul_list');

// button event
clickerButton.addEventListener('click', () => {
    //get the input value
    let scripture = input.value;
    
    // create the list item    
    let li = document.createElement('li');
    
    // create the delete button    
    let buttonMake = document.createElement('button');
    
    // populate the li elements textContent with the input
    li.textContent = `${scripture}`;
    
    // populate the button textContent
    buttonMake.textContent = `❌`;
    
    // append the li element with the delete button
    li.appendChild(buttonMake);
    
    // append the list element with the li element and appened 
    // with the text and button
    list.appendChild(li);
    
    // event listener to delete button that removes the list item
    buttonMake.addEventListener("click", () => {
        list.removeChild(li);
    })
    
    // input reset
    input.focus();
    input.value = "";
    
})