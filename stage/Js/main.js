/*jshint esversion: 6 */

const Suites = {
    Spade: 1,
    Heart: 2,
    Diamond: 3,
    Club: 4,
};

if (document.title.split("-")[1] !== "Home") {
    document.querySelector(".header-area").classList.add("header-fixed");
    // add margin to intro to skiped fixed header
    document.querySelector(".intro-page").style.marginTop =
        document.querySelector(".header-area").offsetHeight + "px";
}