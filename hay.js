const currDisplay = document.querySelector(".curr-display");
const prevDisplay = document.querySelector(".prev-display");
const numbers = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operation");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");
let operation = null;

function appendNumbers(number) {
  if (number === "." && currDisplay.innerText.includes(".")) return;
  currDisplay.innerText += number;
}

function chooseOperation(operand) {
  if (currDisplay.innerText === "") return;
  if (prevDisplay.innerText !== "") {
    compute();
  }
  operation = operand;
  prevDisplay.innerText = currDisplay.innerText;
  currDisplay.innerText = "";
  prevDisplay.innerText += operand;
}

function clearDisplay() {
  currDisplay.innerText = "";
  prevDisplay.innerText = "";
  operation = null;
}

function compute() {
  const previousValue = parseFloat(prevDisplay.innerText);
  const currentValue = parseFloat(currDisplay.innerText);
  if (isNaN(previousValue) || isNaN(currentValue) || !operation) return;

  let result;
  switch (operation) {
    case "+":
      result = previousValue + currentValue;
      break;
    case "-":
      result = previousValue - currentValue;
      break;
    case "*":
      result = previousValue * currentValue;
      break;
    case "/":
      result = previousValue / currentValue;
      break;
    default:
      return;
  }
  currDisplay.innerText = result;
  prevDisplay.innerText = "";
  operation = null;
}

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    appendNumbers(number.innerText);
  });
});

operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    chooseOperation(operand.innerText);
  });
});

clearBtn.addEventListener("click", () => {
  clearDisplay();
});

equalBtn.addEventListener("click", () => {
  compute();
});

delBtn.addEventListener("click", () => {
  currDisplay.innerText = currDisplay.innerText.slice(0, -1);
});
