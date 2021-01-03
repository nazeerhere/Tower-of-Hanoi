console.log("This works! check check")

let discArray;

// import {} from './index.html'
var gameScore = 0 
let discLimit = prompt("how many disc would you like to start with? 8 is the limit")
if(discLimit > 8) {
    discLimit = 8
}

document.getElementById("reset").onclick = reset
document.getElementById("i").onclick = showTowerColor

const toolBar = document.querySelector(".toolBar")
const score = document.getElementById("score")

// game rules modal and related
const rulesBtn = document.querySelector("#gameRules")
const ruleModal = document.querySelector("#ruleModal")
const closeBtn = document.querySelector("#closeModal")

// all the disc screens
const discScreenId = document.querySelector("#DScreen")
const discScreenId2 = document.querySelector("#DScreen2")
const discScreenId3 = document.querySelector("#DScreen3")

// button for showing the disc screen background
const iBtn = document.querySelector("#i")


discScreenId.addEventListener("click", (event) => {
    try {
    if( !event.target.lastChild || event.target.lastChild.dataset.value > selected.dataset.value ) {
        gameScore++
        score.innerHTML = "MOVES MADE: " + gameScore 
        console.log(event.target.id + " " + selected.dataset.value + " " + selected.style.backgroundColor)
            discScreenId.append(selected)
        } 
    }
        catch(err) {
            console.log("som' mo' bs: " + err)
        }
        finally {
            discScreenId.append(selected)
        }
})

discScreenId2.addEventListener("click", (event) => {
    if( !event.target.lastChild || event.target.lastChild.dataset.value > selected.dataset.value) {
        gameScore++
        score.innerHTML = "MOVES MADE: " + gameScore
        discScreenId2.append(selected)
    }
})

discScreenId3.addEventListener("click", (event) => {
    if( !event.target.lastChild || event.target.lastChild.dataset.value > selected.dataset.value) {
        gameScore++
        score.innerHTML = "MOVES MADE: " + gameScore
        discScreenId3.append(selected)
        console.log(event.target.id + " " + selected.dataset.value + " " + selected.style.backgroundColor)

    if(discScreenId3.children.length == discLimit) {
        toolBar.innerHTML = "WELL DONE!! The game is over"
        setTimeout(winPage, 3500)
    }
    }
})

// display modal
const openModal = () => {
    ruleModal.style.display = "block";
}
rulesBtn.addEventListener("click", openModal)
// close modal
const closeModal = () => {
    ruleModal.style.display = "none"
}
closeBtn.addEventListener("click", closeModal)


let selected;
let newNode
// an empty array to hold the disc pushed to it
var discCollection = []
// the seleced screen will be one of the 3 disc screens
function createDiscNode(selectedScreen, num=3) {
    // empty list to hold the disc
    discCollection = []

    for(let i =0; i < num; i++) {

        // create the base of the disc
        newNode = document.createElement('div')
        newNode.className = "demoDisc"
        
        // push new disc to list
        discCollection.push(newNode)
        // discCollection.sort((a, b) => {a-b})

        selectedScreen.insertBefore(newNode, selectedScreen.childNodes[0])
    
    
        // send disc to one of the towers
        for (let index=0; index < discCollection.length; index++) {
            
            const element = discCollection[index];
            // element.dataset-value = index * 5
            element.setAttribute("data-value", (index))
            element.id = index

            element.addEventListener("click", (event) => {
                let currentTower = event.target.parentElement
                discArray = Array.from(currentTower.children)
                
                if(discArray[discArray.length -1].id === event.target.id) {
                    selected = document.getElementById(`${event.target.id}`)

                }


            })

            const colors = {
                0: "red",
                1: "orange", 
                2: "yellow",
                3: "rgb(20, 204, 30)",
                4: "rgba(31, 135, 231)",
                5: "indigo",
                6: "violet",
                7: "white"
            }
            // give the disc a color based on their value
                element.style.backgroundColor = colors[element.dataset.value]
        }
    }
}


// start game
createDiscNode(discScreenId, discLimit)
score.innerHTML = "MOVES MADE: " + gameScore;


score.addEventListener("click", (event) => {
    if(event) {
        console.log("count it up, count it up, count it up, count it")
    }
})
    
// load win page
function winPage() {
    document.location.href = "winpage.html"
}
// reset button
function reset() {
    document.location.href = ""
}

function showTowerColor() {
    
    if(iBtn.value == "OFF") {

        iBtn.value = "ON"
        discScreenId.style.backgroundColor = "rgba(0, 0, 0, 0.192)"
        discScreenId2.style.backgroundColor = "rgba(0, 0, 0, 0.192)"
        discScreenId3.style.backgroundColor = "rgba(0, 0, 0, 0.192)"
        score.innerHTML = "Selection area is now showing"
    }
    else if(iBtn.value == "ON") {
        iBtn.value = "OFF"
        discScreenId.style.backgroundColor = "transparent"
        discScreenId2.style.backgroundColor = "transparent"
        discScreenId3.style.backgroundColor = "transparent"
        score.innerHTML = "MOVES MADE: " + gameScore 
    }
}


// Credit: Mateusz Rybczonec

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 200;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;


startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
