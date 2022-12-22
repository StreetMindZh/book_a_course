/*
    https://www.w3schools.com/jsref/prop_win_localstorage.asp
    https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
*/

// Function: Set key and value in LocalStorage .

    function setLocalStorage(key, value){
        localStorage.setItem(key, value);


}

// alert(`hello world`);

// Function: Retrieve value for key from LocalStorage.

function getLocalStorage(key){
    return localStorage.getItem(key);

}

// Function: Generate confirmation

function writeConfirmation(){

    // PersonaThe personal details are read into variables.

    let firstname = getLocalStorage("fname");
    let lastname = getLocalStorage(lname);
    let age = getLocalStorage(age);
    let street = getLocalStorage(street);
    let street = getLocalStorage(gender);

   // alert(`firstname = ${firstname}`);


        /*  The labels and placeholders for the above variables
        are inserted into a string template. In addition,
        <p> and <span> elements are used for structure and design. */
    
    let confirmation = `
    <p><span class="confirmation-label">FirstName:</span> ${firstname}</p>
    <p><span class="confirmation-label">LastName:</span> ${lastname}</p>
    <p><span class="confirmation-label">Age:</span> ${age}</p>
    <p><span class="confirmation-label">Street:</span> ${street}</p>
    <p><span class="confirmation-label">Gender:</span> ${gender}</p>
    `;

        // The confirmation is set as innerHTML.
    document.getElementById("confirmation-message").innerHTML = confirmation;
}