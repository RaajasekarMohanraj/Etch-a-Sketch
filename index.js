


function onRangeChange(){
    let div = document.getElementById("Selectors-div");
    div.children[0].textContent = div.children[1].value + " x " + div.children[1].value ;
    this.createGrid(div.children[1].value)
}

//960px wide
function createGrid(value = 16) {
    document.getElementById("grid-area").replaceChildren()
    for(let i=0; i< Number(value); i++) {
        let horizontalRowDiv = document.createElement("div");
        horizontalRowDiv.setAttribute("class", "horizontal-row");
        horizontalRowDiv.style.display = "flex";
        for(let j=0; j<Number(value); j++) {
            let oDiv = document.createElement("div");
            oDiv.setAttribute("id", "grid-item-"+i +"x"+j)
            oDiv.setAttribute("class", "grid-item")
            oDiv.style.backgroundColor = "white";
            oDiv.style.height = oDiv.style.width = 600/value +"px";
            oDiv.style.border = "2px black solid";
            oDiv.onmouseenter = onHoverGridItem
            horizontalRowDiv.appendChild(oDiv);
        }
        document.getElementById("grid-area").appendChild(horizontalRowDiv);
    }
}
function onHoverGridItem(event) {
    event.target.style.backgroundColor = "black";
}

function onReset() {
    let items = document.getElementsByClassName("grid-item");
    Array.from(items).forEach(element => element.style.backgroundColor = "white");
}