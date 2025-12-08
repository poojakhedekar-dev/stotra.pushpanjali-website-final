// =======================================================
// 📱 Default message handler (Abhanga special case)
// =======================================================

function updateDefaultMessage() {
    const msg = document.getElementById("defaultMessage");
    if (!msg) return;

    // Detect current file name
    const currentPage = window.location.pathname.toLowerCase();

    let desktopMsg = "";
    let mobileMsg = "";

    // If this is abhanga.html page
    if (currentPage.includes("abhanga")) {
        desktopMsg = "Select an Abhanga From Sidebar List to See Lyrics";
        mobileMsg = "Tap the 'Abhanga List' button above & choose an Abhanga to view lyrics";
    } 
    // For all other pages
    else {
        desktopMsg = "Select a Stotra From Sidebar List to See Lyrics";
        mobileMsg = "Tap the 'Stotra List' button above & choose a Stotra to view lyrics";
    }

    // Apply message based on screen size
    msg.innerText = window.innerWidth <= 768 ? mobileMsg : desktopMsg;
}

// Run when page loads
document.addEventListener("DOMContentLoaded", updateDefaultMessage);

// Run when screen size changes
window.addEventListener("resize", updateDefaultMessage);
