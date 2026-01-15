window.addEventListener("load", () => {
    const intro = document.getElementById("intro");
    const site = document.getElementById("site");

    // intro gösterim süresi
    setTimeout(() => {
        intro.classList.add("hidden");
        site.classList.add("visible");
    }, 900); // hızlı intro

    // intro tamamen silinsin
    setTimeout(() => {
        intro.style.display = "none";
    }, 1300);
});
