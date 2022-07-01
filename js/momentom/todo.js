const form = document.querySelector("#todo-form")
const input = form.querySelector("input")
const list = document.querySelector("#todo-list")

const TODOS_KEY = "todos"

let todos = JSON.parse(localStorage.getItem(TODOS_KEY))

if(todos===null){
    todos = []
}
todos.forEach((item) => paintTodo(item));

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function handleDelete(event){
    const li = event.target.parentNode
    todos = todos.filter(todo=>todo.id!==parseInt(li.id))
    saveTodos()
    li.remove()
}

function paintTodo(todo){
    const li = document.createElement("li")
    const todoText = document.createElement("span")
    const delTodo = document.createElement("button")
    li.id = todo.id
    todoText.innerText = todo.text
    delTodo.innerText = "X"
    delTodo.addEventListener("click", handleDelete)
    li.append(todoText, delTodo)
    list.append(li)
}

function handleTodoSubmit(event){
    event.preventDefault()
    const todo = {text:input.value, id: Date.now()}
    todos.push(todo)
    saveTodos()
    paintTodo(todo)
    input.value = ""
}

form.addEventListener("submit", handleTodoSubmit)