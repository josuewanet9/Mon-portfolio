/* =========================================
MENU MOBILE
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {

```
menuToggle.addEventListener("click", function () {

    navigation.classList.toggle("show");

    const menuOuvert = navigation.classList.contains("show");

    menuToggle.setAttribute(
        "aria-label",
        menuOuvert ? "Fermer le menu" : "Ouvrir le menu"
    );

});
```

}

/* =========================================
FORMULAIRE DE CONTACT
========================================= */

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

```
contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Récupération des champs
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const subject = document.querySelector("#subject");
    const message = document.querySelector("#message");

    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");
    const subjectError = document.querySelector("#subjectError");
    const messageError = document.querySelector("#messageError");
    const formSuccess = document.querySelector("#formSuccess");


    // Réinitialiser les messages
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";


    let formValide = true;


    /* Vérification du nom */

    if (name.value.trim() === "") {

        nameError.textContent = "Veuillez saisir votre nom.";

        formValide = false;

    }


    /* Vérification de l'email */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {

        emailError.textContent =
            "Veuillez saisir votre adresse email.";

        formValide = false;

    } else if (!emailPattern.test(email.value.trim())) {

        emailError.textContent =
            "Veuillez saisir une adresse email valide.";

        formValide = false;

    }


    /* Vérification du sujet */

    if (subject.value.trim() === "") {

        subjectError.textContent =
            "Veuillez saisir un sujet.";

        formValide = false;

    }


    /* Vérification du message */

    if (message.value.trim() === "") {

        messageError.textContent =
            "Veuillez saisir votre message.";

        formValide = false;

    }


    /* Résultat */

    if (formValide) {

        formSuccess.textContent =
            "Votre message a été envoyé avec succès !";

        contactForm.reset();

    }

});
```

}

/* =========================================
BOUTONS DES PROJETS
========================================= */

const projectButtons =
document.querySelectorAll(".project-button");

projectButtons.forEach(function (button) {

```
button.addEventListener("click", function () {

    alert(
        "La page détaillée de ce projet sera disponible prochainement."
    );

});
```

});
