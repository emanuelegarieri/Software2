const numbers = [];
let list = "";

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

while (true) {
  const result = rollDice();  
  numbers.push(result);

  if (result === 6) {
        break
    }
}

for (const n of numbers) {
  list += `<li>${n}</li>`;
}
document.querySelector("#target").innerHTML = list;