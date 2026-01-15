const pageName = document.body.getAttribute("data-page");

if (pageName && pageName !== "Home") {
    document.title = `${pageName} - Rust Skull Games`;
} else {
    document.title = "Rust Skull Games";
}
