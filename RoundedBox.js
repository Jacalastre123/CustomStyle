let allElements = document.querySelectorAll("*")

allElements.forEach(value => {
  if (value.tagName.toLowerCase().startsWith("box-")) {
    let splits = value.split("-")
    value.style.backgroundColor = splits[1]
    if (splits[2] === "high") {
      value.style.padding = "15px"
    }
    
  }
      
})
  
  
