let allElements = document.querySelectorAll("*")

allElements.forEach(value => {
  if (value.tagName.toLowerCase().startsWith("box-")) {
    let splits = value.tagName.toLowerCase().split("-")
    value.style.backgroundColor = splits[1]
    value.style.padding = "5px"
    value.style.borderRadius = "4.5px"
    if (splits[2] === "high") {
      value.style.padding = "15px"
    }
    
  }
      
})
console.log("Welcome! Go to https://jacalastre123.github.io/customStyle if you want the same for your code!")

// This above is how I make your custom tags like <box-red> actually red!

//If you want to do something similar without the boredom, here's how:

// HTML Body: Structure + <div class="red"><h3>Whatever here</h3></div> (The container to colour it, the class is the identifier)

//CSS:


// .red {
// background-color: red; (Your background color (Any colour or rgb here!)
// border-radius: 4.5px; (The curves on the edges)
// padding: 5px; (The extra space after the contents) or padding: 15px (if you want more padding AKA the high part)
// } 

// By Jacalastre123 
