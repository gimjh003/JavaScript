const canvas = document.getElementById("jsCanvas")
const ctx = canvas.getContext("2d")
const range = document.getElementById("jsRange")
const mode = document.getElementById("jsMode")
const save = document.getElementById("jsSave")

canvas.width = 700
canvas.height = 700

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;
ctx.fillStyle = "white"
ctx.fillRect(0,0,canvas.width, canvas.height)

let painting = false
let filling = false

function startPainting(){
    painting = true
}

function stopPainting(){
    painting = false
}

function onMouseMove(event){
    const x = event.offsetX
    const y = event.offsetY
    if(!painting){
        ctx.beginPath()
        ctx.moveTo(x, y)
    }else{
        ctx.lineTo(x, y)
        ctx.stroke()
    }
}

function onMouseDown(event){
    painting = true
}

function onMouseUp(event){
    stopPainting()
    if(filling){
        ctx.fillStyle = ctx.strokeStyle
        ctx.fillRect(0,0,canvas.width,canvas.height)
    }
}

function changeColor(event){
    ctx.strokeStyle = event.target.style.backgroundColor
}

function handleRangeChange(event){
    ctx.lineWidth = event.target.value
}

function handleModeClick(event){
    if(filling){
        filling = false
        mode.innerHTML = "Fill"
    }else{
        filling = true
        mode.innerHTML = "Paint"
    }
}

function handleCM(event){
    event.preventDefault()
}

function handleSaveClick(){
    const image = canvas.toDataURL("image/png")
    const link = document.createElement("a")
    link.download = "painting"
    link.href = image
    link.click()
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mousedown", onMouseDown)
    canvas.addEventListener("mouseup", onMouseUp)
    canvas.addEventListener("mouseleave", stopPainting)
    canvas.addEventListener("contextmenu", handleCM)
}

if(range){
    range.addEventListener("input", handleRangeChange)
}

if(mode){
    mode.addEventListener("click", handleModeClick)
}

if(save){
    save.addEventListener("click", handleSaveClick)
}

Array.from(document.getElementsByClassName("jsColor")).forEach((color)=>color.addEventListener("click", changeColor))