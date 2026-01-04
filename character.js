let allElements2 = document.querySelectorAll("*") // get all elements
let top = 0 // let variable =
let left = 0
let enetop = 40
let eneleft = 80
let arrtop = 0
let arrleft = 0
let enemies = false
const player = document.querySelector("player")
const playerArrow = document.querySelector("player-arrow")
const enemy = document.querySelector("enemy") // Get your elements
allElements2.forEach(value => {
 if (value.tagName.toLowerCase().startsWith("player") ) { // if it has the name
   value.style.backgroundColor = "blue" // CSS styling
   value.style.position = "absolute" // element.style....
   value.style.height = "50px"
   value.style.width = "50px"
    
  value.style.top = "0px"
  value.style.left = "0px"



if (value.tagName.toLowerCase() === "enemy") { // If enemy
enemies = true

value.style.backgroundColor = "red"

value.style.position = "absolute"
value.style.height = "100px" // Enemy's styling
value.style.width = "100px"
    value.style.top = "40px"
 value.display = "block"
  value.style.left = "80px"
}

 }


})

setInterval(function() {
 document.querySelectorAll("enemy").forEach(enemy => { // Looping each <enemy>
if (left > eneleft) eneleft++;
if (left < eneleft) eneleft--; // The Chase
if (top < enetop ) enetop--;
if (top > enetop) enetop++;



enemy.style.top = enetop + "px"
enemy.style.left = eneleft + "px"// Apply positions
 })
}, 38)

    document.addEventListener("keydown", (event) => {
  if (event.key === "W"|| event.key === "w") {
    top -= 5
    player.style.top = top  + "px" // Whole movement system
  }
  if (event.key === "S" || event.key === "s" ) {
    top += 5
    player.style.top = top + "px"
  }

  if (event.key === "a" || event.key === "A") {
    left -= 5
    player.style.left = left + "px"
  }

  if (event.key === "D"|| event.key === "d") {
    left += 5
    player.style.left = left + "px"
  }

     if (event.key === "ArrowUp" ) {
    arrtop -= 5
    playerArrow.style.top = arrtop + "px"
  }
  if (event.key === "ArrowDown" ) {
    arrtop += 5
    playerArrow.style.top = arrtop + "px"
  }

  if (event.key === "ArrowLeft") { // If it is the left arrow 
    arrleft -= 5
    playerArrow.style.left = arrleft + "px"
  }

  if (event.key === "ArrowRight") {
    arrleft += 5
    playerArrow.style.left = arrleft + "px"
  }

  
})
                     // Copy this for any changes
                   


console.log("Welcome! Go to https://jacalastre123.github.io/customStyle if you want the same for your code!")
