function buyTickets() {

    // Dohvaćanje vrijednosti iz input polja
    var numAdult = parseInt(document.getElementById("adult").value);
    var numChild = parseInt(document.getElementById("child").value);
    var memberID = document.getElementById("member").value;
    var selectedMatch = document.getElementById("match").value;

    // Provjera jesu li odabrane barem jedna karta za odraslog ili dijete
    if (numAdult === 0 && numChild === 0) {
        alert("Morate odabrati barem jednu ulaznicu za odraslu osobu ili dijete.");
        return false;
    }

    // Provjera je li odabrana utakmica
    if (selectedMatch === "") {
        alert("Molimo odaberite utakmicu prije nastavka na plaćanje.");
        return false;
    }

    // Izračun ukupne cijene
    var totalPrice = (numAdult * 5) + (numChild * 2);

    // Provjera je li unesena članska iskaznica
    if (memberID !== "") {

        // Provjera je li članska iskaznica valjana (sadrži 6 znamenki)
        if (memberID.length === 6) {

            // Ako je unesena ispravna članska iskaznica, primijeni popust od 10%
            totalPrice *= 0.9;
        } else {
            alert("Članska iskaznica mora sadržavati točno 6 znamenki.");
            return false;
        }
    }

    // Formatiranje ukupne cijene s dvije decimale
    totalPrice = totalPrice.toFixed(2);

    // Preusmjeravanje korisnika na stranicu za plaćanje s ukupnom cijenom kao URL parametrom
    window.location.href = "placanje.html?total=" + totalPrice + "&member=" + memberID + "&match=" + selectedMatch;

    // Zaustavljanje podnošenja obrasca
    return false;
}









