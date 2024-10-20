const backBtn = document.querySelector(".back");
const nextBtn = document.querySelector(".next");
const csrollContainer = document.querySelector(".images-container");

backBtn.addEventListener("click", () => {
    csrollContainer.scrollBy({
        left: 350,
        top: 0,
        behavior: "smooth"
    })
});

nextBtn.addEventListener("click", () => {
    csrollContainer.scrollBy({
        left: -350,
        top: 0,
        behavior: "smooth"
    })
});