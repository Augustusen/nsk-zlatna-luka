// Funkcija za provjeru ispravnosti adrese
function validateAddress() {

    // Dobivanje vrijednosti unesene u polje adrese
    var address = document.getElementById("address").value.trim();
    
    // Regularni izraz koji dopušta slova, brojeve, razmake i neke posebne znakove
    var allowedChars = /^[a-zA-Z0-9\s,.'ŠšŽžĆćČčĐđ]*$/;

    // Provjera je li adresa prazna, ne sadrži dozvoljene znakove ili je prekratka
    if (!address.match(allowedChars) || address.length < 5) {

        alert("Molimo unesite ispravnu adresu.");
        return false;
    }

    return true;
}

// Funkcija za prelazak na stranicu za odabir ulaznica
function goToTicketSelection() {

    // Dobivanje unesenih podataka
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;

    // Ako su svi podaci uneseni i adresa je u ispravnom formatu, preusmjeri korisnika na stranicu za odabir količine ulaznica
    if (name && email && validateAddress()) {
        window.location.href = "kupovina-ulaznica.html";
    } else {

        // Ako nešto od podataka nedostaje ili adresa nije u ispravnom formatu, obavijesti korisnika
        alert("Molimo vas da unesete sva polja u ispravnom formatu.");
    }

    return false;
}
