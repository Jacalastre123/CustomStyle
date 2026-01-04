let allElements2 = document.querySelectorAll("*") // get all elements
let top = 0 // let variable =
let left = 0
let enetop = 0
let eneleft = 0 
arrtop = 0
arrleft = 0
const player = document.querySelector("player")
const playerArrow = document.querySelector("player-arrow")
const enemy = document.querySelector("enemy") // Get your elements
allElements2.forEach(value => {
 if (value.tagName.toLowerCase().startsWith("player") ) { // if it has the name
   value.style.backgroundColor = "blue" // CSS styling
   value.style.position = "absolute" // element.style....
   value.style.height = "100px"
   value.style.width = "100px"
    value.style.transition = "top 0.3s, left 0.3s" // Animate




if (value.tagName.toLowerCase() === "enemy") { // If enemy

setInterval(function() {
if (player.style.left > value.style.left) eneleft++;
if (player.style.left < value.style.left) eneleft--; // The Chase
if (player.style.top < value.style.top) enetop--;
if (player.style.top > value.style.top) enetop++;

enemy.style.top = enetop
enemy.style.left = eneleft // Apply positions

}, 300)

value.style.backgroundColor = "red"
value.style.position = "absolute"
value.style.height = "100px" // Enemy's styling
value.style.width = "100px"
}

 }


})
    document.addEventListener("keydown", (event) => {
  if (event.key === "W"|| event.key === "w") {
    top -= 5
    player.style.top = top // Whole movement system
  }
  if (event.key === "S" || event.key === "s" ) {
    top += 5
    player.style.top = top
  }

  if (event.key === "a" || event.key === "A") {
    left -= 5
    player.style.left = left
  }

  if (event.key === "D"|| event.key === "d") {
    left += 5
    value.style.left = left
  }

     if (event.key === "ArrowUp" ) {
    arrtop -= 5
    playerArrow.style.top = arrtop
  }
  if (event.key === "ArrowDown" ) {
    arrtop += 5
    playerArrow.style.top = arrtop
  }

  if (event.key === "ArrowLeft") { // If it is the left arrow 
    arrleft -= 5
    playerArrow.style.left = arrleft
  }

  if (event.key === "ArrowRight") {
    arrleft += 5
    playerArrow.style.left = arrleft
  }

  
})
                     // Copy this for any changes
                   


console.log("Welcome! Go to https://jacalastre123.github.io/customStyle if you want the same for your code!")
