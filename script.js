console.log("This works! check check")

import {dragElement} from './drag.js';
// import {} from './index.html'
var gameScore = 0 
let discLimit = prompt("how many disc would you like to start with? 6 is the limit")
if(discLimit > 6) {
    discLimit = 6
}


// const active = document.getElementById("active")
// const active2 = document.getElementById("active2")
// const active3 = document.getElementById("active3")

// function setActive(event) {
//     if(isActive === true) {
//         event.style.backgroundColor = "red"
//         isActive = false
//     } else {
//         // event.style.boxShadow = "0px 2px 2px 2px cornflowerblue inset"
//         event.style.backgroundColor = "blue"
//         isActive = true
//     }
//     // console.log("is active statement: " + setActive())
// }
// active.addEventListener("click", setActive(active))
// active2.addEventListener("click", setActive(active2))
// active3.addEventListener("click", setActive(active3))

// console.log(startValue)

// an example for other buttons ill be using
document.getElementById("btnAdd").onclick = popDisc
document.getElementById("btn2Add").onclick = popDisc2
document.getElementById("btn3Add").onclick = popDisc3
document.getElementById("reset").onclick = reset



const toolBar = document.querySelector(".toolBar")
const score = document.getElementById("score")

// all the disc screens
const discScreenId = document.querySelector("#DScreen")
const discScreenId2 = document.querySelector("#DScreen2")
const discScreenId3 = document.querySelector("#DScreen3")



class Tower {
    constructor(screenName) {
        this.screenName = screenName
        this.emptyList = []
        this.colors = {
            0: "aqua",
            5: "red",
            10: "darkmagenta",
            15: "darkorange", 
            20: "yellow",
            25: "#3d9640"
        }
    }

    addDisc(num=1) {
        createDiscNode(this.screenName, num)
        // this.emptyList.push()

    }
    removeDisc() {
        if(this.screenName.firstElementChild) {
            this.emptyList.push(this.screenName.firstElementChild.value)
            this.screenName.removeChild(this.screenName.firstElementChild)
        }
    }

}

// discScreenId.insertBefore(tower1)
let tower1 = new Tower(discScreenId)
let tower2 = new Tower(discScreenId2)
let tower3 = new Tower(discScreenId3)

// play thing
const playThing = document.getElementById("playThing")
dragElement(playThing);
playThing.style.background = "pink"




let newList = []


// the seleced screen will be one of the 3 disc screens
let newNode, ballL, ballR
// an empty array to hold the disc pushed to it
var discCollection = []
function createDiscNode(selectedScreen, num=3) {
    // empty list to hold the disc
    // discCollection = []
    for(let i =0; i < num; i++) {

        // create the base of the disc
        newNode = document.createElement('div')
        newNode.className = "demoDisc"
        
        // create the left edge of the disc
        ballL = document.createElement('div')
        ballL.className = "ball"
        ballL.setAttribute("id", "left")
        
       
        // the right
        ballR = document.createElement('div')
        ballR.className = "ball"
        ballR.setAttribute("id", "right")
        
        // put the disc together
        newNode.append(ballL, ballR)
        
        // push new disc to list
        discCollection.push(newNode)

        newList.push(newNode)
        selectedScreen.appendChild(newNode)
    
        // send disc to one of the towers
        for (let index = 0; index < discCollection.length; index++) {
            
            
            const element = discCollection[index];
            element.value = index * 5
            element.id = element.value
            
            const colors = {
                0: "aqua",
                5: "yellow",
                10: "orange", 
                15: "red",
                20: "darkmagenta",
                25: "#3d9640"
            }

            // give the disc a color based on their value
                element.style.backgroundColor = colors[element.value]
                ballR.style.backgroundColor = colors[element.value]
                ballL.style.backgroundColor = colors[element.value]
        }
    }
}
// console.log(newList)




// this section is for the button functionality
let topElement1 = discScreenId[-1]
console.log(topElement1)
console.log(discScreenId)
console.log(discScreenId.children[0])
console.log(discScreenId.firstChild)

function popDisc() {

    if(isActive === true) {
        if(tower1.length != 0 || tower3[-1].value > tower1[-1].value) {
            tower2.removeDisc()
            this
        }
    }
    tower1.addDisc()
    gameScore++
    score.innerHTML = "MOVES MADE: " + gameScore;

}
function popDisc2() {
    if(tower3.length != 0 || tower3[-1].value > tower1[-1].value) {
        tower3.removeDisc()
    }
    tower2.addDisc()
    gameScore++
    score.innerHTML = "moves made: " + gameScore;

}

// load win page
function winPage() {
    document.location.href = "winpage.html"
}

function popDisc3() {
    if(tower1.length != 0 || tower3[-1].value > tower1[-1].value) {
        tower1.removeDisc()
    }
        tower3.addDisc()
        gameScore++
        score.innerHTML = "moves made: " + gameScore;
        
        // win condition 
        if(discScreenId3.childNodes.length >= discLimit) {
        toolBar.innerHTML = "WELL DONE!! The game is over"
        setTimeout(winPage, 3500)
}
}


function reset() {
    document.location.href = ""
}

// var x = document.createElement('input')
// x.setAttribute("type", "search")



// start game
tower1.addDisc(discLimit)
score.innerHTML = "MOVES MADE: " + gameScore;
// console.log("Disc collection here: " + discCollection)
