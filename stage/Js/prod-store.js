/*jshint esversion: 6 */
if (document.title.split("-")[1] == "Product Store") {
    var slides = 3;
    if (window.innerWidth <= 992) {
        slides = 1;
    }
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: slides,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}