let codes = [
    "#", "---", "|", "-", "##", "___", "*LIST", "*", 
]
const container = document.getElementById("container")
let inTable = false
let inTh = false
let table;
let tHead;
let lineArray = []
let tRow;
let tRow2;
let ul;
function loader(post) {
    container.innerHTML = ""
fetch("/post/" + post + ".wtd")
.then(response => response.text())
.then(data => {
    const lines = data.split(/\r?\n/)

    let cmd;

    lines.forEach(line => {

        const part = line.split(" ")
         cmd = part[0]
      
        const args = part.slice(1).join(" ")
        
        if (codes.includes(cmd)) {
            switch(cmd) {

                case "___":
                   
                    container.appendChild(document.createElement("hr"))
                    break;

               
                case "##":
                    const subheadline = document.createElement("h3")
                    subheadline.innerText = args
                    container.appendChild(subheadline)
                    break;

                case "#":
                    const headline = document.createElement("h2")
                    headline.innerText = args
                    container.appendChild(headline)
                    break;

                case "*LIST":
                    ul = document.createElement("ul")
                    container.appendChild(ul)
                    break;

                case "*":
                    const li = document.createElement("li")
                    li.innerText = args
                    ul.appendChild(li)
                    break;

                case "---":
                    table = document.createElement("table")
                     tRow = document.createElement("tr")
                    container.appendChild(table)
                    inTable = true
                    break;

                

                case "|":
                  let splitter =  args.split(" / ")
                  splitter.forEach(splits => {
                     tHead = document.createElement("th")
                    
                    tHead.innerHTML = splits
                    table.appendChild(tRow)
                    tRow.appendChild(tHead)
                  })
                   
                   
                    break;



                    case "-":
                        tRow2 = document.createElement("tr")
                    table.appendChild(tRow2)
                   let splitter2 =  args.split(" / ")
                   splitter2.forEach(splits2 => {
                      const tD = document.createElement("td")
                    
                    
                   tD.innerText = splits2
                    tRow2.appendChild(tD)
                   })
                  
                  
                    break;

            }
           
        } 
       
       
        else if (line.startsWith("pic(")) {
            const imag = document.createElement("img")
                    imag.src = line.slice(4, -1)
                  
             
                    container.appendChild(imag)
        } 
         else if (line.trim() !== "" || line.includes("(SM)") || line.includes("(BD)") || line.includes("(COLOR-)")) {
                 const para = document.createElement("p")
                  
                    if (line.includes("(SM)")) {
                        para.innerHTML = "<small>" + args + "</small>"
                    }

                    else if (line.includes("(BD)")) {
                        para.innerHTML = "<b>" + args + "</b>"
                      
                    }

                    else if (cmd === "//") {
                   
                        
                    }

                    else if (line.includes("(COLOR-")) {
                        let match = line.match(/\(COLOR-([^)]+)\)/)
                        if (match) {
                            para.style.color = match[1]
                            line = line.replace(match[0], "").trim()
                        }
                        para.innerText = line
                    }
                    else {
                         para.innerText = line
                    }

                    container.appendChild(para)
                    
        } 

        console.log(cmd)
    })
    
})
.catch(err => console.error(err))

}