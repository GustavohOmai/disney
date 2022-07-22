window.onload=function(){

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

}