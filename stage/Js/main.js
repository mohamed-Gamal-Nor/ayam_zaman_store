//random background option
let backgroundOption = true;
// varible to control interval
let backgroundInterval;
// check if there's Local storge Color option
let mainColors = localStorage.getItem("color_option");
// check if theres local storge background random turn on or of
let backgroundLocalItem = localStorage.getItem("background_option");
//check if theres local storge background
let setBackground = localStorage.getItem("backgroundChange");
// check fonts in local storge
let setFont = localStorage.getItem("fontFamily");
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
// check local storge random background
if (backgroundLocalItem !== null) {
    if (backgroundLocalItem === "true") {
        backgroundOption = true;
        $(".span-image").fadeOut(500);
    } else {
        backgroundOption = false;
        $(".span-image").fadeIn(500);
        $(".span-image span img").on("click", function() {
            $(".landing-page").css(
                "background-image",
                "url(" + $(this).attr("src") + ")"
            );
            localStorage.setItem(
                "backgroundChange",
                "url(" + $(this).attr("src") + ")"
            );
            $(this).parent().siblings().find(".active").removeClass("active");
            $(this).addClass("active");
        });
    }
    // remove class active from all span
    document.querySelectorAll(".random-background span").forEach((element) => {
        element.classList.remove("active");
    });
    if (backgroundLocalItem === "true") {
        document.querySelector(".random-background .yes").classList.add("active");
    } else {
        document.querySelector(".random-background .no").classList.add("active");
    }
}
// check local storge set background
if (setBackground !== null) {
    $(".landing-page").css("background-image", setBackground);
    $(".span-image span img")
        .parent()
        .siblings()
        .find(".active")
        .removeClass("active");
    document.querySelectorAll(".span-image span img").forEach((element) => {
        if ("url(" + element.getAttribute("src") + ")" === setBackground) {
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
//start settings box
document.querySelector(".toggle-settings .fa-cog").onclick = function() {
    // toggle class fa-spin to rotate this elemnt
    this.classList.toggle("fa-spin");
    // toggle class open to open settings box
    document.querySelector(".settings-box").classList.toggle("open");
};
//switch colors
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach((li) => {
    li.addEventListener("click", (e) => {
        //set color on root
        document.documentElement.style.setProperty(
            "--main--color",
            e.target.dataset.color
        );
        // set color in local storge
        localStorage.setItem("color_option", e.target.dataset.color);
        // remove active classs from all children
        e.target.parentElement.querySelectorAll(".active").forEach((Element) => {
            Element.classList.remove("active");
        });
        // add active class
        e.target.classList.add("active");
    });
});
//switch background random

const randomBackground = document.querySelectorAll(".random-background span");
randomBackground.forEach((span) => {
    span.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach((Element) => {
            Element.classList.remove("active");
        });
        // add active class
        e.target.classList.add("active");
        if (e.target.dataset.background === "yes") {
            backgroundOption = true;
            randomimg();
            localStorage.setItem("background_option", true);
            $(".span-image").fadeOut(500);
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option", false);
            //chose back ground if random image stop
            $(".span-image").fadeIn(500);
            $(".span-image span img").on("click", function() {
                $(".landing-page").css(
                    "background-image",
                    "url(" + $(this).attr("src") + ")"
                );
                localStorage.setItem(
                    "backgroundChange",
                    "url(" + $(this).attr("src") + ")"
                );
                $(this).parent().siblings().find(".active").removeClass("active");
                $(this).addClass("active");
            });
        }
    });
});
// swithc font style
const fontLi = document.querySelectorAll(".font-list li");
fontLi.forEach((li) => {
    li.addEventListener("click", (e) => {
        document.getElementsByTagName("body")[0].style.fontFamily =
            e.target.dataset.font;
        localStorage.setItem("fontFamily", e.target.dataset.font);
        // remove active classs from all children
        e.target.parentElement.querySelectorAll(".active").forEach((Element) => {
            Element.classList.remove("active");
        });
        // add active class
        e.target.classList.add("active");
    });
});
//end settings box

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

function randomimg() {
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            // get random number
            var randomNumber = Math.floor(Math.random() * imagesArray.length);
            // change background image url
            landingPage.style.backgroundImage =
                'url("imgs/landing/' + imagesArray[randomNumber] + '")';
        }, duration);
    }
}
randomimg();
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