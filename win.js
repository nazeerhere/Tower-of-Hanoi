document.querySelector("#ssBtn").onclick = showScore
const seeScore = document.getElementById("seeScore")

import {gameScore} from "/script.js"

function showScore() {
    seeScore.innerHTML = gameScore
    console.log("I'VE BEEN CLICKED")
}