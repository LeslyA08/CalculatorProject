const calculate= (number1, operator, number2) => {
  let result = ''
  if (operator === '+') {
  result = number1 + parseInt(number2);
}
else if (operator === '-') {
  result = number1 - number2;
}
else if (operator === '*') {
  result = number1 * number2;
}
else if (operator === '/') {
  result =number1 / number2;
}
return result;
} 

const calculator = document.querySelector('.calculator')
const display = calculator.querySelector('.calculator_display')
const operatorKeys = calculator.querySelectorAll('.keyOperator')
const numKeys= calculator.querySelectorAll('.numKey')
let equalsButton= calculator.querySelector('.equalsButton')

let number1 = ""
let operatorKey = "" 
let number2 = ""

numKeys.forEach((number) => {
  number.addEventListener('click', () => {
    if (operatorKey === "") {
      number1 += parseInt(number.innerHTML)
    } else {
      number2 +=  parseInt(number.innerHTML)
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












/*numKeys.addEventListener("click", e => {
 if (e.target.matches("button")) {
  const key = e.target
  const action = key.dataset.action
  const keyContent = key.textContent
  const displayedNum = display.textContent

  if (!action) {
    if (displayedNum === '0') {
      display.textContent += keyContent;
    }else {
      display.textContent = displayedNum + keyContent;
    }
  }
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    display.textContent = keyContent
  }else {
    display.textContent = displayedNum + keyContent
  }
  if (action === 'decimal') {
    display.textContent = keyContent
  }else {
    display.textContent = displayedNum + keyContent
  }
  
  if (action === 'clear') {
  }
  
  if (action === 'calculate') {
    
  }

 }
});*/

