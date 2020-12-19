console.log("This works! check check")

const hanoi = document.querySelector(".hanoi")
const demoDisc = document.querySelector(".demoDisc");

// all the disc screens
const discScreenId = document.querySelector("#DScreen")
const discScreenId2 = document.querySelector("#DScreen2")
const discScreenId3 = document.querySelector("#DScreen3")


// an empty array to hold the disc pushed to it
let tower1 = new Object()

let tower2 = []
let tower3 = []
// tower1.push("Daisy")

// discScreenId.insertBefore(tower1)


// play thing
const playThing = document.getElementById("playThing")

playThing.style.background = "pink"




// create a disc and append it to a stand


// the seleced screen will be one of the 3 disc screens
function createDiscNode(selectedScreen, tower, num=3) {
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


        // send disc to one of the towers
        for (let index = 0; index < discCollection.length; index++) {
            const element = discCollection[index];
            element.value = index * 5
            // console.log(element)
            // console.log(discCollection[index].weight)
            if(tower.length === 0 || element.value < tower[-1].value) {
                // console.log("This works!!")
                selectedScreen.appendChild(newNode)
            } 
            
            const colors = {
                0: "orange",
                5: "red",
                10: "purple"
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

createDiscNode(discScreenId, tower2, 3)

// let rando = createDiscNode(discScreenId3,tower1, 1)
// rando.weight = 5

function pushDiscNode(selectedDisc, tower) {
    if(tower.length === 0 || tower[-1].weight > selectedDisc.weight) {
        tower.push(selectedDisc)
    }
}
// console.log(tower1)
// pushDiscNode(discCollection[0], tower2)
// console.log()


class Disc {
    constructor(weight=5, color="cornsilk") {
        this.weight = weight
        this.backgroundColor = color
    }
}

// create the 3 disc
const SmallDisc = new Disc()
const MidDisc = new Disc(10, "red")
const LargeDisc = new Disc(15, "purple")
// put them into an array
const discArray = [SmallDisc, MidDisc, LargeDisc]



// RN it only works for tower1
function pushToTower2(element) {

    for(let i=0; i < element.length; i++) {

        if(tower2.length === 0 || element.weight < tower2[0].weight) {
            tower2.push(element[i])
        }


}
}
pushToTower2(discArray)
console.log(tower1)

