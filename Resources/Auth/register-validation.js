const form = document.querySelector('#signup');

// Define fields from form

let last_name = document.getElementById("last_name");
let email = document.getElementById("email");
let sex = document.getElementById("sex");
let password = document.getElementById("password");
let password_confirmation = document.getElementById("password_confirmation");

// form.addEventListener('submit', function (e) {
//     // prevent the form from submitting
//     console.log("Form submitted");
//     e.preventDefault();
//     showAlert();
// });

function showAlert() {
    console.log("hello im doing something");
    event.preventDefault();
    let first_name = document.getElementById("first_name");
    //console.log(first_name.value);
    //showError(first_name, "This field is required");
    first_name.innerHTML = "This field is required";
}

function validate (form) {
    event.preventDefault();
    console.log("Validating form...");
    // Define regular expressions
    let nameRGEX = /^[a-zA-Z]+$/;
    let emailRGEX = /^ ([a-zA-Z0-9_\-\.]+) @ ([a-zA-Z0-9_\-\.]+) \. ([a-zA-Z]{2,5}) $/;

    // First name validation
    if (!nameRGEX.test(first_name.value)) {
        alert("Please enter a valid first name");
        return false;
    }

    // Last name validation
    if (!nameRGEX.test(last_name.value)) {
        alert("Please enter a valid last name");
        return false;
    }

    // Email validation
    if (!emailRGEX.test(email.value)) {
        alert("Please enter a valid email");
        return false;
    }

    window.location="../Dashboard/dashboard.html";
}

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.innerHTML = message;
};
