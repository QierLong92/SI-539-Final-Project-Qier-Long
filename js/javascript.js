document.addEventListener("DOMContentLoaded", () => {
    
    const buttons = document.querySelectorAll(".season-btn");
    const panels = document.querySelectorAll(".season-panel");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {

            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const season = btn.dataset.season;

            panels.forEach(panel => panel.classList.remove("active"));
            document.getElementById(season).classList.add("active");
        });
    });
});
