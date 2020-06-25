/*jshint esversion: 6 */
if (document.title.split("-")[1] == "Product Deatails") {
    // loop background color product
    let spanColor = document.querySelectorAll(
        ".product-deatils .product .imgae-info .product-color span"
    );
    spanColor.forEach((span) => {
        span.style.backgroundColor = span.dataset.color;
    });

    //mouse over in slider
    var mzOptions = {
        zoomPosition: "inner",
        cssClass: " mz-show-arrows",
    };

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

    // review code start
    let listButton = document.querySelectorAll(
        ".product-review .review-links li"
    );
    let view = document.querySelectorAll(".product-review .view div");
    console.log(view);
    listButton.forEach((libutton) => {
        libutton.addEventListener("click", (e) => {
            handleActive(e);
            view.forEach((v) => {
                v.classList.remove("active");
            });
            document.getElementById(e.target.dataset.review).classList.add("active");
        });
    });
}