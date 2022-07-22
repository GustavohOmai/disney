window.onload = function() {

const sandwich = document.querySelector(".sandwich");
const navMenu = document.querySelector(".nav-menu");

sandwich.addEventListener("click", () => {
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("active");
}))

document.querySelectorAll(".nav-link2").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("active");
}))


$('.slider').slick({
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 1,
    autoplay: true,
    autplaySpeed: 3000,
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    arrow: true,
    });

}

