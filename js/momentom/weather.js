const API_KEY = "{AUTO_CENSORED_BY_GITHUB}"

function onGeoOk(location){
    const lat = location.coords.latitude;
    const lng = location.coords.longitude;
    const aep = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(aep).then((res)=>res.json()).then((data)=>{
        const name = document.querySelector("#weather span")
        const weather = document.querySelector("#weather span:last-child")
        name.innerText = data.name
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
    
}

function onGeoError(){
    console.log("Where the hell are you?")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)