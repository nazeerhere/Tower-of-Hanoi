console.log("This works! check check")

import {dragElement} from './drag.js';


const tester = document.querySelector("#tester")
const stand = document.querySelector(".stand")
const hanoi = document.querySelector(".hanoi")
const demoDisc = document.querySelector(".demoDisc");
const num5 = document.getElementById("5")

// an example for other buttons ill be using
document.getElementById("btnAdd").onclick = popDisc
document.getElementById("btn2Add").onclick = popDisc2
document.getElementById("btn3Add").onclick = popDisc3

// all the buttons that affect the disk and towers
const button1 = document.getElementById("btnAdd")
const button2 = document.getElementById("btn2Add")
const button3 = document.getElementById("btn3Add")


// document.getElementById("btn2Add") = 
// document.getElementById("btn3Add") = 

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
        createDiscNode(this.screenName, num)
        console.log(num)
    
    }
    removeDisc() {

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
function createDiscNode(selectedScreen, num=3) {
    // empty list to hold the disc
    let discCollection = []
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
            
            // add click event to show disc has been selected
            discCollection[index].addEventListener("click", moveDisc)
            
            const element = discCollection[index];
            element.value = index * 5
            element.id = element.value
            
            const colors = {
                0: "aqua",
                5: "red",
                10: "darkmagenta",
                15: "darkorange", 
                20: "yellow"
            }

            // give the disc a color based on their value
            for(let i = 0; i < Object.keys(colors).length; i++) {

                element.style.backgroundColor = colors[element.value]
                ballR.style.backgroundColor = colors[element.value]
                ballL.style.backgroundColor = colors[element.value]
            }
        }
    }

}

// this section is for the button functionality


function popDisc() {

    tower1.addDisc()
}
function popDisc2() {
    let counter = 0
    tower2.addDisc()
    counter += 1
    console.log(counter)

}
function popDisc3() {
    if(tower3.length !== 0 || tower3[-1].value > discScreenId3.value) {
        tower3.addDisc()
    }
}

        // if(tower.length === 0 || tower[-1].value > selectedDisc.value) {
    // }



function moveDisc() {
    this.style.border = "thick solid white"
    dragElement(this);
    if(dragElement) {
        console.log("this is true see me here!!!")
    }
    
}    

function pushDiscNode(selectedDisc, tower) {
    if(tower.length === 0 || tower[-1].weight > selectedDisc.weight) {
        tower.push(selectedDisc)
    }
}


// RN it only works for tower1
function pushToTower(element) {

    for(let i=0; i < element.length; i++) {

        if(tower.length === 0 || element.value < tower[-1].value) {
        } {
            tower2.push(element[i])
        }

}
}
// console.log(tower1)

// start game
tower1.addDisc(5)