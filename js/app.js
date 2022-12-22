 /* 
                Preparations: 
                    !) "New file my-first-form-validation.html (without Bootstrap)
                    a) <form> with two input fields of type 'text'.
                    b) An input field of type 'number'
                    c) <button> with the label "Validate" outside <form>
                    d) <p> for an error message below the button

                Validations with JavaScript (including error message): 
                    1) the first input field must not be empty
                    2) both input fields must not be empty
                    3) the second input field must contain an '@'
                    4) the value n in the number field satisfies 0 <= n <= 10

                https://www.w3schools.com/html/html_form_input_types.asp

                document.getElementById('blah');
                document.querySelectorAll('input[type="text"]');
                forEach(myFunction);
            */
                function validateForm(){
                    if (!validateFirstName()) return false;
                    if (!validateLastName()) return false;
                    if (!validateAge()) return false;
                    if (!validateStAdress()) return false;
                    if (!validateGender()) return false;   
                    
                    return true;
                }


                function validateFirstName() {
                    let inputElement = document.getElementById("fname");
                    let value = inputElement.value;
    
                    if (!value) { 
                        // Bsp. '', null, undefined
                        setMessage1('Please enter the first name.');
                        return false;
                    }
                    // From here on, value contains a non-empty string.
                    // indexOf() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf?retiredLocale=de
                    else if (value.indexOf('@') === -1) { 
                        // value does NOT contain the '@' symbol.
                        setMessage1('Please insert an '@' in the first name.');
                        return false;
                    }
                    else {
                        setLocalStorage("fname", value);
                        setMessage1(value); 
                        return true;
                    }
                }
    
                function validateLastName() {
                    let inputElement = document.getElementById("lname");
                    let value = inputElement.value;
    
                    if (!value) { 
                        // Example '', null, undefined
                        setMessage2('Please enter the last name.');
                        return false;
                    }
                    else {
                        setLocalStorage("lname", value);
                        setMessage2(value); 
                        return true;
                    }
                }
    
                function validateAge() {
                    let inputElement = document.getElementById("age");
                    let value = inputElement.value;
    
                    if (!value) { 
                        // Bsp. '', null, undefined
                        setMessage3('Please enter your age.');
                        return false;
                    }
    
                    // Value changed from less than 10 to less than 18 and from greater than to greater than 65 years
                    // The idea is 2 different outputs depending on the choice
                    // less than 18 should display the message "sorry, you are still too young to enroll on your own.
                    // greater than 65 should display the message "sorry, you are past the age where you can still learn something. joke"..
                    else if (value < 18) { // NOT (0 <= n <= 10)
                        // less than 18
                        setMessage3('I'm sorry, but you are too young to enroll by yourself.');
                        return false;
                    }
                    else if (value > 65) { // NOT (0 <= n <= 10)
                        // Either the number is less than zero or greater than 65.
                        setMessage3('I am sorry, but you are no longer at an age where you can learn anything.');
                        return false;
                    
                    }
                    else {
                        setLocalStorage("age", value),
                        setMessage3(value); 
                        return true;
                
                    }
                }
    
                // Address Field Function.
                function validateStAdress() {
                    let inputElement = document.getElementById("street");
                    let value = inputElement.value;
    
                    if (!value) { 
                        // Example. '', null, undefined
                        setMessage4('Please enter the street.');
                        return false;
                    }
                    else {
                        setLocalStorage("street", value);
                        setMessage4(value); 
                        return true;
                    }
                }
    
                // Gender Field Function
                function validateGender(){
                    let value = document.getElementById("gender").value;

                    if (!value) { 
                        // Example. '', null, undefined
                        setMessage4('Please select your gender.');
                        return false;
                    }
                    else {
                        setLocalStorage("gender", value);
                        setMessage3(value); 
                        return true;
                
                    }
                }
            
               
    
                // Message 2 Function First Name Input Field Result
                function setMessage1(value) {
                    document.getElementById("message-1").innerText = value;
                }
    
                // Message 2 Function Last Name Input Field Result
                function setMessage2(value) {
                    document.getElementById("message-2").innerText = value;
                }
    
                // Message 3 Function Age Input Field Result
                function setMessage3(value) {
                    document.getElementById("message-3").innerText = value;
                }
                // Message 4 Function Street Input Field Result
                function setMessage4(value) {
                    document.getElementById("message-4").innerText = value;
                }
    
                // Message 5 Function Gender Input Field Result
                function setMessage4(value) {
                    document.getElementById("message-5").innerText = value;
                }
            
            /*
            // Video Bg

            // Get the video
            var video = document.getElementById("myVideo");

            // Get the button
            var btn = document.getElementById("myBtn");

            // Pause and play the video, and change the button text
            function myFunction() {
            if (video.paused) {
                video.play();
                btn.innerHTML = "Pause";
            } else {
                video.pause();
                btn.innerHTML = "Play";
            }
            }
            */