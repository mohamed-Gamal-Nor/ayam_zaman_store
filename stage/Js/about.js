/*jshint esversion: 6 */
if (document.title.split("-")[1] == "About") {
    if (setAboutImg !== null) {
        document
            .querySelector(".about-us .image-box img")
            .setAttribute("src", "./imgs/about/" + setAboutImg + ".png");
    }
    counterOn = true;
    // slider comments
    var swiper = new Swiper(".swiper-container", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
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