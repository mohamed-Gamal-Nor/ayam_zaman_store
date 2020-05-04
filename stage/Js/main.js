// start landing page
// select landing page element
let landingPage = document.querySelector(".landing-page");
let imagesArray = Array();
//create for loop
for (let i = 0; i < 6; i++) {
    imagesArray[i] = i + 1 + ".jpg";
}
// set duration time
let duration = 5000;
setInterval(() => {
    // get random number
    var randomNumber = Math.floor(Math.random() * imagesArray.length);
    // change background image url
    landingPage.style.backgroundImage =
        'url("imgs/landing/' + imagesArray[randomNumber] + '")';
}, duration);

// menu button code
let menuButtonShow = document.querySelector(".links-menu i");
let menuButtonHide = document.querySelector(".links .icon i");
let menu = document.querySelector(".links");
menuButtonShow.onclick = function() {
    menu.style.right = 0;
};
menuButtonHide.onclick = function() {
    menu.style.right = "-" + menu.offsetWidth + "px";
};
// end landing page