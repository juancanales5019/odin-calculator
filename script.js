let operation = document.querySelector(".operation");
let result = document.querySelector(".result");
//obtener primer numero y desplegarlo en operation
let firstNum = 0;
//code to get numbers and display it on the operation div
let operand = document.querySelectorAll(".operand");
operand.forEach(element => {
    element.addEventListener("click",()=>{
        operation.textContent += element.value;
    });
});
//obtener operador y desplegarlo en operation
//obtener el segundo numero y desplegarlo en operation
let secondNum = 0;
//evaluar la operacion para determinar de que tipo es...
//realizar la operacion y desplegar el resultado en result
//si se quiere hacer una operacion ademas de la primera
//conservar result como valor del primer numero y desplegarlo en operation
//obtener operador y desplegarlo en operation
//obtener el segundo numero y desplegarlo en operation
//evaluar la operacion para determinar de que tipo es...
//realizar la operacion y desplegar el resultado en result