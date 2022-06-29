const greeting = document.querySelector("#greeting")
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

let username = localStorage.getItem(USERNAME_KEY)

function paintGreetings(){
    greeting.innerText = `Welcome ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
    loginForm.classList.add(HIDDEN_CLASSNAME)
}

function onLoginSubmit(event){
    event.preventDefault()
    username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings()
}

if(username){
    paintGreetings()
} else {
    loginForm.classList.remove(HIDDEN_CLASSNAME)    
    loginForm.addEventListener("submit", onLoginSubmit)
}