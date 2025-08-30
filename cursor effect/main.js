const blob = document.querySelector("#blob");
let started = false;

addEventListener("mousemove", (event) => {
    if(!started) {
        blob.style.left = `${event.clientX}px`;
        blob.style.top = `${event.clientY}px`;
        started = true;
    }
    else {
        blob.animate({
            left: `${event.clientX}px`,
            top: `${event.clientY}px`
        }, {
            duration: 2000,
            fill: "forwards"
        })
    }
});

const changeColorsBtn = document.querySelector("#change-colors");
changeColorsBtn.addEventListener("click", changeColors);

addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        event.preventDefault();
        if (!event.repeat) changeColors();
    }
})

function changeColors() {
    document.documentElement.style.setProperty("--COLOR1", randomColor());
    document.documentElement.style.setProperty("--COLOR2", randomColor());   
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}