const many = parseInt(prompt("How many partecipant?"))
const names = [];
let list = "";

for (let x = 0; x < many; x++) {
  names.push(prompt(`Name number ${x + 1}:`));
}

names.sort();

for (const name of names) {
  list += `<li>${name}</li>`;
}
document.querySelector("#target").innerHTML = list;