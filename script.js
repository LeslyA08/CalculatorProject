const calculate= (number1, operator, number2) => {
  let result = ''
  if (operator === '+') {
  result = parseFloat(parseFloat(number1).toFixed(3)) + parseFloat(parseFloat(number2).toFixed(3));
}
else if (operator === '-') {
  result =  parseFloat(number1).toFixed(3) - parseFloat(number2).toFixed(3);
}
else if (operator === '*') {
  result = parseFloat(number1).toFixed(3) * parseFloat(number2).toFixed(3);
}
else if (operator === '/') {
  result = parseFloat(number1).toFixed(3) / parseFloat(number2).toFixed(3);
}
console.log(result)
return result;
} 

const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.calculator_display')
const operatorKeys = calculator.querySelectorAll('.keyOperator')
const numKeys= calculator.querySelectorAll('.numKey')
let equalsButton= calculator.querySelector('.equalsButton')
const ACButton = calculator.querySelector('.AC')

let number1 = ""
let operatorKey = "" 
let number2 = ""

numKeys.forEach((number) => {
  number.addEventListener('click', () => {
    if (operatorKey === "") {
      number1 += number.innerHTML
    } else {
      number2 += number.innerHTML
    }
  
    display.innerHTML += number.innerHTML;
  })
})

operatorKeys.forEach((operator) => {
  operator.addEventListener('click', () =>{
    operatorKey = operator.innerHTML
    display.innerHTML = number1 + operatorKey + number2;
  })
})

equalsButton.addEventListener('click', () => {
  display.innerHTML = calculate(number1, operatorKey, number2)
})

ACButton.addEventListener('click', () => {
  number1 = ""
  operatorKey = "" 
  number2 = ""
  display.textContent= ""
})


