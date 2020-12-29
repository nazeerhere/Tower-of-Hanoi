console.log("This works! check check")

import {dragElement} from './drag.js';
// import {} from './index.html'
var gameScore = 0 
let discLimit = prompt("how many disc would you like to start with? 6 is the limit")

if(discLimit > 6) {
    discLimit = 6
}



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
discScreenId.addEventListener("click", (event) => {
    if(event.target.className === "discScreen") {
        console.log(event.target.className)
        discScreenId.append(selected)

    }
})

discScreenId2.addEventListener("click", (event) => {
    discScreenId2.append(selected)
})

discScreenId3.addEventListener("click", (event) => {
    discScreenId3.append(selected)
})


class Tower {
    constructor(screenName) {
        this.screenName = screenName
    }

    addDisc(num=1) {
        
        if(discCollection.length < discLimit) {
            createDiscNode(this.screenName, num)
            console.log(discCollection.lengths)
        }
        
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

let selected;
// the seleced screen will be one of the 3 disc screens
let newNode, ballL, ballR
// an empty array to hold the disc pushed to it
var discCollection = []
function createDiscNode(selectedScreen, num=3) {
    // empty list to hold the disc
    discCollection = []

    for(let i =0; i < num; i++) {

        // create the base of the disc
        newNode = document.createElement('div')
        newNode.className = "demoDisc"
        
        // push new disc to list
        discCollection.push(newNode)

        newList.push(newNode)
        selectedScreen.appendChild(newNode)
    
    
        // send disc to one of the towers
        for (let index=0; index < discCollection.length; index++) {
            
            const element = discCollection[index];
            // element.dataset-value = index * 5
            element.setAttribute("data-value", (index * 5))
            element.id = index * 5

            element.addEventListener("click", (event) => {
                let currentTower = event.target.parentElement
                let discArray = Array.from(currentTower.children)
                
                if(discArray[discArray.length -1].id === event.target.id) {
                    selected = document.getElementById(`${event.target.id}`)

                }


            })

            const colors = {
                0: "aqua",
                5: "yellow",
                10: "orange", 
                15: "red",
                20: "darkmagenta",
                25: "#3d9640"
            }
            // give the disc a color based on their value
                element.style.backgroundColor = colors[element.dataset.value]
        }
    }
}
// console.log(newList)


// start game
tower1.addDisc(discLimit)
score.innerHTML = "MOVES MADE: " + gameScore;



// this section is for the button functionality
function popDisc() {

    // if(tower2.length != 0 || tower3[-1].value > tower1[-1].value) {
    // }
        tower2.removeDisc()
        discCollection.shift();
        console.log(discCollection)

    
    tower1.addDisc()
    gameScore++
    score.innerHTML = "MOVES MADE: " + gameScore;

}
function popDisc2() {
    if(tower3.length != 0 || tower3[-1].value > tower1[-1].value) {
        tower3.removeDisc()
        discCollection.shift();
        console.log(discCollection)

    }
    
    tower2.addDisc(1)
    gameScore++
    score.innerHTML = "MOVES MADE: " + gameScore;

}

// load win page
function winPage() {
    document.location.href = "winpage.html"
}

function popDisc3() {
    if(tower1.length != 0 || tower3[-1].value > tower1[-1].value) {
        tower1.removeDisc()
        discCollection.shift();
        console.log(discCollection)
        console.log(tower3[-1])

    }
        tower3.addDisc(1)
        gameScore++
        score.innerHTML = "MOVES MADE: " + gameScore;
        
        // win condition 
        if(discScreenId3.childNodes.length >= discLimit) {
        toolBar.innerHTML = "WELL DONE!! The game is over"
        setTimeout(winPage, 3500)
}
}


function reset() {
    document.location.href = ""
}





