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
    listButton.forEach((libutton) => {
        libutton.addEventListener("click", (e) => {
            handleActive(e);
            view.forEach((v) => {
                v.classList.remove("active");
            });
            document.getElementById(e.target.dataset.review).classList.add("active");
        });
    });

    // code for review Comment form
    let reviewForm = document.querySelectorAll(
        ".product-review .view .rev .add-review .add-rate input"
    );
    let textAreaReview = document.querySelector(
        ".product-review .view .rev .add-review .add-rate textarea"
    );
    let reviewButton = document.querySelector(
        ".product-review .view .rev .add-review .add-rate input[type='submit']"
    );
    let alertMessage = document.querySelector(
        ".product-review .view .rev .add-review .add-rate .error-messge"
    );
    var nameErrorForm = true,
        emailErrorForm = true,
        phoneErrorForm = true,
        textAreaErrorForm = true,
        starRateErrorForm = true;
    var errorArray = true;

    var showMessage = (element, reg = true) => {
        if (element.value === "") {
            element.classList.add("error");
            alertMessage.innerHTML =
                "Sorry But " + element.dataset.error + " Cant be Empty";
            errorArray = true;
        } else if (reg == null) {
            element.classList.add("error");
            alertMessage.innerHTML =
                "Sorry But " +
                element.dataset.error +
                " Not True Please Type Vaild " +
                element.dataset.error;
            errorArray = true;
        } else {
            alertMessage.innerHTML = "";
            element.classList.remove("error");
            element.classList.add("no-error");
            errorArray = false;
        }
    };
    textAreaReview.addEventListener("blur", () => {
        if (textAreaReview.value == "") {
            alertMessage.innerHTML = "Sorry but Type Your Review For Product";
            textAreaReview.classList.add("error");
            textAreaReview.classList.remove("no-error");
        } else if (textAreaReview.value.length <= 20) {
            alertMessage.innerHTML = "Sorry but Must Type more Than 20 Charcters";
            textAreaReview.classList.add("error");
            textAreaReview.classList.remove("no-error");
        } else {
            alertMessage.innerHTML = "";
            textAreaReview.classList.remove("error");
            textAreaReview.classList.add("no-error");
            textAreaErrorForm = false;
        }
    });
    let starReview = document.querySelectorAll(
        ".product-review .view .rev .add-review .add-rate .rate-chose .star i"
    );
    let starParent = document.querySelector(
        ".product-review .view .rev .add-review .add-rate .rate-chose .star "
    ).children;
    let starSelect = document.querySelectorAll(
        ".product-review .view .rev .add-review .add-rate .rate-chose select option"
    );
    starReview.forEach((star) => {
        star.addEventListener("click", (e) => {
            starReview.forEach((str) => {
                str.classList.remove("fas");
            });
            for (var i = 0; i <= e.target.dataset.rate - 1; i++) {
                starParent[i].classList.add("fas");
            }
            starSelect.forEach((sele) => {
                sele.removeAttribute("selected");
                sele.removeAttribute("value");
            });
            starSelect[e.target.dataset.rate].setAttribute("selected", "selected");
            starSelect[e.target.dataset.rate].setAttribute(
                "value",
                e.target.dataset.rate
            );
            starRateErrorForm = false;
        });
    });
    reviewForm.forEach((inputform) => {
        inputform.addEventListener("blur", () => {
            if (inputform.getAttribute("name") === "name-rate") {
                var nameRegex = /^[a-zA-Z\-\ ]+$/;
                var validRegName = inputform.value.match(nameRegex);
                showMessage(inputform, validRegName);
                errorArray === true ? null : (nameErrorForm = false);
            } else if (inputform.getAttribute("name") === "phone-rate") {
                var phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                var validRegPhone = inputform.value.match(phoneReg);
                showMessage(inputform, validRegPhone);
                errorArray === true ? null : (phoneErrorForm = false);
            } else if (inputform.getAttribute("name") === "email-rate") {
                var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                var validRegEmail = inputform.value.match(emailPattern);
                showMessage(inputform, validRegEmail);
                errorArray === true ? null : (emailErrorForm = false);
            }
        });
        reviewButton.addEventListener("click", (e) => {
            if (
                nameErrorForm === true ||
                phoneErrorForm === true ||
                emailErrorForm === true ||
                textAreaErrorForm === true ||
                starRateErrorForm === true
            ) {
                e.preventDefault();
            }
        });
    });
}