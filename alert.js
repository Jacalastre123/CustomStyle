let allElements = document.querySelectorAll("*")
let dial;
let splits;
let varia = new Map()
allElements.forEach(value => {
if (value.tagName.toLowerCase().startsWith("alert")) {
  if (value.tagName.toLowerCase() === "alert-dialog") {
    dial = document.createElement("dialog")
      dial.innerHTML = value.innertext
    document.body.appendChild(dial)
      dial.showModal()
  }

  else {
    window.alert(value.innerText)
  }
}
if (value.tagName.toLowerCase().startsWith("confirm-")) {
    
    splits = value.tagName.toLowerCase().split("-")
    varia.set(splits[1], false)
    if (splits[2] === "dialog") {
     dial = document.createElement("dialog")
      dial.innerHTML = `${value.innerText} + "<br><br><button onclick='truify()' style='background-color: lime; width: 48.5%'>True</button><button onclick='falsify()' style='background-color: red; width: 48.5%'>False</button><br><button onclick='closure()' style='width: 98%; background-color: white;'>Close</button>`
      document.body.appendChild(dial)
      dial.showModal()
      
    }
    else {
      varia.set(splits[1], window.confirm(value.innerText.trim()))
    }
    
  }

  function truify() {
    varia.set(splits[1], true)
  }

  function falsify() {
    varia.set(splits[1], false)
  }

 function closure() {
    dial.close()
  }
      
})

