let allElements = document.querySelectorAll("*") // Pick all elements


allElements.forEach(value => {
if (value.tagName.toLowerCase() === "speak") { // start the speaking
  const speech = new speechSynthesisUtterance(value.innerText) // Start the talking
  if (value.dataset.pitch !== "") { // pitch setting
    speech.pitch = parseInt(value.dataset.pitch) // parse integer
  }

  if (value.dataset.vol !== "") { // Volume 0.1 to 1
    speech.volume = parseInt(value.dataset.vol) // the volume
  }

  if (value.dataset.language !== "") {
    speech.lang = parseInt(value.dataset.language)
  }
  speechSynthesis.speak(speech)
  
}


      
})
