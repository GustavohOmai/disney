window.onload = function() {

window.onscroll = function() {
        scroll();
    }

    function scroll() {
        if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            document.getElementById("header").style.background ="rgb(22, 24, 37)";
            document.getElementById("header").style.background = "linear-gradient(rgba(22, 24, 37, 1) 0%, rgba(0, 0, 0, 1) 100%)";
        }
        else {
            document.getElementById("header").style.background= "transparent";
        }
    }




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
      autplaySpeed: 10000,
      dots: true,
      dotsClass: 'slick-dots',
      infinite: true,
      zIndex: 0,
      arrow: true,
      
      });
    

    
        $('.foryoutoo').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: false,
        });

    
}



    



