/* =====================================================
   1️⃣  WELCOME MESSAGE TYPING EFFECT
===================================================== */

const welcomeMessage = "🌸Welcome to Stotra Pushpanjali🌸";
let welcomeIndex = 0;
let welcomeSpeed = 120; // slow devotional typing

function typeWelcome() {
    const welcomeElement = document.getElementById("welcomeText");

    if (welcomeIndex < welcomeMessage.length) {
        welcomeElement.textContent += welcomeMessage.charAt(welcomeIndex);
        welcomeIndex++;
        setTimeout(typeWelcome, welcomeSpeed);
    }
}

// Start welcome typing
window.addEventListener("load", typeWelcome);


/* =====================================================
   2️⃣  MANTRA TYPING + ERASING EFFECT (Your Old Code)
===================================================== */

const mantras = [
    "ॐ नमः शिवाय",
    "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे\nहरे राम हरे राम राम राम हरे हरे",
    "॥ श्री गणेशाय नमः ॥",
    "॥ श्री राम जय राम जय जय राम ॥"
];

let mantraIndex = 0;
let charIndex = 0;
let typingSpeed = 90;
let erasingSpeed = 50;
let delayBetweenMantras = 1500;

function typeMantra() {
    const element = document.querySelector(".mantra-type");

    if (charIndex < mantras[mantraIndex].length) {
        element.innerHTML += mantras[mantraIndex]
            .charAt(charIndex)
            .replace("\n", "<br>");

        charIndex++;
        setTimeout(typeMantra, typingSpeed);
    } else {
        setTimeout(eraseMantra, delayBetweenMantras);
    }
}

function eraseMantra() {
    const element = document.querySelector(".mantra-type");

    if (charIndex > 0) {
        charIndex--;
        element.innerHTML = mantras[mantraIndex]
            .substring(0, charIndex)
            .replace(/\n/g, "<br>");

        setTimeout(eraseMantra, erasingSpeed);
    } else {
        mantraIndex = (mantraIndex + 1) % mantras.length;
        setTimeout(typeMantra, 500);
    }
}

// Start mantra typing after page load
window.addEventListener("load", () => {
    setTimeout(typeMantra, 500);
});

// scroll to god card after clicking on tab 
function scrollToGods() {
    document.getElementById("godCardsSection").scrollIntoView({
        behavior: "smooth"
    });
}
