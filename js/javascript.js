document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".season-btn");
    const panels = document.querySelectorAll(".season_panel_active");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {

            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const season = btn.dataset.season;

            panels.forEach(panel => panel.classList.remove("active"));
            document.getElementById(season).classList.add("active");
            console.log(`Switched to ${season} panel`);
        });

    });

    const infoBox = document.getElementById("infoBox");
    const infoTitle = document.getElementById("info-title");
    const infoText = document.getElementById("info-text");

    // Button 4
    const btn4 = document.querySelector(".map-btn btn4");
    btn4.addEventListener("click", () => {
        infoTitle.textContent = "South Michigan";
        infoText.textContent = "Suburban and urban areas with a mix of residential and commercial properties. Common pests include ants, spiders, and rodents.";
        infoBox.style.display = "block";
        console.log("Button 4 clicked");
    });



});
