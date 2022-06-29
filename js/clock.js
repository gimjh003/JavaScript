const clock = document.querySelector("#clock")

function formatTime(time){
    return String(time).padStart(2,'0')
}

function setTime(){
    const date = new Date()
    const hours = formatTime(date.getHours())
    const minutes = formatTime(date.getMinutes())
    const seconds = formatTime(date.getSeconds())
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

setInterval(setTime, 1)