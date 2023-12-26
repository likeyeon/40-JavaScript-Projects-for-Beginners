const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.querySelector("#btn");
const colorText = document.querySelector(".color");

const clickButton = () => {
  const currentColor = colors[Math.floor(Math.random() * colors.length)];
  colorText.innerText = currentColor;
  document.body.style.background = currentColor;
};

button.addEventListener("click", clickButton);
