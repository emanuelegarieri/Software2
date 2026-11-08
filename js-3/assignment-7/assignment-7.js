const numbers = [];
let list = "";

const max = parseInt(prompt("How many sides does the die have?"), 10);

function rollDice(n) {
  return Math.floor(Math.random() * n) + 1;
}

while (true) {
  const result = rollDice(max);  
  numbers.push(result);

  if (result === max) {
        break
    }
}

for (const n of numbers) {
  list += `<li>${n}</li>`;
}
document.querySelector("#target").innerHTML = list;