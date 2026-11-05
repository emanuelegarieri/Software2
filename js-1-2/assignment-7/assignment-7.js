const dice = parseInt(prompt("How many dice do you want to roll?"));
let sum = 0;

for (let i = 0; i < dice; i++) {
  sum += Math.floor(Math.random() * 6) + 1;
}

document.querySelector("#target").innerHTML = `Sum: ${sum}`;
