let codes = [
    "#", "---", "|", "-", "##", "___", "*LIST", "*", "<=" // Code list
]
const container = document.getElementById("container") // Get your container ID
let inTable = false // Is in table?
let inTh = false
let table;
let tHead;
let lineArray = []
let tRow;
let tRow2;
let ul; // Bunch of let statements for more universal access to other commands like lists and tables
let colList = []
function loader(post) {
    container.innerHTML = ""
fetch(post + ".wtd") // Fetch your post
.then(response => response.text())
.then(data => {
    const lines = data.split(/\r?\n/) // Splits it by newl ine

    let cmd; // Command

    lines.forEach(line => {

        const part = line.split(" ") //Split it
         cmd = part[0] // Command part
      
        const args = part.slice(1).join(" ") // Rest
        
        if (codes.includes(cmd)) {
            switch(cmd) { // Switch for many ifs

                case "___": // <hr>
                   
                    container.appendChild(document.createElement("hr"))
                    break;
                
               
                case "##": // <h4>
                    const subheadline = document.createElement("h3") // Create element
                    subheadline.innerText = args // Put text
                    container.appendChild(subheadline) // Put it to container
                    break; // End case

                 case "<=": // Assign text to ID
                    let argsSplit1 = args.split(" ")
                    let argsSplit2 = argsSplit1[0]
                   
                    
                    const id = document.getElementById(argsSplit2)
                    id.innerText = argsSplit1.slice(1).join(" ")

                    
                    break;

                case "#": // <h1>
                    const headline = document.createElement("h2")
                    headline.innerText = args
                    container.appendChild(headline)
                    break;

                case "*LIST": // <ul> only
                    ul = document.createElement("ul")
                    container.appendChild(ul)
                    break;

                case "*": // <li>
                    const li = document.createElement("li")
                    li.innerText = args
                    ul.appendChild(li)
                    break;

                case "---": // <table>
                    table = document.createElement("table")
                     tRow = document.createElement("tr")
                    container.appendChild(table)
                    inTable = true
                    break;

                

                case "|": // <th> + <tr>
                  let splitter =  args.split(" / ")
                  splitter.forEach(splits => {
                     tHead = document.createElement("th")
                    
                    tHead.innerText = splits
                    table.appendChild(tRow)
                    tRow.appendChild(tHead)
                  })
                   
                   
                    break;



                    case "-": // <tr> + <td>
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

                      else if (line.startsWith("(CLASS-")) {
                        let match3 = line.match(/\(CLASS-([^)]+)\)/)
                        if (match3) {
                            para.className = match3[1]
                            line = line.replace(match3[0], "").trim()
                        }
                        para.innerText = line
                    }
                    else {
                         para.innerText = line
                    }

                    container.appendChild(para)
                    
        } 
     


    })
    
})
.catch(err => console.error(err))

}
