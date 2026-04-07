function contactWA() {
    window.open("https://wa.me/6285158822803", "_blank");
}

/* smooth scroll */
document.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        }
    });
});