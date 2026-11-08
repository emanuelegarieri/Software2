const many_cand = parseInt(prompt("How many candidates?"))
const candidates = [];

for (let x = 0; x < many_cand; x++) {
  const name = prompt(`Name for candidate ${x + 1}:`);
    candidates.push({name: name, votes: 0,});
}

const many_voters = parseInt(prompt("How many voters?"))

for (let x = 0; x < many_voters; x++) {
  const vote = prompt("Vote using the candidate name:");

  if (vote === "") {
    continue;
  }

  for (const candidate of candidates) {
    if (candidate.name === vote) {
      candidate.votes++;
      break;
    }
  }
}

candidates.sort((a, b) => b.votes - a.votes);

console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
console.log("results:");

for (const candidate of candidates) {
  console.log(`${candidate.name}: ${candidate.votes} votes`);
}
