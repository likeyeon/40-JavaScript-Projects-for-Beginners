const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const modal = document.querySelector(".modal-wrapper");

openBtn.addEventListener("click", () => {
  modal.classList.add("active");

  const swiper = new Swiper(".swiper", {
    direction: "vertical",
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
    speed: 500,
    observer: true,
    observeParents: true,
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});
