let allElements = document.querySelectorAll("*")

allElements.forEach(value => {
  if (value.tagName.toLowerCase().startsWith("box-")) {
    let splits = value.tagName.split("-")
    value.style.backgroundColor = splits[1]
    value.style.padding = "5px"
    value.style.borderRadius = "4.5px"
    if (splits[2] === "high") {
      value.style.padding = "15px"
    }
    
  }
      
})
console.log("Welcome! Go to https://jacalastre123.github.io/customStyle!")
  
