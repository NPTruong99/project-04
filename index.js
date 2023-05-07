const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const prevBtn = $(".review__control--prev");
const nextBtn = $(".review__control--next");
const reviewItems = $$(".review-item");
const reviewDots = $$(".review__dot");

// handle
var currentSlide = 0;
var slideInterval = setInterval(next, 3000);

// handle when click on prevBtn
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

function prev() {}

function next() {
    currentSlide = (currentSlide + 1) % reviewItems.length;
    // if ($(".review-item.active") == true) {
    //     $(".review-item.active").classList.remove("active");
    // }

    $(".review-item.active").classList.remove("active");
    reviewItems[currentSlide].classList.add("active");
}

function prev() {
    currentSlide = (currentSlide - 1 + reviewItems.length) % reviewItems.length;
    $(".review-item.active").classList.remove("active");
    reviewItems[currentSlide].classList.add("active");
}
