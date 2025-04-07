// ハンバーガー表示
const menubtn = document.querySelector(".header-hamburger");
const mask = document.querySelector(".mask");
const hamburger = document.querySelectorAll(".header-hamburger span");
const nav = document.querySelector(".nav-list");
const body = document.body;

menubtn.addEventListener("click", () => {
  mask.classList.toggle("open-mask");
  menubtn.classList.toggle("open-btn");
  nav.classList.toggle("open-nav");
});

mask.addEventListener("click", () => {
  if (mask.classList.contains("open-mask")) {
    mask.classList.remove("open-mask");
    menubtn.classList.remove("open-btn");
    nav.classList.remove("open-nav");
  }
});
