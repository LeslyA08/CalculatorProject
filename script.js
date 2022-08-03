const calculate= (number1, operator, number2) => {
  let result = ''
  if (operator === '+') {
  result = parseFloat(number1) + parseFloat(number2);
}
else if (operator === '-') {
  result =  parseFloat(number1) - parseFloat(number2);
}
else if (operator === '*') {
  result = parseFloat(number1) * parseFloat(number2);
}
else if (operator === '/') {
  result = parseFloat(number1) / parseFloat(number2);
}
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
      number1 += parseFloat(number.innerHTML)
    } else {
      number2 += parseFloat(number.innerHTML)
    }
    display.innerHTML += number.innerHTML;
  })
})

operatorKeys.forEach((operator) => {
  operator.addEventListener('click', () =>{
    operatorKey = operator.innerHTML
    display.innerHTML += operator.innerHTML;
  })
})

equalsButton.addEventListener('click', () => {
  display.innerHTML = calculate(number1, operatorKey, number2)
})

ACButton.addEventListener('click', () => {
  display.innerHTML = ""
})



