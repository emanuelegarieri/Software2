const numbers = [];

while (true) {
  const input = parseFloat(prompt("Insert a number:"));
  if (numbers.includes(input)) {
    console.log("Already exists! Yo b****!");
    break
  }
  numbers.push(input);  
}

numbers.sort((a, b) => a - b);

for (const n of numbers) {
  console.log(n);
}
