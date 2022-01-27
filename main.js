let select = function () {
  let selectHeader = document.querySelectorAll(".select__header");

  let selectItem = document.querySelectorAll(".select__item");

  let selectIcon = document.querySelectorAll(".select__icon");

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }

  function selectChoose() {
    let text = this.innerText;
    select = this.closest(".select");
    currentText = select.querySelector(".select__current");
    currentText.innerText = text;
    select.classList.remove("is-active");
  }
};

select();

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tabs__button").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll(".tab-content").forEach(function (tabContent) {
        tabContent.classList.remove("tab-content-active");
      });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("tab-content-active");

      $(".accordion").accordion("refresh");
    });
  });
});

let events = function () {
  let cards = document.getElementById("cards");
  let button = document.getElementById("btn");

  function addClass() {
    cards.classList.toggle("eventss");
    cards.classList.toggle("events__cardss");
    button.classList.toggle("events__cardss");
    button.classList.toggle("events__btn");
  }

  button.addEventListener("click", addClass);
};

events();
