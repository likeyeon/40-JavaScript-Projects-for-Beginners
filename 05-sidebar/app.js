const menuBtn = document.querySelector(".menuBar");
const closeBtn = document.querySelector(".close");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
});
