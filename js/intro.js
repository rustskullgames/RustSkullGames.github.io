window.addEventListener("load", () => {
    const intro = document.getElementById("intro");
    const site = document.getElementById("site");

    // fade-in
    intro.classList.add("show");

    // fade-out
    setTimeout(() => {
        intro.classList.add("hidden");
        site.classList.add("visible");
    }, 900);

    // tamamen kaldır
    setTimeout(() => {
        intro.style.display = "none";
    }, 1300);
});
