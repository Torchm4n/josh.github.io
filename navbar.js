window.addEventListener("pageshow", () => {
    const nav = document.getElementById("nav");

    setTimeout(() => {
        nav.classList.add("expanded");
    }, 50)
})