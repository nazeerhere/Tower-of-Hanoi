console.log("This works! check check")

import {dragElement} from './drag.js';
// import {} from './index.html'
var gameScore = 0 


// console.log(startValue)

// an example for other buttons ill be using
document.getElementById("btnAdd").onclick = popDisc
document.getElementById("btn2Add").onclick = popDisc2
document.getElementById("btn3Add").onclick = popDisc3
document.getElementById("reset").onclick = reset
// document.getElementById("myInput").onclick = getInputValue

// all the buttons that affect the disk and towers

const toolBar = document.querySelector(".toolBar")
const score = document.getElementById("score")

// all the disc screens
const discScreenId = document.querySelector("#DScreen")
const discScreenId2 = document.querySelector("#DScreen2")
const discScreenId3 = document.querySelector("#DScreen3")


// an empty array to hold the disc pushed to it
class Tower {
    constructor(screenName) {
        this.screenName = screenName
        this.emptyList = []
    }

    addDisc(num=1) {
        // if(tower3.length !== 0 || tower3[-1].value > discScreenId3.value) {
        // }
        createDiscNode(this.screenName, num)
        // this.emptyList.append()
    
    }
    removeDisc() {
        if(this.screenName.firstElementChild) {

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



// the seleced screen will be one of the 3 disc screens
let discCollection = []
function createDiscNode(selectedScreen, num=3) {
    // empty list to hold the disc
    discCollection = []
    for(let i =0; i < num; i++) {
        
        // create the base of the disc
        let newNode = document.createElement('div')
        newNode.className = "demoDisc"
        
        // create the left edge of the disc
        let ballL = document.createElement('div')
        ballL.className = "ball"
        ballL.setAttribute("id", "left")
        
       
        // the right
        let ballR = document.createElement('div')
        ballR.className = "ball"
        ballR.setAttribute("id", "right")
        
        // put the disc together
        newNode.append(ballL, ballR)
        
        // push new disc to list
        discCollection.push(newNode)
        selectedScreen.appendChild(newNode)
    
        // send disc to one of the towers
        for (let index = 0; index < discCollection.length; index++) {
            
            const element = discCollection[index];
            element.value = index * 5
            element.id = element.value
            
            const colors = {
                0: "aqua",
                5: "red",
                10: "darkmagenta",
                15: "darkorange", 
                20: "yellow",
                25: "#3d9640"
            }

            // give the disc a color based on their value
            for(let i = 0; i < Object.keys(colors).length; i++) {

                element.style.backgroundColor = colors[element.value]
                ballR.style.backgroundColor = colors[element.value]
                ballL.style.backgroundColor = colors[element.value]
            }
        }
    }
    // console.log(discCollection)
}
console.log(discCollection)

// this section is for the button functionality


function popDisc() {
    if(tower2.length != 0) {
        tower2.removeDisc()
    }
    tower1.addDisc()
    gameScore++
    console.log(gameScore)
    score.innerHTML = "moves made: " + gameScore;

}
function popDisc2() {
    if(tower3.length != 0) {
        tower3.removeDisc()
    }
    tower2.addDisc()
    gameScore++
    console.log(gameScore)
    score.innerHTML = "moves made: " + gameScore;

}

// load win page
function winPage() {
    document.location.href = "winpage.html"
}

function popDisc3() {
    if(tower1.length != 0) {
        tower1.removeDisc()
    }
        tower3.addDisc()
        gameScore++
        score.innerHTML = "moves made: " + gameScore;
        console.log(discScreenId3.childNodes.length)
        
        // win condition 
        if(discScreenId3.childNodes.length === 5) {
        toolBar.innerHTML = "WELL DONE!! The game is over"
        setTimeout(winPage, 3500)
}
}
function getInputValue() {
    var startValue = document.getElementById("myInput").value;
    return startValue
}


function reset() {
    document.location.href = ""
}



// start game
tower1.addDisc(5)
score.innerHTML = "moves made: " + gameScore;
