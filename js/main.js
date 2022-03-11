$(document).ready(function () {
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".header-bottom")
      .classList.toggle("header-bottom--visible");
    document.querySelector(".body").classList.toggle("body--hidden");
  });

  $("[data-toggle=modal]").click(function () {
    $(".popup-fade").fadeIn();
    return false;
  });

  $(".popup-close").click(function () {
    $(this).parents(".popup-fade").fadeOut();
    return false;
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $(".popup-fade").fadeOut();
    }
  });

  $(".popup-fade").click(function (e) {
    if ($(e.target).closest(".popup").length == 0) {
      $(this).fadeOut();
    }
  });
  $(".popup__form").validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minLength: "Name must be at least 2 letters",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "Please specify your phone number",
        number: "Please specify your phone number",
      },
    },
  });
  $(function () {
    $(".goods-card__svg").click(function () {
      $(this).siblings("goods-card__svg").toggle();
      $(this).toggleClass("goods-card__svg--red");
    });
  });
});

let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

const swiper = new Swiper(".categories-swiper", {
  //loop: false,

  navigation: {
    nextEl: ".categories-container__button--prev",
    prevEl: ".categories-container__button--next",
    disabledClass: "disabled-swiper__button",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    992: {
      slidesPerGroup: 4,
      slidesPerView: 2,
    },

    1200: {
      slidesPerGroup: 3,
      slidesPerView: 3,
    },
  },
});

const categorisSlider = new Swiper(".unreleased-swiper", {
  //loop: false,

  navigation: {
    nextEl: ".unreleased-swiper__button--prev",
    prevEl: ".unreleased-swiper__button--next",
    disabledClass: "unreleased-swiper__button--op",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  breakpoints: {
    576: {
      spaceBetween: 0,
      slidesPerGroup: 1,
      slidesPerView: 1,
    },

    767: {
      spaceBetween: 10,
      slidesPerGroup: 2,
      slidesPerView: 2,
    },

    992: {
      spaceBetween: 10,
      slidesPerGroup: 3,
      slidesPerView: 3,
    },

    1200: {
      spaceBetween: 30,
      slidesPerGroup: 5,
      slidesPerView: 5,
    },
  },
});