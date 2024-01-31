var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  slidesPerGroup: 1,
  loop: true,

  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    620: {
      slidesPerView: 2
    },
    868: {
      slidesPerView: 3
    },
    1124: {
      slidesPerView: 4
    },
  },
});

