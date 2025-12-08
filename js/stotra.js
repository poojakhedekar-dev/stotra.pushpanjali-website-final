document.addEventListener("DOMContentLoaded", () => {

    /* =======================================================
       🔙 BACK BUTTON (with fallback + keyboard accessibility)
    ======================================================= */
    const backBtn = document.getElementById("backBtn");
    if (backBtn) {
        backBtn.addEventListener("click", () => {
            if (window.history.length > 1) {
                window.history.back();

                setTimeout(() => {
                    if (document.visibilityState === "visible") {
                        window.location.href = "index.html";
                    }
                }, 700);
            } else {
                window.location.href = "index.html";
            }
        });

        backBtn.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                backBtn.click();
            }
        });
    }



    /* =======================================================
       📜 DYNAMIC ABHANGA LYRIC LOADING + ACTIVE STATE
    ======================================================= */
    const links = document.querySelectorAll(".sidebar-list a");
    const lyricsArea = document.getElementById("lyrics-area");
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.getElementById("sidebarToggle");

    if (lyricsArea && links.length > 0) {

        links.forEach(link => {
            link.addEventListener("click", async (e) => {
                e.preventDefault();

                const file = link.getAttribute("data-file");
                if (!file) return;

                // RESET ACTIVE + ADD NEW ACTIVE
                links.forEach(l => l.classList.remove("active"));
                link.classList.add("active");

                // LOAD LYRICS
                try {
                    const response = await fetch(file);
                    const data = await response.text();
                    lyricsArea.innerHTML = data;
                    lyricsArea.scrollTop = 0;
                } catch (err) {
                    lyricsArea.innerHTML = "<p> Error Loading Lyrics! Sorry😔</p>";
                }

                // 📱 Collapse on Mobile after Load
                if (window.innerWidth <= 768) {
                    sidebar.classList.add("collapsed");
                    sidebar.classList.remove("open");
                }
            });
        });
    }



    /* =======================================================
       📱 SIDEBAR TOGGLE BUTTON (OPEN FULL LIST)
    ======================================================= */
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener("click", () => {
            // Expand Full Sidebar
            sidebar.classList.toggle("open");

            // Remove collapsed mode on manual opening
            if (sidebar.classList.contains("open")) {
                sidebar.classList.remove("collapsed");
            }
        });
    }

});
