let number1 = 0;
let number2 = 0;
let operator =""
let operatorClicked = false;


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    if (num2 === 0) {
        return "Error";
    }
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);            
    }
}

// Get all number buttons
const numberButtons = document.querySelectorAll('.numberButton');
const calcDisplay=document.querySelector('#calcDisplay');
const operatorButtons = document.querySelectorAll(".operatorButton")
calcDisplay.textContent = "0"

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function () {
        if (calcDisplay.textContent === "0" || operatorClicked === true) {
            calcDisplay.textContent = numberButtons[i].textContent;
            operatorClicked = false;
        } else {
            calcDisplay.textContent += numberButtons[i].textContent;
            operatorClicked = false;
    }})
}

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function () {
        number1 = calcDisplay.textContent
        calcDisplay.textContent = operatorButtons[i].textContent;
        operator = operatorButtons[i].textContent;
        operatorClicked = true;
    })
}


