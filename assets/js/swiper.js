


const reviewsSwiper = new Swiper(".reviews-swiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  loop: true,

  pagination: {
    el: ".reviews-pagination",
    clickable: true,
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



function initSplide() {
  let direction = window.innerWidth < 1062 ? "ltr" : "ttb";

  const splide = new Splide(".splide", {
    type: "loop",
    direction: direction,
    height: direction === "ttb" ? "325px" : "",
    focus: "center",
    wheel: false,
    speed: 1200,
    perPage: 1,
    gap: "20px",
    pagination: true,
 start:1,

     breakpoints: {
    1061: {
      direction: "horizontal",
      height: "",
      perPage: 2,
      start:1,
      
    },
    927: {
      direction: "horizontal",
      perPage: 2,
    },
    750: {
      direction: "horizontal",
      perPage:1,
      gap: "30px",
    },
    320: {
      direction: "horizontal",
      perPage: 1,
    },
    0: {
      direction: "horizontal",
      perPage: 1.2,
    },
  },


  });

  splide.mount();

  let interval = setInterval(() => {
    if (direction === "ttb") {
      splide.go(">"); 
    } 
  }, 3500);


}

initSplide();

