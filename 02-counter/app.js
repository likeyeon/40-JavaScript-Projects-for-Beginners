// set inital value to zero
let currentNum = 0;
// select value and buttons
const numText = document.querySelector(".number");
const btns = document.querySelectorAll("button");

const changeNum = (e) => {
  const operation = e.target.textContent;
  switch (operation) {
    case "DECREASE":
      currentNum--;
      break;
    case "INCREASE":
      currentNum++;
      break;
    default:
      currentNum = 0;
  }
  numText.textContent = currentNum;

  if (currentNum > 0) numText.style.color = "green";
  else if (currentNum < 0) numText.style.color = "red";
  else numText.style.color = "#222222";
};

btns.forEach((btn) => btn.addEventListener("click", changeNum));
