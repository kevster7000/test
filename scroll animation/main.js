let options = {
    rootMargin: "0px",
    threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            observer.unobserve(entry.target);
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    });
}, options);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {observer.observe(el); })