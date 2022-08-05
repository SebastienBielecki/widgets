const cards = document.querySelectorAll(".card-container");
console.log(cards);

cards.forEach(element => {
    element.addEventListener("click", () => {
        console.log("i got clicked");
        removeActive();
        element.classList.add("active");
    })
});

function removeActive() {
    cards.forEach(element => {
        element.classList.remove("active");
    });
}