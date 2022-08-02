/* each button should represent it's own number or character (*+/-)
input should be inputted instead of console.log
Button for each thing
make super simple first then add styling
must get javascript down first, then styling 
there must be a disolay that shows the numbers being input
AC button must clear the screen.
once button is pressed and appears on the screen, start formulations/functions*/

const calculate= (number1, operator, number2) => {
  let result = ''
  if (operator === 'add') {
  result = number1 + number2;
}
else if (operator === 'subtract') {
  result = number1 - number2;
}
else if (operator === 'multiply') {
  result = number1 * number2;
}
else if (operator === 'divide') {
  result = (number1 / number2);
}
return result;
}

keys.addEventListener('click'), e => {
  if (e.target.matches('button')) }