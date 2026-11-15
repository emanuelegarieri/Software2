document.querySelector('#start').addEventListener('click', function () {
  const first = Number(document.querySelector('#num1').value);
  const second = Number(document.querySelector('#num2').value);
  const operation = document.querySelector('#operation').value;
  const result = document.querySelector('#result');

  if (operation === 'add') {
    result.textContent = first + second;
  } else if (operation === 'sub') {
    result.textContent = first - second;
  } else if (operation === 'multi') {
    result.textContent = first * second;
  } else {
    result.textContent = first / second;
  }
});
