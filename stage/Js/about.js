/*jshint esversion: 6 */
if (document.title.split("-")[1] == "About") {
    if (setAboutImg !== null) {
        document
            .querySelector(".about-us .image-box img")
            .setAttribute("src", "./imgs/about/" + setAboutImg + ".png");
    }
    //start our feature
    let ourSkills = document.querySelector(".about-us");
    const counterItem = document.querySelectorAll(
        ".about-us .counter-about .count"
    );
    const speed = 1;
    window.onscroll = function() {
        // get offset top by skills
        let skillsOffsetTop = ourSkills.offsetTop;
        //skills outer height
        let skillsOuterHeight = ourSkills.offsetHeight;
        //window height
        let windowHeight = this.innerHeight;
        // window scroll top
        let windowScrollTop = this.pageYOffset;

        if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
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