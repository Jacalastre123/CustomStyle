let allElements = document.querySelectorAll("*") // get all elements
let top = 0 // let
let left = 0
let enetop = 0
let eneleft = 0
const player = document.querySelector("player")
const player-arrow = document.querySelector("player-arrow")
const enemy = document.querySelector("enemy")
allElements.forEach(value => {
 if (value.tagName.toLowerCase().startsWith("player") ) { // if it has the name
   value.style.backgroundColor = "blue" // CSS styling
   value.style.position = "absolute" // element.style....
   value.style.height = "100px"
   value.style.width = "100px"
    value.style.transition = "top 0.3s, left 0.3s" // Animate


   document.addEventListener("keydown", (event) => {
  if (event.key === "W" && value.tagName.toLowerCase() === "player"|| event.key === "w" && value.tagName.toLowerCase() === "player") {
    top -= 5
    player.style.top = top // Whole movement system
  }
  if (event.key === "S" && value.tagName.toLowerCase() === "player"|| event.key === "s" && value.tagName.toLowerCase() === "player") {
    top += 5
    player.style.top = top
  }

  if (event.key === "a" && value.tagName.toLowerCase() === "player"|| event.key === "A" && value.tagName.toLowerCase() === "player") {
    left -= 5
    player.style.left = left
  }

  if (event.key === "D" && value.tagName.toLowerCase() === "player"|| event.key === "d" && value.tagName.toLowerCase() === "player") {
    left += 5
    value.style.left = left
  }

     if (event.key === "ArrowUp" && value.tagName.toLowerCase() === "player-arrow") {
    top -= 5
    player.style.top = top
  }
  if (event.key === "ArrowDown" && value.tagName.toLowerCase() === "player-arrow") {
    top += 5
    player.style.top = top
  }

  if (event.key === "ArrowLeft" && value.tagName.toLowerCase() === "player-arrow") { //If it is the left arrow and the tag is player-arrow
    left -= 5
    player.style.left = left
  }

  if (event.key === "ArrowRight" && value.tagName.toLowerCase() === "player-arrow") {
    left += 5
    player.style.left = left
  }

  
}

if (value.tagName.toLowerCase() === "enemy") { // If enemy

setInterval(function() {
if (player.left > value.left) eneleft++;
if (player.left < value.left) eneleft--; // The Chase
if (player.top < value.top) enetop--;
if (player.top > value.top) enetop++;

enemy.style.top = enetop
enemy.style.left = eneleft // Apply positions

}, 300)

value.style.backgroundColor = "red"
value.style.position = "absolute"
value.style.height = "100px" // Enemy's styling
value.style.width = "100px"
}

 }


}
                     // Copy this for any changes
                   


console.log("Welcome! Go to https://jacalastre123.github.io/customStyle if you want the same for your code!")
