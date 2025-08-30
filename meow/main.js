const img = document.querySelector("#cat-img");
const catBtn = document.querySelector("#cat-btn");

async function getCatImg() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search")
    const newCatImg = await response.json();
    img.src = newCatImg[0].url;
};

addEventListener("DOMContentLoaded", getCatImg);
catBtn.addEventListener("click", getCatImg);