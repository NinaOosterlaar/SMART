// Special characters array used to check for special characters
let special_characters =  ['[', '`', '!', '@',  '#', '$', '%', '^', '&', '*', '(',  ')',
                                        '_', '+','-', '=', '[', ']',  '{', '}', ';',"'", ':', '"',
                                         '|', ',', '.', '<', '>', '/', '?',  '~', ']', '/'];

        // Main function that retrieves the values from the form and checks if they are valid                                 
        function submitForm() {
            var count = 0; // count is to keep track of all the validations that are true

            // Retrieve username and check if it is valid
            var username = document.getElementById('username');
            var username_validation = document.getElementById('username_validation');
            var uv = validateUsername(username.value);
            if(uv[0]) count++;
            reaction_required(username, username_validation, uv);

            // Retrieve password and check if it is valid
            var password1 = document.getElementById('password');
            var password1_validation = document.getElementById('password_validation1');
            var pw = validatePassword(password1.value);
            if(pw[0]) count++;
            reaction_required(password1, password1_validation, pw);

            // Retrieve password confirmation and check if it is valid
            var password2 = document.getElementById('password_confirm');
            var password2_validation = document.getElementById('password_validation2');
            var pw2 = confirmPassword(password1.value, password2.value);
            if(pw2[0]) count++;
            if(password1.value != "") reaction_required(password2, password2_validation, pw2);
            else reaction_optional(password2, password2_validation);

            // Retrieve first name and check if it is valid
            var first_name = document.getElementById('first_name');
            var first_name_validation = document.getElementById('first_name_validation');
            var first_name_array = validateName(first_name.value);
            if(first_name_array[0]) count++;
            reaction_required(first_name, first_name_validation, first_name_array);

            // Retrieve last name and check if it is valid
            var last_name = document.getElementById('last_name');
            var last_name_validation = document.getElementById('last_name_validation');
            var last_name_array = validateName(last_name.value);
            if(last_name_array[0]) count++;
            reaction_required(last_name, last_name_validation, last_name_array);

            // Retrieve address and check if it is valid
            address = document.getElementById('address');
            address_validation = document.getElementById('address_validation');
            address_array = validateAddress(address.value);
            if(address_array[0]) count++;
            if(address.value == "") reaction_optional(address, address_validation);
            else reaction_required(address, address_validation, address_array);

            // Retrieve country and check if it is valid
            country = document.getElementById('country');
            country_validation = document.getElementById('country_validation');
            country_array = validateCountry(country.value);
            if(country_array[0]) count++;
            reaction_required(country, country_validation, country_array);

            // Retrieve zipcode and check if it is valid
            zipcode = document.getElementById('zipcode');
            zipcode_validation = document.getElementById('zipcode_validation');
            zipcode_array = validateZipCode(zipcode.value);
            if(zipcode_array[0]) count++;
            if(zipcode.value == "") reaction_optional(zipcode, zipcode_validation);
            else reaction_required(zipcode, zipcode_validation, zipcode_array);

            // Retrieve sex and check if it is valid
            sex = document.getElementById("sex");
            sex_validation = document.getElementById('sex_validation');
            sex_array = validateSex(sex.value);
            if(sex_array[0]) count++;
            reaction_required(sex, sex_validation, sex_array);

            // Retrieve language and check if it is valid
            language = document.getElementById("language");
            language_validation = document.getElementById('language_validation');
            language_array = validateLanguage(language.value);
            if(language_array[0]) count++;
            reaction_required(language, language_validation, language_array);

            // Retrieve bio and check if it is valid
            bio = document.getElementById('bio');
            bio_validation = document.getElementById('bio_validation');
            bio_array = validateBio(bio.value);
            if(bio_array[0]) count++;
            if(bio.value == "") reaction_optional(bio, bio_validation);
            else reaction_required(bio, bio_validation, bio_array);

            // Retrieve email and check if it is valid
            email = document.getElementById('email');
            email_validation = document.getElementById('email_validation');
            email_array = validateEmail(email.value);
            if(email_array[0]) count++;
            reaction_required(email, email_validation, email_array);

            // Check if all the validations are true and redirect to everythingValid function
            if(count == 12){
                setTimeout(function() {
                    everythingValid();
               }, 700);
            }
        }

        // Function that is called when all the validations are true to display 
        // the information in an alert and redirect to the dashboard
        function everythingValid() {
            var message = "";
            message += "User ID: " + username.value + "\n";
            message += "Name: " + first_name.value + " " + last_name.value + "\n";
            message += "Sex: " + sex.value + "\n";
            if(address.value != "") message += "Address: " + address.value + "\n";
            if(zipcode.value != "") message += "Zipcode: " + zipcode.value + "\n";
            message += "Country: " + country.options[country.selectedIndex].text + "\n";
            message += "Language: " + language.options[language.selectedIndex].text + "\n";
            if(bio.value != "") message += "Bio: " + bio.value + "\n";
            alert(message);

            window.location.href="../Dashboard/dashboard.html";
            
            
        }

        // Function that is called when a required field has been checked to display the corresponding message
        function reaction_required(element, validation, array) {
            // If the array[0] is true, the field is valid
            if(array[0]) {
                element.classList.remove('form-error');
                element.classList.add('form-success');
                validation.classList.remove('text-danger');
                validation.classList.add('text-success');
                validation.innerHTML = "Looks good!";
            // If the array[0] is false, the field is not valid and the corresponding error message is displayed
            } else {
                element.classList.remove('form-success');
                element.classList.add('form-error');
                validation.classList.remove('text-success');
                validation.classList.add('text-danger');
                validation.innerHTML = array[1];
            }
        }    

        // Function that is called when an optional field is empty to get rid of all the messages
        function reaction_optional(element, validation) {
            element.classList.remove('form-error');
            validation.classList.remove('text-danger');
        }

        // Function that checks if provided username is valid
        function validateUsername(username) {
            var error;
            var flag = false;
            var n = username.length;

            // Check if the username is valid
            if (username == "") error = "User name is required";
            else if (username[0] != username[0].toUpperCase()) error = "Username must start with a capital letter";
            else if (username.length < 5) error = "Username must be at least 5 characters";
            else if (username.length > 12) error = "Username must be less than 12 characters";
            else if (!special_characters.includes(username[n-1]) && isNaN(username[n-1])) error = "Username must end with a special character or a number";
            else flag = true;
            
            return [flag, error];
        }

        // Function that checks if provided password is valid
        function validatePassword(password1) {
            var error;
            var flag = false;
            var n = password1.length;

            // Variables to keep track of the password requirements
            special_included = false;
            uppercase = false;
            lowercase = false;
            number_included = false;

            // Check if the password includes the required characters
            for(var i = 0; i < n; i++) {
                if (special_characters.includes(password1[i])) special_included = true;
                if(password1[i].toLowerCase() != password1[i].toUpperCase()){
                    if(password1[i] == password1[i].toUpperCase()) uppercase = true;
                    if(password1[i] == password1[i].toLowerCase()) lowercase = true;
                }
                if (!isNaN(password1[i])) number_included = true;
            }

            // Check if the password is valid
            if (password1 == "") error = "Password is required";
            else if (password1.length < 12) error = "Password must be at least 12 characters";
            else if (!lowercase) error = "Password must include a lowercase letter";
            else if (!uppercase) error = "Password must include an uppercase letter";
            else if (!number_included) error = "Password must include a number";
            else if (!special_included) error = "Password must include a symbol";
            else flag = true;

            // Check if the password is strong
            if(flag == true && password1.length < 14) error = "The password would be stronger with at least 14 characters";
            else if(flag == true) error = "Looks good!";

            return [flag, error];
        }

        // Function that checks if the two passwords match
        function confirmPassword(password1, password2) {
            var error;

            // Check if the passwords match
            if(password1 == password2) return [true, error];
            else error = "Passwords do not match";
            return [false, error];
        }

        // Function that checks if provided name is valid
        function validateName(name) {
            var error;
            var flag = false;
            var n = name.length;

            // Check if a name is provided
            if (name == "") error = "Name is required";
            else flag = true;

            // Check if the name includes numbers or special characters
            for(var i = 0; i < n; i++) {
                if(name[i].toLowerCase() == name[i].toUpperCase()){
                    error = "Name must not include numbers or special characters";
                    flag = false;
                    true;
                } 
            }     
            return [flag, error];
        }

        // Function that checks if provided address is valid
        function validateAddress(address) {
            var error;
            var flag = true;
            var n = address.length;

            // Check if an address is provided, if not return true
            if(address == "") return [flag, error];

            // Check if the address includes special characters except a .
            for(var i = 0; i < n; i++){
                if(special_characters.includes(address[i]) && address[i] != ".") {
                    error = "Address must not include special characters except for periods";
                    flag = false;
                }
            }

            return [flag, error];
        }

        // Function that checks if the chosen country is valid
        function validateCountry(country) {
            var error;
            var flag = true;
            var n = country.length;

            // Check if a country is chosen, all country values are 2 characters long
            if (country.length != 2){
                error = "Choose a country";
                flag = false;
            } 

            // Check if the country includes numbers or special characters
            for(var i = 0; i < n; i++){
                if(country[i].toLowerCase() == country[i].toUpperCase()
                    || country[i] != country[i].toUpperCase()) {
                    error = "Choose a country";
                    flag = false;
                    break
                }
            }

            return [flag, error];
        }

        // Function that checks if provided zipcode is valid
        function validateZipCode(zipcode) {
            var error;
            var flag = true;
            var n = zipcode.length;
            console.log(zipcode);
            console.log(n);

            // Check if a zipcode is provided, if not return true
            if(zipcode == "") return [flag, error];

            // All zipcode have a length of 6
            if (n != 6) {
                error = "Zip code must be in the following format: 1234AB";
                flag = false;
            } 

            // Check if the first 4 characters are numbers
            for(var i = 0; i < 4; i++){
                console.log(zipcode[i])
                if(isNaN(zipcode[i])) {
                    error = "Zip code must be in the following format: 1234AB";
                    flag = false;
                    break
                }
            }

            // Check if the last 2 characters are letters
            for(var i = 4; i < n; i++){
                if(zipcode[i].toLowerCase() == zipcode[i].toUpperCase()) {
                    error = "Zip code must be in the following format: 1234AB";
                    flag = false;
                    break
                }
            }
            return [flag, error];
        }

        // Function that checks if chosen sex is valid
        function validateSex(sex){
            var error;
            var flag = true;

            // Check if one of the options is chosen
            if(sex != "Male" && sex != "Female" && sex != "Other"){
                flag = false;
                error = "Choose a valid option";
            }
            return [flag, error];
        }

        // Function that checks if the chosen language is valid
        function validateLanguage(language){
            var error;
            var flag = true;
            var n = language.length;

            // Check if a language is chosen, all the language abbreviaations are between 2 and 5 characters
            if(n < 2 || n > 5) {
                flag = false;
                error = "Choose a language";
            }

            // Check if no special characters except a - are included
            for(var i = 0; i < n; i++){
                if(special_characters.includes[language[i]] && language[i] != "-"){
                    flag = false;
                    error = "Choose a language";
                }
            }
            return [flag, error];
        }

        // Function that checks if the provided bio is valid
        function validateBio(bio){
            var error;
            var flag = false;
            var n = bio.length;

            // If bio is empty, return true
            if(bio = "") return [true, error];

            // Check if the bio is not too long
            if(n > 255) error = "Your bio cannot be longer than 300 characters";
            else flag = true;
            return [flag, error]; 
        }

        // Function that checks if the provided email is valid
        function validateEmail(email){
            var error; 
            var flag = true;
            var n = email.length;

            // First check basic email requirements
            if(email == "") {
                error = "Email is required";
                flag = false;
            } 
            else if(n < 5) {
                error = "Type a valid email";
                flag = false;
            } 
            else if(!email.includes("@")) {
                error = "Email must include an @ symbol";
                flag = false;
            }
            else if(!email.includes(".")) {
                error = "Email must include a period";
                flag = false;
            } 
            else if(special_characters.includes(email[0])){
                error =  "Email must not start with a special character";
                flag = false;
            }
            else if(email.indexOf("@") < 6 || email.indexOf("@") > 30) {
                error = "The first part of the email must be between 6 and 30 characters long";
                flag = false;
            }

            // Check more complex email requirements by looping over all the characters and comparing them
            var check = false; // Check is to keep track of the number of @ symbols
            for(var i = 0; i < n; i++){
                if(email[i] == "@" && !check) check = true;
                else if(email[i] == "@" && check) {
                    error = "Email must include only one @ symbol";
                    flag = false;
                    break;
                }
                if(special_characters.includes(email[i]) && email[i] != "@" && email[i] != "."
                    && email[i] != "-" && email[i] != "_"){
                    error = "Email must not include special characters except for @, ., -, and _";
                    flag = false;
                    break;
                }
                if(email[i] == " "){
                    error = "Email must not include spaces";
                    flag = false;
                    break;
                }
                if(email[i] == "." || email[i] == "-" || email[i] == "_"){
                    if(email[i+1] == "." || email[i+1] == "_" || email[i+1] == "-" || email[i+1] == "@"){
                        error = "An underscore period or dash must be followed by one letter or number";
                        flag = false;
                        break;
                    }
                }
            }

            return [flag, error];
        }