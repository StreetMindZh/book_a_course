/*
    https://www.w3schools.com/jsref/prop_win_localstorage.asp
    https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
*/

// Funktion: Schlüssel und Wert in LocalStorage setzen.

    function setLocalStorage(key, value){
        localStorage.setItem(key, value);


}

// alert(`hello world`);

// Funktion: Wert zum Schlüssel aus LocalStorage auslesen.

function getLocalStorage(key){
    return localStorage.getItem(key);

}

// Funktion: Bestätigung generieren

function writeConfirmation(){

    // Die Personalien werden in Variablen ausgelesen.

    let firstname = getLocalStorage("fname");
    let lastname;
   // alert(`firstname = ${firstname}`);


        //  Die Beschriftungen und Platzhalter für die obigen Variablen werden in ein 
        //  String Template eingetragen. Zur Gliederung und Gestaltung werden zudem 
        //  <p> und <span> Elemente verwendet.
    
    let confirmation = `
    <p><span class="confirmation-label">Vorname:</span> ${firstname}</p>
    <p><span class="confirmation-label">Nachname:</span> ${lastname}</p>
    `;

        // Die Bestätigung wird als innerHTML gesetzt.
    document.getElementById("confirmation-message").innerHTML = confirmation;
}