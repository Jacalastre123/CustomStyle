let allElements = document.querySelectorAll("*") // Pick all elements
let dial; // dialog
let splits; // Split characters
let varia = new Map() // Define your variables


allElements.forEach(value => {
if (value.tagName.toLowerCase().startsWith("alert")) {
  if (value.tagName.toLowerCase() === "alert-dialog") {
    dial = document.createElement("dialog") // Alert with dialog
      dial.innerHTML = value.innertext // Text
    document.body.appendChild(dial) //Append Child
      dial.showModal() // Show the dialog
  }

  else {
    window.alert(value.innerText) // Conventional
  }
}


if (value.tagName.toLowerCase().startsWith("confirm-")) {
    
    splits = value.tagName.toLowerCase().split("-")
    varia.set(splits[1], false)
    if (splits[2] === "dialog") {
     dial = document.createElement("dialog") 
      
      document.body.appendChild(dial)
        const trueBut = document.createElement("button") // True button
        trueBut.onclick = function() {
             varia.set(splits[1], true)
            dial.close()
        }
        trueBut.innerHTML = "True"
        trueBut.style.backgroundColor = "lime"
        trueBut.style.width = "48%"

        dial.appendChild(trueBut)


               const falseBut = document.createElement("button") //False button
        falseBut.onclick = function() {
             varia.set(splits[1], true)
            dial.close() // Close it
        }
        falseBut.innerHTML = "False"
        falseBut.style.backgroundColor = "#FF4F4F" // Background color
        falseBut.style.width = "48%" // Near half

        dial.appendChild(falseBut)


        
      dial.showModal()
      dial.style.padding = "10px" // Space after text
      dial.style.borderRadius = "5px" // Roundness of corners
    }
    else {
      varia.set(splits[1], window.confirm(value.innerText.trim())) // Conventional
    }
    
  }


      
})


