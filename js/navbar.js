// ===============================
// 📌 MOBILE HAMBURGER MENU
// ===============================
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");

if (hamburger) {
    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        navbar.classList.toggle("active");
    });
}

// Close menu when clicking outside (mobile fix)
document.addEventListener("click", (e) => {
    if (navbar.classList.contains("active") &&
        !navbar.contains(e.target) &&
        !hamburger.contains(e.target)) {
        navbar.classList.remove("active");
    }
});


// ===============================
// 📌 DROPDOWN (ARROW + MOBILE CLICK)
// ===============================
const dropdown = document.querySelector(".dropdown");
const dropdownLink = dropdown?.querySelector("a");

if (dropdownLink) {
    dropdownLink.addEventListener("click", (e) => {
        // Disable toggle on desktop (hover mode)
        if (window.innerWidth > 768) return;

        e.preventDefault();
        dropdown.classList.toggle("open");
    });
}


// ===============================
// 📌 ACTIVE LINK HIGHLIGHT SYSTEM
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();

    // Highlight normal nav links
    document.querySelectorAll(".nav-links > li > a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Pages under "Explore Saint"
    const godPages = [
        "shiva.html", 
        "ganesh.html", 
        "krishna.html",
        "ram.html",
        "abhanga.html",
        "hanuman.html"
    ];

    // Highlight parent menu if page matches
    if (godPages.includes(currentPage)) {
        const godsLink = document.querySelector(".dropdown > a");
        godsLink?.classList.add("active");
    }

    // Highlight items inside dropdown
    document.querySelectorAll(".dropdown-menu a").forEach(item => {
        if (item.getAttribute("href") === currentPage) {
            item.classList.add("active");
        }
    });
});
