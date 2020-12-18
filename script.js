console.log("This works!check check")

const demoDisc = document.querySelector(".demoDisc");
const demoDisc2 = demoDisc.cloneNode(true)
// demoDisc2.setAttribute("id", "playThing")

const hanoi = document.querySelector(".hanoi")

// all the disc screens
const discScreenId = document.querySelector("#dScreen")
const discScreenId2 = document.querySelector("#DScreen2")



const playThing = document.getElementById("playThing")
// playThing.style.background = "pink"


// demoDisc2.removeAttribute("display")
// discScreenId2.appendChild(demoDisc2)



class Disc {
    constructor(weight=5, color="cornsilk") {
        this.weight = weight
        this.backgroundColor = color
    }
}

// create the 3 disc
const SmallDisc = new Disc()

// create a disc and append it to a stand
function createDiscNode() {
    for(let i =0; i < 3; i++) {

        let newNode = document.createElement('div')
        newNode.className = "demoDisc"
        let ballL = document.createElement('div')
        ballL.className = "ball"
        ballL.setAttribute("id", "left")
        let ballR = document.createElement('div')
        ballR.className = "ball"
        ballR.setAttribute("id", "right")
        
        
        console.log(newNode)
        newNode.append(ballL, ballR)
        discScreenId2.appendChild(newNode)
    }
    
}
createDiscNode()



const MidDisc = new Disc(10, "red")
const LargeDisc = new Disc(15, "purple")
// put them into an array
const discArray = [SmallDisc, MidDisc, LargeDisc]


// an empty array to hold the disc pushed to it
let tower1 = []

function createDiscArray() {

    for(let i=0; i < discArray.length; i++) {

        if(tower1.length === 0) {
            tower1.push(discArray[i])
            console.log("this works")
        } else (tower1.push(discArray[i])) 
    }


}
createDiscArray()



console.log(tower1)