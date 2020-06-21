/*jshint esversion: 6 */
if (document.title.split("-")[1] == "Contact US") {
    //star type writer code func
    typeWrriter("contact-heading", 75);
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

    // code for contact form
    let contactForm = document.querySelectorAll(
        ".contact form .left .form-input input"
    );
    let nameErrorForm = true,
        phoneErrorForm = true,
        emailErrorForm = true,
        subjectErrorForm = true,
        textAreaErrorForm = true;

    let errorArray = true;
    let alertMessage = document.querySelector(".contact .alert-masssge span");
    let textAreaContact = document.querySelector(".contact form .right textarea");
    let contactButton = document.querySelector(
        ".contact form .right input[type='submit']"
    );

    var showMessage = (element, reg = true) => {
        if (element.value === "") {
            element.classList.add("error");
            alertMessage.innerHTML =
                "Sorry But " + element.getAttribute("name") + " Cant be Empty";
            element.nextElementSibling.nextElementSibling.innerHTML = "*";
            errorArray = true;
        } else if (reg == null) {
            element.classList.add("error");
            alertMessage.innerHTML =
                "Sorry But " +
                element.getAttribute("name") +
                " Not True Please Type Vaild " +
                element.getAttribute("name");
            element.nextElementSibling.nextElementSibling.innerHTML = "*";
            errorArray = true;
        } else {
            alertMessage.innerHTML = "";
            element.classList.remove("error");
            element.classList.add("no-error");
            element.nextElementSibling.nextElementSibling.innerHTML =
                '<i class="fas fa-check"></i>';
            errorArray = false;
        }
    };
    textAreaContact.addEventListener("blur", () => {
        if (textAreaContact.value == "") {
            alertMessage.innerHTML = "Sorry but Type Your Message To Contact";
            textAreaContact.classList.add("error");
            textAreaContact.classList.remove("no-error");
        } else {
            alertMessage.innerHTML = "";
            textAreaContact.classList.remove("error");
            textAreaContact.classList.add("no-error");
            textAreaErrorForm = false;
        }
    });
    contactForm.forEach((inputform) => {
        inputform.addEventListener("blur", () => {
            if (inputform.getAttribute("name") === "username") {
                var nameRegex = /^[a-zA-Z\-\ ]+$/;
                var validRegName = inputform.value.match(nameRegex);
                showMessage(inputform, validRegName);
                errorArray === true ? null : (nameErrorForm = false);
            } else if (inputform.getAttribute("name") === "phone") {
                var phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                var validRegPhone = inputform.value.match(phoneReg);
                showMessage(inputform, validRegPhone);
                errorArray === true ? null : (phoneErrorForm = false);
            } else if (inputform.getAttribute("name") === "email") {
                var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                var validRegEmail = inputform.value.match(emailPattern);
                showMessage(inputform, validRegEmail);
                errorArray === true ? null : emailErrorForm === false;
            } else if (inputform.getAttribute("name") === "subject") {
                showMessage(inputform);
                errorArray === true ? null : (subjectErrorForm = false);
            }
        });
        contactButton.addEventListener("click", (e) => {
            if (
                nameErrorForm === true ||
                phoneErrorForm === true ||
                emailErrorForm === true ||
                subjectErrorForm === true ||
                textAreaErrorForm === true
            ) {
                e.preventDefault();
            }
        });
    });
}