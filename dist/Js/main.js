const Suites={Spade:1,Heart:2,Diamond:3,Club:4};let mainColors=localStorage.getItem("color_option"),backgroundLocalItem=localStorage.getItem("background_option"),setBackground=localStorage.getItem("backgroundChange"),setFont=localStorage.getItem("fontFamily"),setAboutImg=localStorage.getItem("aboutImg"),bulletLocal=localStorage.getItem("bullets-option");null!==mainColors&&(document.documentElement.style.setProperty("--main--color",mainColors),document.querySelectorAll(".colors-list li").forEach(e=>{e.classList.remove("active"),e.dataset.color===mainColors&&e.classList.add("active")})),null!==setFont&&(document.getElementsByTagName("body")[0].style.fontFamily=setFont,document.querySelectorAll(".font-list li").forEach(e=>{e.classList.remove("active"),e.dataset.font===setFont&&e.classList.add("active")}));var handleActive=e=>{e.target.parentElement.querySelectorAll(".active").forEach(e=>{e.classList.remove("active")}),e.target.classList.add("active")};if("Home"===document.title.split("-")[1]){null!==setAboutImg&&document.querySelector(".about-us .image-box img").setAttribute("src","./imgs/about/"+setAboutImg+".png");let e,t=!0;null!==backgroundLocalItem&&("true"===backgroundLocalItem?(t=!0,$(".span-image").fadeOut(500)):(t=!1,$(".span-image").fadeIn(500),$(".span-image span img").on("click",(function(){$(".landing-page").css("background-image","url("+$(this).attr("src")+")"),localStorage.setItem("backgroundChange","url("+$(this).attr("src")+")"),$(this).parent().siblings().find(".active").removeClass("active"),$(this).addClass("active")}))),document.querySelectorAll(".random-background span").forEach(e=>{e.classList.remove("active")}),"true"===backgroundLocalItem?document.querySelector(".random-background .yes").classList.add("active"):document.querySelector(".random-background .no").classList.add("active")),null!==setBackground&&($(".landing-page").css("background-image",setBackground),$(".span-image span img").parent().siblings().find(".active").removeClass("active"),document.querySelectorAll(".span-image span img").forEach(e=>{"url("+e.getAttribute("src")+")"===setBackground&&e.classList.add("active")})),document.querySelector(".toggle-settings .fa-cog").onclick=function(){this.classList.toggle("fa-spin"),document.querySelector(".settings-box").classList.toggle("open")},document.querySelectorAll(".colors-list li").forEach(e=>{e.addEventListener("click",e=>{document.documentElement.style.setProperty("--main--color",e.target.dataset.color),document.querySelector(".about-us .image-box img").setAttribute("src","./imgs/about/"+e.target.dataset.color.split("#")[1]+".png"),localStorage.setItem("aboutImg",e.target.dataset.color.split("#")[1]),localStorage.setItem("color_option",e.target.dataset.color),handleActive(e)})}),document.querySelectorAll(".random-background span").forEach(o=>{o.addEventListener("click",o=>{handleActive(o),"yes"===o.target.dataset.background?(t=!0,randomimg(),localStorage.setItem("background_option",!0),$(".span-image").fadeOut(500)):(t=!1,clearInterval(e),localStorage.setItem("background_option",!1),$(".span-image").fadeIn(500),$(".span-image span img").on("click",(function(){$(".landing-page").css("background-image","url("+$(this).attr("src")+")"),localStorage.setItem("backgroundChange","url("+$(this).attr("src")+")"),$(this).parent().siblings().find(".active").removeClass("active"),$(this).addClass("active")})))})}),document.querySelectorAll(".font-list li").forEach(e=>{e.addEventListener("click",e=>{document.getElementsByTagName("body")[0].style.fontFamily=e.target.dataset.font,localStorage.setItem("fontFamily",e.target.dataset.font),handleActive(e)})});let o=document.querySelector(".landing-page"),a=Array();for(let e=0;e<6;e++)a[e]=e+1+".jpg";let n=5e3;var randomimg=()=>{!0===t&&(e=setInterval(()=>{var e=Math.floor(Math.random()*a.length);o.style.backgroundImage='url("imgs/landing/'+a[e]+'")'},n))};randomimg(),document.querySelector(".landing-page .somze-down i").addEventListener("click",(function(){document.querySelector(".clothes-part").scrollIntoView({behavior:"smooth"})}));let l=document.querySelector(".button-top span");l.addEventListener("click",(function(){document.querySelector(".landing-page").scrollIntoView({behavior:"smooth"})}));let r=document.querySelector(".subscripe .check input"),s=document.querySelector(".subscripe input[type='submit']"),c=document.querySelector(".subscripe form input[type='email']"),i=document.querySelector(".subscripe form .message"),u=["gmail.com","hotmail.com","yahoo.com"];r.addEventListener("click",(function(){1==r.checked?s.removeAttribute("disabled"):s.setAttribute("disabled","disabled")})),s.addEventListener("click",(function(e){""===c.value?(e.preventDefault(),i.innerHTML="Sorry You Should Type Your Mail",i.classList.add("error-messge")):u.includes(c.value.split("@")[1].toLowerCase)||(e.preventDefault(),i.innerHTML="Email must Be [gmail , hotmail , yahoo] .com",i.classList.add("error-messge"))}));let d=document.querySelector(".about-us");const m=document.querySelectorAll(".about-us .counter-about .count"),g=1;window.onscroll=function(){let e=d.offsetTop,t=d.offsetHeight,o=this.innerHeight;this.pageYOffset>e+t-o&&m.forEach(e=>{const t=()=>{const o=+e.dataset.target,a=+e.innerText,n=g;a<o?(e.innerText=Math.ceil(a+n),setTimeout(t,1)):a.innerText=o};t()}),this.pageYOffset>=document.querySelector(".landing-page").offsetHeight?(l.parentElement.style.display="block",document.querySelector(".landing-page .header-area").classList.add("header-fixed")):(l.parentElement.style.display="none",document.querySelector(".landing-page .header-area").classList.remove("header-fixed"))},document.querySelectorAll(".gallery .images-box img").forEach(e=>{e.addEventListener("click",t=>{let o=document.createElement("div");o.className="popup-overlay",document.body.appendChild(o);let a=document.createElement("div");a.className="popup-box";let n=document.createElement("img");n.src=e.src,a.appendChild(n),document.body.appendChild(a);let l=document.createElement("span"),r=document.createTextNode("X");l.appendChild(r),l.className="close-button",a.appendChild(l)})}),document.addEventListener("click",e=>{"close-button"==e.target.className&&(e.target.parentNode.remove(),document.querySelector(".popup-overlay").remove())}),document.querySelectorAll(".nav-bullets .bullet").forEach(e=>{e.addEventListener("click",e=>{document.querySelector(e.target.dataset.section).scrollIntoView({behavior:"smooth"})})});let p=document.querySelectorAll(".bullets-option span"),b=document.querySelector(".nav-bullets");null!==bulletLocal&&p.forEach(e=>{e.classList.remove("active"),"block"===bulletLocal?(b.style.display="block",document.querySelector(".bullets-option .yes").classList.add("active")):(b.style.display="none",document.querySelector(".bullets-option .no").classList.add("active"))}),p.forEach(e=>{e.addEventListener("click",t=>{handleActive(t),"show"===e.dataset.display?(b.style.display="block",localStorage.setItem("bullets-option","block")):(b.style.display="none",localStorage.setItem("bullets-option","none"))})}),document.querySelector(".settings-box .reset-options").onclick=function(){localStorage.removeItem("color_option"),localStorage.removeItem("background_option"),localStorage.removeItem("backgroundChange"),localStorage.removeItem("fontFamily"),localStorage.removeItem("aboutImg"),localStorage.removeItem("bullets-option"),window.location.reload()};var swiper=new Swiper(".swiper-container",{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}if("Home"!==document.title.split("-")[1]&&(document.querySelector(".header-area").classList.add("header-fixed"),document.querySelector(".intro-page").style.marginTop=document.querySelector(".header-area").offsetHeight+"px"),"About"==document.title.split("-")[1]){null!==setAboutImg&&document.querySelector(".about-us .image-box img").setAttribute("src","./imgs/about/"+setAboutImg+".png");let e=document.querySelector(".about-us");const t=document.querySelectorAll(".about-us .counter-about .count"),o=1;window.onscroll=function(){let a=e.offsetTop,n=e.offsetHeight,l=this.innerHeight;this.pageYOffset>a+n-l&&t.forEach(e=>{const t=()=>{const a=+e.dataset.target,n=+e.innerText,l=o;n<a?(e.innerText=Math.ceil(n+l),setTimeout(t,1)):n.innerText=a};t()})},swiper=new Swiper(".swiper-container",{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}if("Contact US"==document.title.split("-")[1]){let e=document.querySelector(".subscripe .check input"),t=document.querySelector(".subscripe input[type='submit']"),o=document.querySelector(".subscripe form input[type='email']"),a=document.querySelector(".subscripe form .message"),n=["gmail.com","hotmail.com","yahoo.com"];e.addEventListener("click",(function(){1==e.checked?t.removeAttribute("disabled"):t.setAttribute("disabled","disabled")})),t.addEventListener("click",(function(e){""===o.value?(e.preventDefault(),a.innerHTML="Sorry You Should Type Your Mail",a.classList.add("error-messge")):n.includes(o.value.split("@")[1].toLowerCase)||(e.preventDefault(),a.innerHTML="Email must Be [gmail , hotmail , yahoo] .com",a.classList.add("error-messge"))}));let l=document.querySelectorAll(".contact form .left .form-input input"),r=!0,s=!0,c=!0,i=!0,u=!0,d=!0,m=document.querySelector(".contact .alert-masssge span"),g=document.querySelector(".contact form .right textarea"),p=document.querySelector(".contact form .right input[type='submit']");var showMessage=(e,t=!0)=>{""===e.value?(e.classList.add("error"),m.innerHTML="Sorry But "+e.getAttribute("name")+" Cant be Empty",e.nextElementSibling.nextElementSibling.innerHTML="*",d=!0):null==t?(e.classList.add("error"),m.innerHTML="Sorry But "+e.getAttribute("name")+" Not True Please Type Vaild "+e.getAttribute("name"),e.nextElementSibling.nextElementSibling.innerHTML="*",d=!0):(m.innerHTML="",e.classList.remove("error"),e.classList.add("no-error"),e.nextElementSibling.nextElementSibling.innerHTML='<i class="fas fa-check"></i>',d=!1)};g.addEventListener("blur",()=>{""==g.value?(m.innerHTML="Sorry but Type Your Message To Contact",g.classList.add("error"),g.classList.remove("no-error")):(m.innerHTML="",g.classList.remove("error"),g.classList.add("no-error"),u=!1)}),l.forEach(e=>{e.addEventListener("blur",()=>{if("username"===e.getAttribute("name")){var t=e.value.match(/^[a-zA-Z\-\ ]+$/);showMessage(e,t),!0!==d&&(r=!1)}else if("phone"===e.getAttribute("name")){var o=e.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);showMessage(e,o),!0!==d&&(s=!1)}else if("email"===e.getAttribute("name")){var a=e.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);showMessage(e,a)}else"subject"===e.getAttribute("name")&&(showMessage(e),!0!==d&&(i=!1))}),p.addEventListener("click",e=>{!0!==r&&!0!==s&&!0!==c&&!0!==i&&!0!==u||e.preventDefault()})})}else if("Product Store"==document.title.split("-")[1]){var slides=3;window.innerWidth<=992&&(slides=1),swiper=new Swiper(".swiper-container",{slidesPerView:slides,spaceBetween:30,slidesPerGroup:1,loop:!0,loopFillGroupWithBlank:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}else"Product Deatails"==document.title.split("-")[1]&&(document.querySelectorAll(".product-deatils .product .image-slider .img-slider-chose img").forEach(e=>{e.onclick=function(e){handleActive(e),document.getElementById(e.target.dataset.image).parentNode.childNodes.forEach(e=>{e.classList.remove("active")}),document.getElementById(e.target.dataset.image).classList.add("active")}}),document.querySelectorAll(".product-deatils .product .imgae-info .product-color span").forEach(e=>{e.style.backgroundColor=e.dataset.color}));let linksMenu=document.querySelectorAll(".header-area .links-container .links a");linksMenu.forEach(e=>{e.dataset.page===document.title.split("-")[1]&&e.classList.add("active")});let openButton=document.querySelector(".header-area .links-container .toggle-links i"),toggleMenu=document.querySelector(".header-area .links-container .links"),closeMenu=document.querySelector(".header-area .links-container .links .links-close i");openButton.onclick=function(e){toggleMenu.classList.add("open"),e.stopPropagation()},closeMenu.onclick=function(){toggleMenu.classList.remove("open")},document.addEventListener("click",e=>{e.target!==closeMenu&&e.target!==toggleMenu&&toggleMenu.classList.contains("open")&&toggleMenu.classList.remove("open")}),toggleMenu.onclick=function(e){e.stopPropagation()};let instaImgae=document.querySelectorAll(".footer-page .socailmedia .insta-imge a");instaImgae.forEach(e=>{e.style.backgroundImage="url("+e.dataset.background+")"}),$(window).on("load",(function(){$(".loader").fadeOut("slow")})),window.fbAsyncInit=function(){FB.init({xfbml:!0,version:"v7.0"})},function(e,t,o){var a,n=e.getElementsByTagName(t)[0];e.getElementById(o)||((a=e.createElement(t)).id=o,a.src="https://connect.facebook.net/ar_AR/sdk/xfbml.customerchat.js",n.parentNode.insertBefore(a,n))}(document,"script","facebook-jssdk");