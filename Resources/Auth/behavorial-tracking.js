//Define variables
var mouseClicks = 0;
let startDate = new Date();
let elapsedTime = 0;
let keyPresses = 0;
let charactersTyped = 0;

//Track mouse clicks
const countMouseClicks = function() {
    mouseClicks++;
    console.log(mouseClicks);
}

//Track time spent on page
const trackTime = function() {
    const endDate = new Date();
    elapsedTime = endDate.getTime() - startDate.getTime();
    console.log(elapsedTime);
    // elapsedTime contains the time spent on page in milliseconds
};

//Track key presses
const countKeyPresses = function() {
    keyPresses++;
    console.log(keyPresses);
}

//Track characters typed
const countCharactersTyped = function() {
    charactersTyped++;
    console.log(charactersTyped);
}

const displayResults = function(event) {
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const text = `Total number of mouse clicks: ${mouseClicks} <br/> 
    Total time spent on page: ${minutes} min ${remainingSeconds} sec <br/> 
    Total number of key presses: ${keyPresses} <br/>
    Total number of characters typed: ${charactersTyped}`;

    document.getElementById("behavorial-tracking").innerHTML = text;

    document.getElementById("behavorial-tracking").style.display = "inline";
    return false;
}

//Add event listeners
document.getElementById("register-body").addEventListener("click", countMouseClicks);

document.getElementById("sign-up-btn").addEventListener("click", trackTime);

document.getElementById("first_name").addEventListener("keydown", countKeyPresses);
document.getElementById("last_name").addEventListener("keydown", countKeyPresses);
document.getElementById("email").addEventListener("keydown", countKeyPresses);
document.getElementById("password1").addEventListener("keydown", countKeyPresses);
document.getElementById("password2").addEventListener("keydown", countKeyPresses);
document.getElementById("address_line").addEventListener("keydown", countKeyPresses);
document.getElementById("zip_code").addEventListener("keydown", countKeyPresses);
document.getElementById("bio").addEventListener("keydown", countKeyPresses);
document.getElementById("Username").addEventListener("keydown", countKeyPresses);

document.getElementById("first_name").addEventListener("keypress", countCharactersTyped);
document.getElementById("last_name").addEventListener("keypress", countCharactersTyped);
document.getElementById("email").addEventListener("keypress", countCharactersTyped);
document.getElementById("password1").addEventListener("keypress", countCharactersTyped);
document.getElementById("password2").addEventListener("keypress", countCharactersTyped);
document.getElementById("address_line").addEventListener("keypress", countCharactersTyped);
document.getElementById("zip_code").addEventListener("keypress", countCharactersTyped);
document.getElementById("bio").addEventListener("keypress", countCharactersTyped);
document.getElementById("Username").addEventListener("keypress", countCharactersTyped);




