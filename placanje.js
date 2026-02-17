function validatePaymentForm() {
    
    // Dobivanje vrijednosti unesenih u input polja
    var fullName = document.getElementById("fullName").value.trim();
    var cardNumber = document.getElementById("cardNumber").value.trim();
    var expiryDate = document.getElementById("expiryDate").value.trim();
    var cvv = document.getElementById("cvv").value.trim();

    // Dobivanje ukupne cijene iz URL-a
    var urlParams = new URLSearchParams(window.location.search);
    var totalPrice = urlParams.get('total');

    // Provjera jesu li sva polja popunjena
    if (fullName === "" || cardNumber === "" || expiryDate === "" || cvv === "") {
        alert("Molimo unesite sva potrebna polja.");
        return false;
    }

    // Provjera ispravnosti formata broja kartice i CVV-a
    var cardNumberRegex = /^\d{16}$/;
    var cvvRegex = /^\d{3}$/;
    if (!cardNumber.match(cardNumberRegex)) {
        alert("Molimo unesite ispravan broj kartice.");
        return false;
    }
    if (!cvv.match(cvvRegex)) {
        alert("Molimo unesite ispravan CVV.");
        return false;
    }

    // Provjera ispravnosti formata datuma isteka
    var expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDate.match(expiryDateRegex)) {
        alert("Molimo unesite ispravan datum isteka.");
        return false;
    }

    // Ako su svi podaci ispravno uneseni, forma se može poslati
    alert("Uspješno ste obavili plaćanje. Ulaznice će biti dostavljene na vašu adresu. Ukupna cijena je: " + totalPrice + "€");
    return true;
}


