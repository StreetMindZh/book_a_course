 /* 
                Vorbereitungen: 
                    !) Neue Datei my-first-form-validation.html (ohne Bootstrap)
                    a) <form> mit zwei input Feldern vom Typ 'text'.
                    b) Ein input Feld vom Typ 'number'
                    c) <button> mit der Beschriftung "Validieren" ausserhalb <form>
                    d) <p> für eine Fehlermeldung unterhalb dem Button

                Validierungen mit JavaScript (inkl. Fehlermeldung): 
                    1) das erste input Feld darf nicht leer sein
                    2) beide input Felder dürfen nicht leer sein
                    3) das zweite input Feld muss ein '@' enthalten
                    4) der Wert n im Nummernfeld erfüllt 0 <= n <= 10

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
                        setMessage1('Bitte den Vornamen eingeben.');
                        return false;
                    }
                    // Ab hier enthält value einen nicht leeren String.
                    // indexOf() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf?retiredLocale=de
                    else if (value.indexOf('@') === -1) { 
                        // value enthält KEIN '@' Symbol.
                        setMessage1('Bitte im Vornamen ein "@" einfügen.');
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
                        // Bsp. '', null, undefined
                        setMessage2('Bitte den Nachnamen eingeben.');
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
    
                    // Value verändert von kleiner als 10 auf kleiner als 18 und von grösser als zu grösser als 65 Jahre
                    // Idee ist 2 verschiedenen ausgaben je nach wahl
                    // kleiner als 18 soll meldung kommen "entschuldige du bist noch zu jung um dich alleine einschreiben zu können.
                    // grösser als 65 soll meldung kommen "entschuldige du bist aus dem alter raus wo du noch was lernen kannst. scherz".
                    else if (value < 18) { // NOT (0 <= n <= 10)
                        // kleiner als 18
                        setMessage3('I'm sorry, but you are too young to enroll by yourself.');
                        return false;
                    }
                    else if (value > 65) { // NOT (0 <= n <= 10)
                        // Entweder ist die Zahl kleiner Null oder grösser 65.
                        setMessage3('I'm sorry, but you are no longer at an age where you can learn anything.');
                        return false;
                    
                    }
                    else {
                        setLocalStorage("age", value),
                        setMessage3(value); 
                        return true;
                
                    }
                }
    
                // Adressen Feld Function.
                function validateStAdress() {
                    let inputElement = document.getElementById("street");
                    let value = inputElement.value;
    
                    if (!value) { 
                        // Bsp. '', null, undefined
                        setMessage4('Please enter the street.');
                        return false;
                    }
                    else {
                        setLocalStorage("street", value);
                        setMessage4(value); 
                        return true;
                    }
                }
    
                // Gender Feld Function
                function validateGender(){
                    let value = document.getElementById("gender").value;

                    if (!value) { 
                        // Bsp. '', null, undefined
                        setMessage4('Please select your gender.');
                        return false;
                    }
                    else {
                        setLocalStorage("gender", value);
                        setMessage3(value); 
                        return true;
                
                    }
                }
            
               
    
                // Message 2 Function First Name Eingabefeld Resultat
                function setMessage1(value) {
                    document.getElementById("message-1").innerText = value;
                }
    
                // Message 2 Function Last Name Eingabefeld Resultat
                function setMessage2(value) {
                    document.getElementById("message-2").innerText = value;
                }
    
                // Message 3 Function Age Eingabefeld Resultat
                function setMessage3(value) {
                    document.getElementById("message-3").innerText = value;
                }
                // Message 4 Function Street Eingabefeld Resultat
                function setMessage4(value) {
                    document.getElementById("message-4").innerText = value;
                }
    
                // Message 5 Function Gender Eingabefeld Resultat
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