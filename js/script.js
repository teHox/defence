const burgerBtn = document.querySelector(".burger-btn");
const headerMenu = document.querySelector("#menu");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger-btn_active");
 headerMenu.classList.toggle("header__menu_active");
});

const popUpRefLeft = document.querySelector(".popup-slider__prev");
  const popUpRefRight = document.querySelector(".popup-slider__next");

  var popupThumbs = new Swiper(".popup-thumbs", {
    spaceBetween: 10,
    slidesPerView: 3.5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  new Swiper(".popup-slider", {
    slidesPerView: 1,
    navigation: {
      nextEl: popUpRefRight,
      prevEl: popUpRefLeft,
    },
    thumbs: {
      swiper: popupThumbs,
    },
  });