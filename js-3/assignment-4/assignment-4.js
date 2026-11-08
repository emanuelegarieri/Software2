const numbers = [];

while (true) {
  const input = parseFloat(prompt("Insert a number:"));
  if (input === 0) {
    break;
  }
  numbers.push(input);
}

numbers.sort((a, b) => b - a);

for (const n of numbers) {
  console.log(n);
}
