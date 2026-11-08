const names = [];
let list = "";

for (let x = 0; x < 6; x++) {
  names.push(prompt(`Dog name number ${x + 1}:`));
}

names.sort();
names.reverse();

for (const name of names) {
  list += `<li>${name}</li>`;
}
document.querySelector("#target").innerHTML = list;