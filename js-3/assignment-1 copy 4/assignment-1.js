const labels = new Array("First", "Second", "Third", "Fourth", "Fifth")
const numbers = [];

for (let x = 0; x < labels.length; x++) {
    const value = parseFloat(prompt(`${labels[x]} number:`), 10);
    numbers.push(value);
}

for (let y = labels.length-1; y >= 0; y--) {
    console.log(numbers[y]);
}