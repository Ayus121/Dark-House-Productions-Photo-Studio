// Side Navigation Menu
var menu = document.getElementById("menu");
var sidenzv = document.getElementById("sidenav");
sidenav.style.width = "0px";

menu.onclick =

    function() {
        if (sidenav.style.width == "0px") {
            sidenav.style.width = "250px";
        } else {
            sidenav.style.width = "0px"
        }
    }

//Services
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
//Portfolio