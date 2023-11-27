const h1 = document.querySelector("h1");

h1.addEventListener("click", (event) => {
    event.target.classList.toggle("blue");
    event.target.style.textAlign = "right";
})

// HULLO
