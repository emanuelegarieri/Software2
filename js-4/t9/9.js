document.querySelector('#start').addEventListener('click', function () {
  const calculation = document.querySelector('#calculation').value.trim();
  const result = document.querySelector('#result');
  const operator = calculation.slice(1).match(/[+*/-]/);
  if (!operator) return;

  const position = operator.index + 1;
  const first = Number(calculation.slice(0, position));
  const second = Number(calculation.slice(position + 1));

  if (operator[0] === '+') {
    result.textContent = first + second;
  } else if (operator[0] === '-') {
    result.textContent = first - second;
  } else if (operator[0] === '*') {
    result.textContent = first * second;
  } else {
    result.textContent = first / second;
  }
});
