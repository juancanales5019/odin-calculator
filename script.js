//Extraer elementos del dom
let operacion = document.querySelector(".operation");
let result = document.querySelector(".result");
let clear = document.querySelector("#clear");
let solve = document.querySelector("#solve");
let division = document.querySelector("#division");
let multiplication = document.querySelector("#multiplication");
let addition = document.querySelector("#addition");
let subtraction = document.querySelector("#subtraction");
let decimalPoint = document.querySelector("#decimal");
let zero = document.querySelector("#zero");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine")
//Variables
let firstNumber = "";
let secondNumber = "";
let currentOperation = [];

clear.addEventListener("click",()=>{
    firstNumber = "";
    secondNumber = "";
    currentOperation = [];
    operacion.textContent = "";
    result.textContent = "";
});

decimalPoint.addEventListener("click",()=>{
    currentOperation.push(decimalPoint.value);
    operacion.textContent += decimalPoint.value;
});

zero.addEventListener("click",()=>{
    currentOperation.push(zero.value);
    operacion.textContent += zero.value;
});

one.addEventListener("click",()=>{
    currentOperation.push(one.value);
    operacion.textContent += one.value;
});

two.addEventListener("click",()=>{
    currentOperation.push(two.value);
    operacion.textContent += two.value;
});

three.addEventListener("click",()=>{
    currentOperation.push(three.value);
    operacion.textContent += three.value;
});


four.addEventListener("click",()=>{
    currentOperation.push(four.value);
    operacion.textContent += four.value;
});

five.addEventListener("click",()=>{
    currentOperation.push(five.value);
    operacion.textContent += five.value;
});

six.addEventListener("click",()=>{
    currentOperation.push(six.value);
    operacion.textContent += six.value;
});

seven.addEventListener("click",()=>{
    currentOperation.push(seven.value);
    operacion.textContent += seven.value;
});

eight.addEventListener("click",()=>{
    currentOperation.push(eight.value);
    operacion.textContent += eight.value;
});

nine.addEventListener("click",()=>{
    currentOperation.push(nine.value);
    operacion.textContent += nine.value;
});

subtraction.addEventListener("click",()=>{
    operacion.textContent += subtraction.value;
    if (result.textContent == "" ){
        firstNumber = currentOperation.join("");
    } else {
        firstNumber = result.textContent;
    }
    currentOperation.length = 0;
});

addition.addEventListener("click",()=>{
    operacion.textContent += addition.value;
    if (result.textContent == "" ){
        firstNumber = currentOperation.join("");
    } else {
        firstNumber = result.textContent;
    }
    currentOperation.length = 0;
});

multiplication.addEventListener("click",()=>{
    operacion.textContent += multiplication.value;
    if (result.textContent == "" ){
        firstNumber = currentOperation.join("");
    } else {
        firstNumber = result.textContent;
    }
    currentOperation.length = 0;
});

division.addEventListener("click",()=>{
    operacion.textContent += division.value;
    if (result.textContent == "" ){
        firstNumber = currentOperation.join("");
    } else {
        firstNumber = result.textContent;
    }
    currentOperation.length = 0;
});

solve.addEventListener("click",()=>{
    secondNumber = currentOperation.join("");
    if (operacion.textContent.includes("-")){
        result.textContent = parseFloat(firstNumber) - parseFloat(secondNumber);
        operacion.textContent = "";
    } else if (operacion.textContent.includes("+")){
        result.textContent = parseFloat(firstNumber) + parseFloat(secondNumber);
        operacion.textContent = "";
    } else if (operacion.textContent.includes("/")){
        result.textContent = parseFloat(firstNumber) / parseFloat(secondNumber);
        operacion.textContent = "";
    } else if (operacion.textContent.includes("*")){
        result.textContent = parseFloat(firstNumber) * parseFloat(secondNumber);
        operacion.textContent = "";
    }
});