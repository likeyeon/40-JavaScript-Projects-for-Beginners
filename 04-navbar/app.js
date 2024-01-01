const menuBarBtn = document.querySelector(".menuBar");
const menu = document.querySelector(".menu-mobile");

menuBarBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
