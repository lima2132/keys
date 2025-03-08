"use strict";
const banner = document.querySelectorAll(".banner");
const burgerBtn = document.getElementById("burger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});

const showBannerFromTime = () => {
  banner.forEach((banner) => {
    banner.style.display = "flex";
  });
};

// setTimeout(showBannerFromTime, 5000);
// showBannerFromTime();
