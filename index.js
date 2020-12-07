//DOM selectors
const display = document.querySelector("#display")
const clearBtn = document.querySelector("#clear")
const divideBtn = document.querySelector("#divide")
const sevenBtn = document.querySelector("#seven")
const eightBtn = document.querySelector("#eight")
const nineBtn = document.querySelector("#nine")
const multiplyBtn = document.querySelector("#multiply")
const fourBtn = document.querySelector("#four")
const fiveBtn = document.querySelector("#five")
const sixBtn = document.querySelector("#six")
const minusBtn = document.querySelector("#minus")
const oneBtn = document.querySelector("#one")
const twoBtn = document.querySelector("#two")
const threeBtn = document.querySelector("#three")
const plusBtn = document.querySelector("#plus")
const zeroBtn = document.querySelector("#zero")
const decimalBtn = document.querySelector("#decimal")
const equalsBtn = document.querySelector("#equals")
const backgrnd = document.querySelector("#body")

//Interface
let firstValue = "";
let secondValue = "";
let operator = "";
let solution = "";
let clear = true;
let clear2 = true;
let calculating = false;
let decimalUse = false;
let blockSolution = true;


function updateDisplay(_text) {
    if (calculating === true && clear2 === false) {
        updateDisplay2(_text);
    }
    if (clear === false && calculating === false && clear2 === true) {
        firstValue += _text
        display.textContent = `${firstValue}`;
    }
    if (clear === true && calculating === false && clear2 === true) {
        firstValue = _text;
        clear = false;
        display.textContent = `${firstValue}`;
    }
}


function updateDisplay2(_text) {
    if (clear === false && calculating === true && clear2 === false) {
        secondValue += _text
        display.textContent = `${secondValue}`;
        blockSolution = false;
    }
    if (clear === true && calculating === true && clear2 === false) {
        secondValue = _text;
        display.textContent = `${secondValue}`;
        clear = false;
        blockSolution = false;
    }
}


function updateDispOp(_text) {
    if (_text == "÷") {
        operator = "/"
        display.textContent = "÷"
    }
    else {
        operator = _text;
        display.textContent = `${operator}`;
    }
    calculating = true;
    clear = true;
    clear2 = false;
    decimalUse = false;
}

function findSolution() {
    if (blockSolution == true) { return }
    solution = operate(firstValue, operator, secondValue);
    firstValue = solution;
    display.textContent = `${solution}`;
    clear2 = false;
    calculating = true;
    blockSolution = true;
}


clearBtn.addEventListener('click', function () {
    firstValue = "0";
    secondValue = "0";
    operator = ""
    clear = true;
    clear2 = true;
    calculating = false;
    display.textContent = "0"
    decimalUse = false;
    blockSolution = true;
}, false)


//Event listeners
divideBtn.addEventListener('click', function () {
    updateDispOp("÷")
}, false);

sevenBtn.addEventListener('click', function () {
    updateDisplay("7")
}, false);

eightBtn.addEventListener('click', function () {
    updateDisplay("8")
}, false);

nineBtn.addEventListener('click', function () {
    updateDisplay("9")
}, false);

multiplyBtn.addEventListener('click', function () {
    updateDispOp("*")
}, false);

fourBtn.addEventListener('click', function () {
    updateDisplay("4")
}, false);

fiveBtn.addEventListener('click', function () {
    updateDisplay("5")
}, false);

sixBtn.addEventListener('click', function () {
    updateDisplay("6")
}, false);

minusBtn.addEventListener('click', function () {
    updateDispOp("-")
}, false);

oneBtn.addEventListener('click', function () {
    updateDisplay("1")
}, false);

twoBtn.addEventListener('click', function () {
    updateDisplay("2")
}, false);

threeBtn.addEventListener('click', function () {
    updateDisplay("3")
}, false);

plusBtn.addEventListener('click', function () {
    updateDispOp("+")
}, false);

zeroBtn.addEventListener('click', function () {
    updateDisplay("0")
}, false);

decimalBtn.addEventListener('click', function () {
    if (decimalUse == false) {
        updateDisplay(".");
        decimalUse = true
    }
    else;
}, false);

equalsBtn.addEventListener('click', function () {
    findSolution();
}, false);

//Operations
function add(_x, _y) {
    return (+_x) + (+_y);
  }

function subtract(_x, _y) {
    return (+_x) - (+_y)
}

function multiply(_x, _y) {
    return (+_x) * (+_y)
}

function divide(_x, _y) {
    if (_y == 0) {
        return "NAUGHTY"
    }
    return (+_x) / (+_y);
}

function operate(_x, _z, _y) {
    if (_z == "+") return parseFloat(add(_x, _y).toFixed(3));
    if (_z == "-") return parseFloat(subtract(_x, _y).toFixed(3));
    if (_z == "*") return parseFloat(multiply(_x, _y).toFixed(3));
    if (_z == "/") return parseFloat(divide(_x, _y).toFixed(3));
}




