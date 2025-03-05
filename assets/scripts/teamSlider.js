
var swiper = new Swiper(".card_slider", {
  // slidesPerView: "auto", 
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay:{
    delay:2000,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});
