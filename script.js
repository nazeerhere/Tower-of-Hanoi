console.log("This works! check check")

let discArray;

// import {} from './index.html'
var gameScore = 0 
let discLimit = prompt("how many disc would you like to start with? 6 is the limit")
if(discLimit > 6) {
    discLimit = 6
}

console.log("demo test some stuff")
document.getElementById("reset").onclick = reset


const toolBar = document.querySelector(".toolBar")
const score = document.getElementById("score")

// all the disc screens
const discScreenId = document.querySelector("#DScreen")
const discScreenId2 = document.querySelector("#DScreen2")
const discScreenId3 = document.querySelector("#DScreen3")

discScreenId.addEventListener("click", (event) => {
    if( selected.dataset.value < event.target || selected.dataset.value < event.target.firstChild.dataset.value ) {
        gameScore++
        score.innerHTML = "MOVES MADE: " + gameScore 
        discScreenId.append(selected)
        console.log(event.target.id + " " + selected.dataset.value + " " + selected.style.backgroundColor)


    }
    
})
discScreenId2.addEventListener("click", (event) => {
    if( !event.target.firstChild || event.target.firstChild.dataset.value > selected.dataset.value) {
        gameScore++
        score.innerHTML = "MOVES MADE: " + gameScore
        console.log(event.target.id + " " + selected.dataset.value + " " + selected.style.backgroundColor + "first child value: " + event.target.firstChild.dataset.value)
        // console.log("Tower info: " + event.target.lastChild.dataset.value)

        discScreenId2.append(selected)
        
    }
})

discScreenId3.addEventListener("click", (event) => {
    if( !event.target.firstChild || selected.dataset.value < event.target.firstChild.dataset.value) {
        gameScore++
        score.innerHTML = "MOVES MADE: " + gameScore
        discScreenId3.append(selected)
        console.log(event.target.id + " " + selected.dataset.value + " " + selected.style.backgroundColor)
        try {
            console.log(event.target.lastChild.dataset.value)
        }
        catch(err) {
            console.log("first child returning null, info here: " + err)
        }

    }

    if(discScreenId3.children.length == discLimit) {
        toolBar.innerHTML = "WELL DONE!! The game is over"
        setTimeout(winPage, 3500)
    }
})




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
            element.setAttribute("data-value", (index * 5))
            element.id = index * 5

            element.addEventListener("click", (event) => {
                let currentTower = event.target.parentElement
                discArray = Array.from(currentTower.children)
                
                if(discArray[discArray.length -1].id === event.target.id) {
                    selected = document.getElementById(`${event.target.id}`)

                }


            })

            const colors = {
                0: "red",
                5: "orange", 
                10: "yellow",
                15: "rgb(20, 204, 30)",
                20: "rgba(31, 135, 231)",
                25: "darkmagenta"
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