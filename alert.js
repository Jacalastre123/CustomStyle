let allElements = document.querySelectorAll("*")
let dial;
allElements.forEach(value => {
if (value.tagName.toLowerCase().startsWith("alert")) {
  if (value.tagName.toLowerCase() === "alert-dialog") {
    dial = document.createElement("dialog")
      dial.innerHTML = value.innertext
    document.body.appendChild(dial)
      dial.showModal()
  }

  else {
    window.alert(dvalue.innerText)
  }
}
if (value.tagName.toLowerCase().startsWith("confirm-")) {
    
    splits = value.tagName.toLowerCase().split("-")
    varia.set(splits[1], false)
    if (splits[2] === "dialog") {
     dial = document.createElement("dialog")
      dial.innerHTML = ${value.innerText} + "<br><br><button onclick='truify()' >True</button><button onclick='falsify()'>False</button><button onclick='closure()'>Close</button>
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

