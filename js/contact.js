document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    const sendBtn = document.querySelector(".send-btn");
    const backBtn = document.getElementById("backBtn");

    /* ==========================
       CONTACT TAB SCROLL
    ===========================*/
    const contactTab = document.querySelector(".contact-tab-heading");
    const contactFormSection = document.querySelector(".contact-container");

    if (contactTab && contactFormSection) {
        contactTab.addEventListener("click", () => {
            contactFormSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    /* ==========================
       TOAST MESSAGE
    ===========================*/
    const toast = document.createElement("div");
    toast.id = "toastMessage";
    Object.assign(toast.style, {
        position: "fixed",
        bottom: "30px",
        right: "30px",
        padding: "15px 22px",
        background: "linear-gradient(45deg, #ffb74a, #ffcc70)",
        color: "#1a1a1a",
        fontWeight: "bold",
        borderRadius: "12px",
        boxShadow: "0 0 15px rgba(255,204,112,0.6)",
        opacity: "0",
        transition: "0.4s ease",
        pointerEvents: "none",
        zIndex: "2000",
    });
    document.body.appendChild(toast);

    function showToast(text) {
        toast.innerText = text;
        toast.style.opacity = "1";
        setTimeout(() => (toast.style.opacity = "0"), 2500);
    }

    /* ==========================
       EMAIL PREVIEW POPUP
    ===========================*/
    function showEmailPreview(name, email, message) {
        const previewBox = document.createElement("div");
        Object.assign(previewBox.style, {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "380px",
            padding: "25px",
            background: "rgba(0,0,0,0.85)",
            color: "#fff",
            borderRadius: "15px",
            boxShadow: "0 0 25px rgba(255,204,112,0.4)",
            zIndex: "9999",
        });

        previewBox.innerHTML = `
            <h3 style="color:#ffcc70; margin-bottom:10px;">📩 Message Preview</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background:rgba(255,255,255,0.1); padding:10px; border-radius:8px;">
                ${message}
            </p>

            <button id="closePreview"
                style="
                    margin-top:15px; 
                    padding:10px 16px;
                    background:linear-gradient(45deg, #ffb74a, #ffcc70);
                    border:none;
                    border-radius:10px;
                    cursor:pointer;
                    font-weight:bold;
                    width:100%;
                ">
                Close
            </button>
        `;

        document.body.appendChild(previewBox);

        document.getElementById("closePreview").onclick = () => previewBox.remove();
    }

    /* ==========================
       FORM SUBMIT (Demo)
    ===========================*/
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.querySelector("input[name='name']").value.trim();
        const email = form.querySelector("input[name='email']").value.trim();
        const message = form.querySelector("textarea[name='message']").value.trim();

        if (!name || !email || !message) {
            showToast("⚠ Please fill all fields");
            return;
        }

        sendBtn.disabled = true;
        sendBtn.style.opacity = "0.5";
        sendBtn.innerText = "Sending...";

        showEmailPreview(name, email, message);

        setTimeout(() => {
            form.reset();
            sendBtn.disabled = false;
            sendBtn.style.opacity = "1";
            sendBtn.innerText = "Send Message";
            showToast("✔ Message sent successfully!");
        }, 2000);
    });

    /* ==========================
       BACK BUTTON
    ===========================*/
    if (backBtn) {
    backBtn.addEventListener("click", () => {

        // Reliable check for previous page
        if (document.referrer && document.referrer !== window.location.href) {
            window.history.back();
        } else {
            window.location.href = "index.html";
        }

    });
}

});
