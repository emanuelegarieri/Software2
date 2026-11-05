"use strict";

let timerID = null
function timedAction(){
    let boxDiv = document.querySelector(".box");
    let newParagraph = document.createElement("p");

    newParagraph.innerText = "I am a box!!!";
    newParagraph.setAttribute("class", "div-green");

    boxDiv.appendChild(newParagraph);
}

function startBoxing(){
    console.log("Start making boxes...")
    timerID = setInterval(timedAction, 2000);   
}

function endBoxing(){
    console.log("Stop making boxes...")
    clearInterval(timerID);
}

let startButton = document.querySelector("#start");
let endButton = document.querySelector("#end");

startButton.addEventListener("click", startBoxing);
endButton.addEventListener("click", endBoxing);

let header = document.querySelector("#main-header");
header.innerText = "Page about boxes";

let htmlP = "<p>Example>/p>";
//boxDiv.innerHTML = htmlP;

let alsoHeader = document.getElementById("main-header");
console.log(alsoHeader);

let paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

let paragraphsToo = getElementByTagName("p");
console.log(paragraphsToo);