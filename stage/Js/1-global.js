/*jshint esversion: 6 */
// check if there's Local storge Color option
let mainColors = localStorage.getItem("color_option");
// check if theres local storge background random turn on or of
let backgroundLocalItem = localStorage.getItem("background_option");
//check if theres local storge background
let setBackground = localStorage.getItem("backgroundChange");
// check fonts in local storge
let setFont = localStorage.getItem("fontFamily");
// set about us image
let setAboutImg = localStorage.getItem("aboutImg");
// set bullets in local storge
let bulletLocal = localStorage.getItem("bullets-option");
//check local storge main color
if (mainColors !== null) {
    document.documentElement.style.setProperty("--main--color", mainColors);
    // check for active class from all colors list item
    document.querySelectorAll(".colors-list li").forEach((element) => {
        element.classList.remove("active");
        if (element.dataset.color === mainColors) {
            // add active classs
            element.classList.add("active");
        }
    });
}
// check local storge set font
if (setFont !== null) {
    document.getElementsByTagName("body")[0].style.fontFamily = setFont;
    document.querySelectorAll(".font-list li").forEach((element) => {
        element.classList.remove("active");
        if (element.dataset.font === setFont) {
            element.classList.add("active");
        }
    });
}
// handle active state
var handleActive = (ev) => {
    // remove active classs from all children
    ev.target.parentElement.querySelectorAll(".active").forEach((Element) => {
        Element.classList.remove("active");
    });
    // add active class
    ev.target.classList.add("active");
};
//function type wrriter effects
var typeWrriter = (id, speed) => {
    "use strict";
    let element = document.getElementById(id);
    let string = element.dataset.text;
    let i = 0;
    window.onload = () => {
        var type = setInterval(() => {
            element.textContent += string[i];
            i = i + 1;
            if (i > string.length - 1) {
                clearInterval(type);
            }
        }, speed);
    };
};
// code to add active class to links menu after check page
let linksMenu = document.querySelectorAll(
    ".header-area .links-container .links a"
);
linksMenu.forEach((link) => {
    if (link.dataset.page === document.title.split("-")[1]) {
        link.classList.add("active");
    }
});

// toggle menu in responsive
let openButton = document.querySelector(
    ".header-area .links-container .toggle-links i"
);
let toggleMenu = document.querySelector(".header-area .links-container .links");
let closeMenu = document.querySelector(
    ".header-area .links-container .links .links-close i"
);
openButton.onclick = function(e) {
    toggleMenu.classList.add("open");
    e.stopPropagation();
};
closeMenu.onclick = function() {
    toggleMenu.classList.remove("open");
};

// click any where click close menu
document.addEventListener("click", (e) => {
    if (e.target !== closeMenu && e.target !== toggleMenu) {
        if (toggleMenu.classList.contains("open")) {
            toggleMenu.classList.remove("open");
        }
    }
});
toggleMenu.onclick = function(e) {
    e.stopPropagation();
};
//code footer get image from instagram
let instaImgae = document.querySelectorAll(
    ".footer-page .socailmedia .insta-imge a"
);
instaImgae.forEach((image) => {
    image.style.backgroundImage = "url(" + image.dataset.background + ")";
});

// hide loader if page is loded
$(window).on("load", function() {
    $(".loader").fadeOut("slow");
});

// messenger code
window.fbAsyncInit = function() {
    FB.init({
        xfbml: true,
        version: "v7.0",
    });
};

(function(d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/ar_AR/sdk/xfbml.customerchat.js";
    fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

// button scrrol top func
let counterOn = false;
let buttonUp = document.querySelector(".button-top span");
let scrollTo = document.getElementById("scrollTo");
//start our feature counter
let ourSkills = document.querySelector(".about-us");
const counterItem = document.querySelectorAll(
    ".about-us .counter-about .count"
);
const speed = 1;
var scrollToTop = () => {
    window.onscroll = () => {
        if (counterOn) {
            // get offset top by skills
            let skillsOffsetTop = ourSkills.offsetTop;
            //skills outer height
            let skillsOuterHeight = ourSkills.offsetHeight;
            //window height
            let windowHeight = this.innerHeight;
            // window scroll top
            let windowScrollTop = this.pageYOffset;

            if (
                windowScrollTop >
                skillsOffsetTop + skillsOuterHeight - windowHeight
            ) {
                counterItem.forEach((counter) => {
                    const updateCount = () => {
                        const counterTarget = +counter.dataset.target;
                        const counterStart = +counter.innerText;
                        const inc = speed;
                        if (counterStart < counterTarget) {
                            counter.innerText = Math.ceil(counterStart + inc);
                            setTimeout(updateCount, 1);
                        } else {
                            counterStart.innerText = counterTarget;
                        }
                    };
                    updateCount();
                });
            }
        }
        if (window.pageYOffset >= 900) {
            buttonUp.parentElement.style.display = "block";
            if (document.title.split("-")[1] === "Home") {
                document
                    .querySelector(".landing-page .header-area")
                    .classList.add("header-fixed");
            }
        } else {
            buttonUp.parentElement.style.display = "none";
            if (document.title.split("-")[1] === "Home") {
                document
                    .querySelector(".landing-page .header-area")
                    .classList.remove("header-fixed");
            }
        }
    };
    buttonUp.onclick = () => {
        scrollTo.scrollIntoView({
            behavior: "smooth",
        });
    };
};
scrollToTop();