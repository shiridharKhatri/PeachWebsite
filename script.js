const containerTop = document.querySelector(".header");
document.getElementById("arrow").addEventListener("click", () => {
  containerTop.scrollIntoView({ behavior: "smooth" });
});

const crossIcon = (icon) => {
  icon.classList.toggle("fa-times");
};


//Slidder js

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
    slideShadows: true
  },
  pagination: {
    el: ".swiper-pagination"
  }
});