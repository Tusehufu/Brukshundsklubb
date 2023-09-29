const namn = "Bella";
const lösenord = "qwe123";

// Loginstatus när sidan laddas
window.onload = function() {
    const storedLoginStatus = localStorage.getItem("loginStatus");
    if (storedLoginStatus === "inloggad") {
        displayLoggedIn();
    }
};

function inloggning() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === namn && password === lösenord) {
        // Spara login status i localStorage
        localStorage.setItem("loginStatus", "inloggad");
        displayLoggedIn();
    } else {
        document.getElementById("meddelande").innerHTML = "Fel användarnamn eller lösenord. Var vänlig försök igen.";
        document.getElementById("logIn").style.display = "none";
        const tillbakaKnapp = document.createElement("button");
        tillbakaKnapp.innerHTML = "Tillbaka";
        tillbakaKnapp.classList.add("knapp");
        tillbakaKnapp.addEventListener("click", tillbakaTillLogin);
        document.getElementById("box").appendChild(tillbakaKnapp);
    }
}

// Function som visar inloggad
function displayLoggedIn() {
    document.getElementById("meddelande").innerHTML = "Välkommen, du är nu inloggad";
    document.getElementById("logIn").style.display = "none";
    const loggaUtKnapp = document.createElement("button");
    loggaUtKnapp.innerHTML = "Logga ut";
    loggaUtKnapp.classList.add("knapp");
    loggaUtKnapp.addEventListener("click", utloggning);
    document.getElementById("box").appendChild(loggaUtKnapp);
}



function utloggning() {
    // Tar bort login status från localStorage
    localStorage.removeItem("loginStatus");
    document.getElementById("meddelande").innerHTML = "Du loggas ut";

    setTimeout(tillbakaTillLogin, 1000); 
}
function tillbakaTillLogin(){
        document.getElementById("meddelande").innerHTML = "";
        document.getElementById("logIn").style.display = "block";
        window.location.reload(); 
    }