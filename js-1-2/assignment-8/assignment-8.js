const start = parseInt(prompt("Enter the start year:"));
const end = parseInt(prompt("Enter the end year:"));
let years = "";

for (let year = start; year <= end; year++) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    years += `<li>${year}</li>`;
  }
}

document.querySelector("#target").innerHTML = years;
