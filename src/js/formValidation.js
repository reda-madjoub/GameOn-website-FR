// ELEMENT DOM
const form = document.getElementById("form");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const birthdate = document.getElementById("birthdate");
const city = document.querySelectorAll("#city .checkbox-input")
const allCity = document.getElementById("city")
const checkbox1 = document.getElementById("checkbox1");
const input = document.getElementsByClassName("text-control");

/*********************************/










/*********************/

// VERIFICATION PRENOM && NOM
const checkFirstName = () => {
    if( first.value.trim().length < 2 || first.value.trim() === ""){
        first.parentElement.setAttribute("data-error-visible", "true")
        return false
    }
    first.parentElement.setAttribute("data-error-visible", "false")
    return true;
}
const checkLastName = () => {
    if( last.value.trim().length < 2 || last.value.trim() === ""){
        last.parentElement.setAttribute("data-error-visible", "true")
        return false
    }
    last.parentElement.setAttribute("data-error-visible", "false")
    return true;
}


// VALIDATION EMAIL
const checkEmail = () => {
    let regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (email.value.trim().match(regexEmail)) {
        email.parentElement.setAttribute("data-error-visible", "false")
        return true; 
    }else {
        email.parentElement.setAttribute("data-error-visible", "true")
        return false; 
    }
}

// VALIDATION NOMBRE CONCOURS
const checkTypeNumber = () => {
    console.log();
    if(quantity.value.trim().length === 0 ||
       isNaN(quantity.value.trim()) === true ||
       quantity.value.trim() < 0) {
        quantity.parentElement.setAttribute("data-error-visible", "true")
        return false;
    }else {
        quantity.parentElement.setAttribute("data-error-visible", "false")
        return true;
    }
}




// VALIDATION DATE NAISSANCE
const checkBirthday = () => {
    if(birthdate.value.trim().length !== 10) {
        birthdate.parentElement.setAttribute("data-error-visible", "true")
        return false
    }
    birthdate.parentElement.setAttribute("data-error-visible", "false")
    return true;
}

// VALIDATION SELECTION VILLE
const checkCity = () => {
    allCity.setAttribute("data-error-visible", "true")
    for (let i = 0; i < city.length; i++) {
        if(city[i].checked) {
            allCity.setAttribute("data-error-visible", "false")
        }
    }
    return true
}



// VALIDATION CONDITION UTILISATIONS GENERALES (CHECKED)
const checkboxChecked = () => {
    if(checkbox1.checked === false) {
        checkbox1.parentElement.setAttribute("data-error-visible", "true")
        return false
    }
    checkbox1.parentElement.setAttribute("data-error-visible", "false")
    return true;
}

// CHOISIR QUEL CHAMPS VERIFIER
const checkFields = (element, method, event) => {
    element.addEventListener(event, method)
}

// AJOUT EVENEMENT AUX ELEMENTS DU FORMULAIRE
checkFields(first, checkFirstName, "focusout")
checkFields(last, checkLastName, "focusout")
checkFields(email, checkEmail,"focusout")
checkFields(quantity, checkTypeNumber,"focusout")
checkFields(birthdate, checkBirthday,"focusout")
checkFields(allCity, checkCity,"change")
checkFields(checkbox1, checkboxChecked,"change")

// VERIFICATION DE TOUS LES CHAMPS
const checkAllFields = () => {
    checkFirstName()
    checkLastName()
    checkEmail()
    checkTypeNumber()
    checkBirthday()
    checkCity()
    checkboxChecked()
}

// VALIDATION DE TOUS LES CHAMPS DU FORM
const finalValidation = () => {
    if(checkFirstName() === true &&
        checkLastName() === true &&
        checkEmail() === true &&
        checkTypeNumber() === true &&
        checkBirthday() === true &&
        checkCity() === true &&
        checkboxChecked() === true) {
            return true
    }
    return false
}


// SOUMISSION DU FORMULAIRE
form.addEventListener("submit", (e) => {
    // EMPECHER LE REFRESH DE LA PAGE
    e.preventDefault()
    if (finalValidation() === true) {
        // AFFICHER MODAL CONFIRMATION DE SOUMISSION DU FORMULAIRE
        launchModalSubmittedForm()
    }else {
        // AFFICHER LES CHAMPS NON OU MAL, REMPLI
        checkAllFields()
    }
});








