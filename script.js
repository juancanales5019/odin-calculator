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
    firstNumber = currentOperation.join("");
    currentOperation.length = 0;
});

solve.addEventListener("click",()=>{
    secondNumber = currentOperation.join("");
    console.log(firstNumber);
    console.log(secondNumber);
    
});