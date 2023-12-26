const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const currentColor = document.querySelector(".color");
const button = document.getElementById("btn");

const clickButton = () => {
  currentColor.innerText = "#";
  for (let i = 0; i < 6; i++) {
    currentColor.innerText += hex[Math.floor(Math.random() * hex.length)];
  }
  document.body.style.backgroundColor = currentColor.innerText;
};

button.addEventListener("click", clickButton);
