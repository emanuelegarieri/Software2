const dice = parseInt(prompt("Enter the number of dice:"));
const targetSum = parseInt(prompt("Enter the sum you want to get:"));
let matches = 0;

for (let experiment = 0; experiment < 10000; experiment++) {
  let sum = 0;
  for (let die = 0; die < dice; die++) {
    sum += Math.floor(Math.random() * 6) + 1;
  }
  if (sum === targetSum) {
    matches++;
  }
}

document.querySelector("#target").innerHTML =
  `Probability to get sum ${targetSum} with ${dice} dice is ${(matches / 10000 * 100).toFixed(2)}%`;
