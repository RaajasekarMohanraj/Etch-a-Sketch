
let colorOnHover = "black"
let isRandomColorEnabled = false;
let isOpaque = false;
function onRangeChange(){
    debugger
    let div = document.getElementById("range-value");
    div.children[1].textContent = div.children[0].value + " x " + div.children[0].value ;
    this.createGrid(div.children[0].value)
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
            // oDiv.style.border = "0.20px black solid";
            oDiv.onmouseenter = onHoverGridItem
            horizontalRowDiv.appendChild(oDiv);
        }
        document.getElementById("grid-area").appendChild(horizontalRowDiv);
    }
}
function onHoverGridItem(event) {
    event.target.style.backgroundColor = getColorOnHover();
}

function onReset() {
    let items = document.getElementsByClassName("grid-item");
    Array.from(items).forEach(element => element.style.backgroundColor = "white");
}

function onClickRainbow() {
    if(!isRandomColorEnabled){
        isOpaque = false;
        document.getElementById("opaque-button").style.border = "2px rgba(250,112,154,1) solid";
        event.target.style.border = "5px rgba(250,112,154,1) solid";
    }else{
        event.target.style.border = "2px rgba(250,112,154,1) solid"
    }
    isRandomColorEnabled = !isRandomColorEnabled;
}

function onClickOpaque(){
    if(!isOpaque){
        isRandomColorEnabled = false;
        document.getElementById("random-color-btn").style.border = "2px rgba(250,112,154,1) solid";
        event.target.style.border = "5px rgba(250,112,154,1) solid";
    }else{
        event.target.style.border = "2px rgba(250,112,154,1) solid";
    }
    isOpaque = !isOpaque;
}

function getColorOnHover() {
    if(isRandomColorEnabled){
        // return `rgb(${this.getRandomNumber(0, 255)}, ${this.getRandomNumber(0, 255)}, ${this.getRandomNumber(0, 255)}, ${1})`
        return this.getRandomHexCode();
    }else if(isOpaque) {
        return `rgba(${this.getRandomNumber(0, 255)}, ${this.getRandomNumber(0, 255)}, ${this.getRandomNumber(0, 255)}, ${0})`
    } else{
        return "rgba(250,112,154,1)";
    }
}
function getRandomHexCode(){
    let index = getRandomNumber(0, 1);
    if(index == 0){
        return `rgba(${255/* this.getRandomNumber(0, 255) */}, ${0}, ${this.getRandomNumber(0, 255)}, ${0.5})`
    } else{
        return `rgba(${0}, ${this.getRandomNumber(0, 255)}, ${255/* this.getRandomNumber(0, 255) */}, ${0.5})`
    }
}



function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}