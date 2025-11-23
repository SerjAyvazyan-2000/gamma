const heroSwiper = new Swiper(".hero-swiper", {
  spaceBetween: 30,
  slidesPerView: 2.1,
  direction: "vertical",
  speed: 700,
  loop: true,

    pagination: {
    el: ".hero-pagination",
    clickable:true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    320: {
      slidesPerView: 1,
      direction: "horizontal",
    },

    750: {
      slidesPerView: 1.3,
      direction: "horizontal",
    },

    927: {
      slidesPerView: 1.6,
      direction: "horizontal",
    },
    1062: {
      slidesPerView: 2.1,
    },
  },
});

setTimeout(() => {
  if (window.innerWidth > 1062) {
    const third = heroSwiper.width / 3;
    heroSwiper.translateTo(-third, 400);
  }
}, 100);

const reviewsSwiper = new Swiper(".reviews-swiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  loop: true,

  pagination: {
    el: ".reviews-pagination",
     clickable:true,
  },

  navigation: {
    nextEl: ".reviews-button-next",
    prevEl: ".reviews-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

const buttons = document.querySelectorAll(".reviews-button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("active");

    setTimeout(() => {
      btn.classList.remove("active");
    }, 150);
  });
});
