
document.addEventListener("DOMContentLoaded", () => {

    const textElements = document.querySelectorAll("h1, h2, li, a, .logo");

    textElements.forEach((element) => {

        element.addEventListener("mouseover", () => {
            element.classList.add("enlarge"); 
        });

        element.addEventListener("mouseout", () => {
            element.classList.remove("enlarge"); 
        });
    });
});
