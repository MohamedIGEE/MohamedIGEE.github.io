let burger = document.querySelector(".burger");

let mobilenav = document.querySelector(".for-animation");

burger.addEventListener('click', function (e) {
    mobilenav.classList.toggle("slide");
    burger.classList.toggle("toggle");
});