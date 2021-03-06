/*jshint esversion: 6 */
// check if page is home do this code
if (document.title.split("-")[1] === "Home") {
    //star type writer code func
    typeWrriter("text", 25);

    if (setAboutImg !== null) {
        document
            .querySelector(".about-us .image-box img")
            .setAttribute("src", "./imgs/about/" + setAboutImg + ".png");
    }
    //random background option
    let backgroundOption = true;
    // varible to control interval
    let backgroundInterval;

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
            // and change image in about us
            document
                .querySelector(".about-us .image-box img")
                .setAttribute(
                    "src",
                    "./imgs/about/" + e.target.dataset.color.split("#")[1] + ".png"
                );
            // set about image in local storge
            localStorage.setItem("aboutImg", e.target.dataset.color.split("#")[1]);
            // set color in local storge
            localStorage.setItem("color_option", e.target.dataset.color);
            handleActive(e);
        });
    });
    //switch background random

    const randomBackground = document.querySelectorAll(".random-background span");
    randomBackground.forEach((span) => {
        span.addEventListener("click", (e) => {
            handleActive(e);
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
            handleActive(e);
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

    var randomimg = () => {
        if (backgroundOption === true) {
            backgroundInterval = setInterval(() => {
                // get random number
                var randomNumber = Math.floor(Math.random() * imagesArray.length);
                // change background image url
                landingPage.style.backgroundImage =
                    'url("imgs/landing/' + imagesArray[randomNumber] + '")';
            }, duration);
        }
    };
    randomimg();
    // somze dowwn button
    document
        .querySelector(".landing-page .somze-down i")
        .addEventListener("click", function() {
            document.querySelector(".clothes-part").scrollIntoView({
                behavior: "smooth",
            });
        });

    // end landing page
    // check box code for subscribe button
    let checkBoxButton = document.querySelector(".subscripe .check input");
    let buttonSubmit = document.querySelector(".subscripe input[type='submit']");
    let emailInput = document.querySelector(
        ".subscripe form input[type='email']"
    );
    let errorMessage = document.querySelector(".subscripe form .message");
    let mailsExt = ["gmail.com", "hotmail.com", "yahoo.com"];
    checkBoxButton.addEventListener("click", function() {
        if (checkBoxButton.checked == true) {
            buttonSubmit.removeAttribute("disabled");
        } else {
            buttonSubmit.setAttribute("disabled", "disabled");
        }
    });
    buttonSubmit.addEventListener("click", function(e) {
        if (emailInput.value === "") {
            e.preventDefault();
            errorMessage.innerHTML = "Sorry You Should Type Your Mail";
            errorMessage.classList.add("error-messge");
        } else if (!mailsExt.includes(emailInput.value.split("@")[1].toLowerCase)) {
            e.preventDefault();
            errorMessage.innerHTML = "Email must Be [gmail , hotmail , yahoo] .com";
            errorMessage.classList.add("error-messge");
        }
    });
    counterOn = true;

    // create popup with the image
    let ourGallery = document.querySelectorAll(".gallery .images-box img");
    ourGallery.forEach((img) => {
        img.addEventListener("click", (e) => {
            //create ovar lay element
            let overLay = document.createElement("div");
            // add class to over lay
            overLay.className = "popup-overlay";
            // appen overlay to body
            document.body.appendChild(overLay);
            // create the popup box
            let popupBox = document.createElement("div");
            // add class to the popup box
            popupBox.className = "popup-box";
            //create image
            let popupImage = document.createElement("img");
            //change src image and get src from click image
            popupImage.src = img.src;
            // add image to popup box
            popupBox.appendChild(popupImage);
            // append popup box to body
            document.body.appendChild(popupBox);
            // create close popup
            let closeButton = document.createElement("span");
            // create the close button text
            let closeButtonText = document.createTextNode("X");
            closeButton.appendChild(closeButtonText);
            closeButton.className = "close-button";
            popupBox.appendChild(closeButton);
        });
    });
    //close popup
    document.addEventListener("click", (e) => {
        if (e.target.className == "close-button") {
            // remove the current popup
            e.target.parentNode.remove();
            document.querySelector(".popup-overlay").remove();
        }
    });

    // start code for nav  bulltes
    const allBullets = document.querySelectorAll(".nav-bullets .bullet");
    allBullets.forEach((bullet) => {
        bullet.addEventListener("click", (e) => {
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    //show or hide bullets
    let bulletSpan = document.querySelectorAll(".bullets-option span");
    let bulletsContainer = document.querySelector(".nav-bullets");
    if (bulletLocal !== null) {
        bulletSpan.forEach((span) => {
            span.classList.remove("active");
            if (bulletLocal === "block") {
                bulletsContainer.style.display = "block";
                document.querySelector(".bullets-option .yes").classList.add("active");
            } else {
                bulletsContainer.style.display = "none";
                document.querySelector(".bullets-option .no").classList.add("active");
            }
        });
    }
    bulletSpan.forEach((span) => {
        span.addEventListener("click", (e) => {
            handleActive(e);
            if (span.dataset.display === "show") {
                bulletsContainer.style.display = "block";
                localStorage.setItem("bullets-option", "block");
            } else {
                bulletsContainer.style.display = "none";
                localStorage.setItem("bullets-option", "none");
            }
        });
    });

    // reset button code
    document.querySelector(".settings-box .reset-options").onclick = function() {
        localStorage.removeItem("color_option");
        localStorage.removeItem("background_option");
        localStorage.removeItem("backgroundChange");
        localStorage.removeItem("fontFamily");
        localStorage.removeItem("aboutImg");
        localStorage.removeItem("bullets-option");
        window.location.reload();
    };
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