// JavaScript to enlarge text when hovered over
document.addEventListener("DOMContentLoaded", () => {
    // Select all text elements that need the hover effect
    const textElements = document.querySelectorAll("h1, h2, li, a, .logo");

    textElements.forEach((element) => {
        // Add a hover event listener to each text element
        element.addEventListener("mouseover", () => {
            element.classList.add("enlarge"); // Add 'enlarge' class
        });

        element.addEventListener("mouseout", () => {
            element.classList.remove("enlarge"); // Remove 'enlarge' class
        });
    });
});
