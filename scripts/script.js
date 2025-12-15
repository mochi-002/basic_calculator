const display_screen = document.getElementById("display");
const clearButton = document.getElementById("clearBtn");
const equalsButton = document.getElementById("equalsBtn");
const buttons = document.querySelectorAll(".number, .operator");
const calculator = document.querySelector(".calculator");
const minimizeBtn = document.getElementById("minimizeBtn");
const maximizeBtn = document.getElementById("maximizeBtn");
const closeBtn = document.getElementById("closeBtn");
let current_value = "0";

function appendToDisplay(value) {
  if (current_value === "0") {
    current_value = value;
  } else {
    current_value += value;
  }
  display_screen.textContent = current_value;
}

function clearDisplay() {
  current_value = "0";
  display_screen.textContent = current_value;
}

function calculate() {
  try {
    current_value = eval(current_value).toString();
    display_screen.textContent = current_value;
  } catch (error) {
    current_value = "Error";
    display_screen.textContent = current_value;
  }
}

clearButton.addEventListener("click", clearDisplay);

equalsButton.addEventListener("click", calculate);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    appendToDisplay(value);
  });
});

minimizeBtn.addEventListener("click", () => {
  calculator.classList.toggle("minimized");
  console.log("Calculator minimized/restored.");
  if (calculator.classList.contains("maximized")) {
    calculator.classList.toggle("maximized");
  }
});

maximizeBtn.addEventListener("click", () => {
  calculator.classList.toggle("maximized");
  console.log("Calculator maximized/restored.");
  if (calculator.classList.contains("minimized")) {
    calculator.classList.toggle("minimized");
  }
});

closeBtn.addEventListener("click", () => {
  calculator.style.display = "none";
  console.log("Calculator closed (hidden).");
  if (calculator.classList.contains("maximized")) {
    calculator.classList.toggle("maximized");
  }
  if (calculator.classList.contains("minimized")) {
    calculator.classList.toggle("minimized");
  }
});
