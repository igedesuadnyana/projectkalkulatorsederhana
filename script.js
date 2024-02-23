let screen = document.getElementById("screen");
let currentInput = "0";

function appendNumber(number) {
  if (currentInput === "0") {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateScreen();
}

function appendOperator(operator) {
  currentInput += " " + operator + " ";
  updateScreen();
}

function appendDot() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateScreen();
  }
}

function clearScreen() {
  currentInput = "0";
  updateScreen();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === "") {
    currentInput = "0";
  }
  updateScreen();
}

function calculateResult() {
  try {
    currentInput = eval(currentInput);
    updateScreen();
  } catch (error) {
    currentInput = "Error";
    updateScreen();
  }
}

function updateScreen() {
  screen.textContent = currentInput;
  screen.style.opacity = "1";
}
