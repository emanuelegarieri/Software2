const number = parseInt(prompt("Enter an integer:"));
let prime = number > 1;

for (let divisor = 2; divisor < number; divisor++) {
  if (number % divisor === 0) {
    prime = false;
    break;
  }
}

if (prime) {
  document.querySelector("#target").innerHTML = `${number} is a prime number.`;
} else {
  document.querySelector("#target").innerHTML = `${number} is not a prime number.`;
}
